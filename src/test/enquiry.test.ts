import { describe, expect, it } from "vitest";
import {
  ENQUIRY_RECIPIENT,
  emailSubject,
  enquiryReference,
  enquirySchema,
  isTooFast,
} from "@/lib/enquiry-schema";

const valid = {
  clientToken: "3f2b8c1e-1234-4abc-9def-0123456789ab",
  name: "Asha",
  email: "asha@example.com",
  service: "business-websites",
  message: "We need a new business website.",
  website: "",
  startedAt: 0,
};

describe("enquiries", () => {
  it("are delivered to the official inbox", () => {
    expect(ENQUIRY_RECIPIENT).toBe("wanderinfinitymedia@gmail.com");
  });

  it("reject a filled honeypot", () => {
    expect(enquirySchema.safeParse({ ...valid, website: "http://spam" }).success).toBe(false);
  });

  it("reject a missing service", () => {
    expect(enquirySchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });

  it("treat submissions under 3 seconds as bots", () => {
    expect(isTooFast(1000, 3500)).toBe(true);
    expect(isTooFast(1000, 4000)).toBe(false);
  });

  it("give the same reference for a resubmitted form", () => {
    expect(enquiryReference(valid.clientToken)).toBe("WIM-3F2B8C1E");
  });

  it("put the website name and reference in the email subject", () => {
    expect(emailSubject("WIM-3F2B8C1E", "Business Websites")).toBe(
      "[Wander Infinity Media] New enquiry WIM-3F2B8C1E — Business Websites",
    );
  });
});
