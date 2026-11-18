import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquiryReference, enquirySchema, isTooFast, ENQUIRY_RECIPIENT } from "./enquiry-schema";
import { serviceLabel } from "./services";

export type EnquiryResult =
  | { ok: true; reference: string }
  | { ok: false; error: string };

// Owner email notifications stay off until a verified sender domain exists.
// When it does, send the owner-notification template here after the insert and set
// email_status from the real send result (never report success on a failed send).
const EMAIL_NOTIFICATIONS_ENABLED = false;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    const reference = enquiryReference(data.clientToken);

    // Bots: filled the hidden field or submitted inhumanly fast. Pretend nothing happened.
    if (data.website || isTooFast(data.startedAt, Date.now())) {
      return { ok: false, error: "Please wait a moment and try again." };
    }

    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return { ok: false, error: "Enquiries are temporarily unavailable." };

    const db = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`)
            h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await db.from("enquiries").insert({
      reference,
      client_token: data.clientToken,
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      company: data.company ?? null,
      service: serviceLabel(data.service) ?? data.service,
      service_slug: data.service,
      budget: data.budget ?? null,
      message: data.message,
      recipient: ENQUIRY_RECIPIENT,
      email_status: EMAIL_NOTIFICATIONS_ENABLED ? "pending" : "not_configured",
    });

    // Same one-time token submitted twice (double click / retry): already received.
    if (error && error.code !== "23505") {
      console.error("Enquiry insert failed", error.code, error.message);
      return { ok: false, error: "We couldn't save your enquiry. Please try again." };
    }

    return { ok: true, reference };
  });
