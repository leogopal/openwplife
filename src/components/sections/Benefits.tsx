import { SectionHeader } from "@/components/ui/section-header";
import { BenefitCard } from "./benefits/benefit-card";
import { benefits } from "./benefits/benefits-data";

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-24 md:py-32">
      <div className="container px-4">
        <SectionHeader
          title="Why Join OpenWP?"
          description="Discover the advantages of being part of our growing WordPress community"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}