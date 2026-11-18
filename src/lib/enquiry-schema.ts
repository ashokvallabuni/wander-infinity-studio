import { z } from "zod";

export const ENQUIRY_RECIPIENT = "wanderinfinitymedia@gmail.com";
export const SITE_NAME = "Wander Infinity Media";
/** Submissions faster than this after the form appears are treated as bots. */
export const MIN_FILL_MS = 3000;

export const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "Above ₹10,00,000",
  "Not sure yet",
] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

export const enquirySchema = z.object({
  clientToken: z.string().uuid(),
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+()\-\s\d]*$/, "Please enter a valid phone number")
    .optional()
    .transform((v) => (v ? v : undefined)),
  company: optionalText(120),
  service: z.string().trim().min(1, "Please choose a service").max(200),
  budget: optionalText(60),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(3000),
  /** Honeypot — real visitors never see or fill this. */
  website: z.string().max(0, "spam").optional(),
  startedAt: z.number().int(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;

/** Stable, human-friendly reference derived from the one-time form token. */
export const enquiryReference = (clientToken: string) =>
  `WIM-${clientToken.replace(/-/g, "").slice(0, 8).toUpperCase()}`;

export const isTooFast = (startedAt: number, now: number) => now - startedAt < MIN_FILL_MS;

export const emailSubject = (reference: string, service: string) =>
  `[${SITE_NAME}] New enquiry ${reference} — ${service}`;
