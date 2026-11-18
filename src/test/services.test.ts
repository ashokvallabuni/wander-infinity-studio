import { describe, expect, it } from "vitest";
import { DIVISIONS, findService, serviceLabel } from "@/lib/services";

describe("service directory", () => {
  it("has the seven divisions", () => {
    expect(DIVISIONS).toHaveLength(7);
  });

  it("gives every division subservices with deliverables", () => {
    for (const d of DIVISIONS) {
      expect(d.services.length).toBeGreaterThan(0);
      for (const s of d.services) expect(s.deliverables.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("uses unique slugs so a preselected service is unambiguous", () => {
    const slugs = DIVISIONS.flatMap((d) => [d.slug, ...d.services.map((s) => s.slug)]);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("does not list a service twice across divisions", () => {
    const names = DIVISIONS.flatMap((d) => d.services.map((s) => s.name.toLowerCase()));
    expect(new Set(names).size).toBe(names.length);
  });

  it("resolves Business Websites for the enquiry form", () => {
    expect(findService("website-app-development", "business-websites")?.service.name).toBe(
      "Business Websites",
    );
    expect(serviceLabel("business-websites")).toBe("Business Websites — Website & App Development");
  });
});
