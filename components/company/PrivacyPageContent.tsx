import { privacyPolicy } from "@/lib/adapters/company";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function PrivacyPageContent() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className={cn(tc.headingLg)}>{privacyPolicy.title}</h1>
        <p className={cn("mt-2 text-sm", tc.body)}>
          Last updated: {privacyPolicy.lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {privacyPolicy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={cn(tc.headingMd)}>{section.heading}</h2>
              <p className={cn("mt-3", tc.body)}>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
