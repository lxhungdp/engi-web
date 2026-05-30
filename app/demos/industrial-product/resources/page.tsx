import { PageHero } from "@/components/demos/industrial-product/SectionHeading";
import { ResourceCard } from "@/components/demos/industrial-product/ResourceCard";
import { resources, resourcesHero } from "@/lib/data/industrial-product/resources-data";

export const metadata = {
  title: "Resources — Vertex Systems",
  description: resourcesHero.description,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={resourcesHero.title}
        description={resourcesHero.description}
      />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <ResourceCard key={r.id} resource={r} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
