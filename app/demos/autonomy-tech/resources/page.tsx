import type { Metadata } from "next";
import { PageHero } from "@/components/demos/autonomy-tech/PageHero";
import { ResourceCard } from "@/components/demos/autonomy-tech/ResourceCard";
import { resources, resourcesHero } from "@/lib/data/autonomy-tech/resources-data";

export const metadata: Metadata = {
  title: "Resources — NexaBot AI",
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
