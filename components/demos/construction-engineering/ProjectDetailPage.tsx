import { MapPin, Calendar } from "lucide-react";
import type { ConstructionProject } from "@/lib/types/construction-engineering";
import { getProjectBySlug } from "@/lib/data/construction-engineering/projects";
import { constructionRoutes } from "@/lib/data/construction-engineering/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { getDemoIcon } from "@/lib/demo-icons";
import { ConstructionCTA } from "./ConstructionCTA";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProjectDetailPage({ project }: { project: ConstructionProject }) {
  const related = project.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  return (
    <>
      <section className={tc.pageHero}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded border border-border bg-background-muted px-3 py-1 text-xs font-medium text-foreground-muted">
                {project.category}
              </span>
              <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                {project.name}
              </h1>
              <p className={cn("mt-4 text-lg", tc.body)}>{project.description}</p>
              <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-foreground-muted">Location</dt>
                  <dd className="mt-0.5 flex items-center gap-1 font-medium text-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    {project.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-foreground-muted">Year</dt>
                  <dd className="mt-0.5 flex items-center gap-1 font-medium text-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    {project.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-foreground-muted">Sector</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{project.categoryFilter}</dd>
                </div>
                <div>
                  <dt className="text-foreground-muted">Status</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{project.status}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-foreground-secondary">
                {project.services.join(" · ")}
              </p>
            </div>
            <div className={cn("relative aspect-[4/3] overflow-hidden rounded-2xl", tc.mockup)}>
              <div className="absolute inset-0 blueprint-lines" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-border bg-card/90 p-4 backdrop-blur-sm">
                <p className="text-xs text-foreground-muted">Project dashboard</p>
                <p className="font-heading mt-1 font-semibold text-foreground">{project.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Project overview" />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-heading font-semibold text-foreground">Challenge</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>{project.challenge}</p>
              <h3 className="font-heading mt-6 font-semibold text-foreground">Engineering approach</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>{project.approach}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Scope of work</h3>
              <ul className="mt-3 space-y-2">
                {project.scopeOfWork.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="font-heading mt-6 font-semibold text-foreground">Key deliverables</h3>
              <ul className="mt-3 space-y-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-accent">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Technical scope" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.technicalScope.map((item) => {
              const Icon = getDemoIcon(item.icon);
              return (
                <div key={item.title} className={cn(tc.card, "p-5")}>
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">{item.title}</h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Project metrics" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className={cn(tc.card, "p-6 text-center")}>
                <p className="font-heading text-2xl font-bold text-accent">{m.value}</p>
                <p className={cn("mt-1 text-sm", tc.body)}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Visual documentation" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Concept drawing", "Construction phase", "Structural section", "Project dashboard"].map(
              (label) => (
                <div
                  key={label}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background-muted",
                  )}
                >
                  <div className="absolute inset-0 blueprint-lines opacity-50" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="rounded bg-card/90 px-2 py-1 text-xs text-foreground-muted backdrop-blur-sm">
                      {label}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={cn("py-16", tc.sectionAlt)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="left" title="Related projects" />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {related.map((p, i) => p && <ProjectCard key={p.slug} project={p} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <ConstructionCTA
        title="Need a project portfolio like this for your engineering company?"
        description="EngiWeb builds professional corporate websites with structured project portfolios, service pages, and credibility-focused design for construction and engineering firms."
        primaryHref="/contact"
        primaryLabel="Contact EngiWeb"
        secondaryHref={constructionRoutes.projects}
        secondaryLabel="View More Projects"
      />
    </>
  );
}
