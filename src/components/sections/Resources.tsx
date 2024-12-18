import { SectionHeader } from "@/components/ui/section-header";
import { ResourceCard } from "./resources/resource-card";
import { categories } from "./resources/resources-data";

export function Resources() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <SectionHeader
          title="Resource Library"
          description="Explore our growing collection of WordPress resources, created and curated by the community"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category, index) => (
            <ResourceCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}