import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "./community/testimonial-card";
import { testimonials } from "./community/testimonials-data";

export function Community() {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="container px-4">
        <SectionHeader
          title="Community Voices"
          description="Hear from our members about their experiences in the OpenWP community"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}