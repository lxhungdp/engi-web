import type { ProductSpec } from "@/lib/types/industrial-product";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductSpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border", tc.card)}>
      <div className={cn("hidden grid-cols-2 px-6 py-3 sm:grid", tc.tableHeader)}>
        <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
          Parameter
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
          Specification
        </span>
      </div>
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          className={cn(
            "grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-2 sm:gap-4 sm:py-3.5",
            i !== specs.length - 1 && "border-b border-border",
            tc.tableRow,
          )}
        >
          <span className="text-sm font-medium text-foreground-muted">{spec.label}</span>
          <span className="text-sm font-medium text-foreground">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
