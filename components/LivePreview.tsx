"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { themeModes } from "@/lib/data/theme-modes";
import type { ThemeModeId } from "@/lib/types";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface LivePreviewProps {
  mode: ThemeModeId;
}

const modeStyles: Record<
  ThemeModeId,
  {
    wrapper: string;
    browser: string;
    header: string;
    accent: string;
    card: string;
    text: string;
    muted: string;
    cta: string;
    layout: "dashboard" | "grid" | "product" | "scientific" | "minimal";
  }
> = {
  tech: {
    wrapper: "from-cyan-950/50 to-[#060b14]",
    browser: "bg-[#0a1020]/90 border-cyan-500/20",
    header: "border-white/5 bg-gradient-to-r from-cyan-500/5 to-blue-500/5",
    accent: "text-cyan-400",
    card: "bg-white/5 border-white/10 backdrop-blur-sm",
    text: "text-white",
    muted: "text-zinc-400",
    cta: "bg-gradient-to-r from-cyan-500 to-blue-500 text-[#060b14]",
    layout: "dashboard",
  },
  engineering: {
    wrapper: "from-slate-900/80 to-[#0a0f18]",
    browser: "bg-[#0d1525]/95 border-slate-600/30",
    header: "border-slate-600/20 bg-slate-800/30",
    accent: "text-sky-300",
    card: "bg-slate-800/40 border-slate-600/30",
    text: "text-slate-100",
    muted: "text-slate-400",
    cta: "bg-sky-600 text-white",
    layout: "grid",
  },
  product: {
    wrapper: "from-orange-950/30 to-[#060b14]",
    browser: "bg-[#111827]/95 border-orange-500/20",
    header: "border-white/5 bg-gradient-to-r from-orange-500/10 to-amber-500/5",
    accent: "text-orange-400",
    card: "bg-white/5 border-orange-500/15",
    text: "text-white",
    muted: "text-zinc-400",
    cta: "bg-orange-500 text-white",
    layout: "product",
  },
  biotech: {
    wrapper: "from-emerald-950/30 to-[#f8fafc]",
    browser: "bg-white border-emerald-200/60 shadow-xl",
    header: "border-emerald-100 bg-emerald-50/80",
    accent: "text-emerald-600",
    card: "bg-emerald-50/80 border-emerald-200/60",
    text: "text-slate-900",
    muted: "text-slate-500",
    cta: "bg-emerald-600 text-white",
    layout: "scientific",
  },
  premium: {
    wrapper: "from-zinc-900/50 to-black",
    browser: "bg-black border-zinc-800",
    header: "border-zinc-800 bg-zinc-950",
    accent: "text-white",
    card: "bg-zinc-950 border-zinc-800",
    text: "text-white",
    muted: "text-zinc-500",
    cta: "bg-white text-black",
    layout: "minimal",
  },
};

function PreviewContent({
  mode,
  styles,
}: {
  mode: (typeof themeModes)[0];
  styles: (typeof modeStyles)[ThemeModeId];
}) {
  const { preview } = mode;

  if (styles.layout === "dashboard") {
    return (
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs font-medium ${styles.accent}`}>
              {preview.companyName}
            </p>
            <h3
              className={`mt-1 font-heading text-lg font-bold leading-tight ${styles.text}`}
            >
              {preview.heroTitle}
            </h3>
            <p className={`mt-2 text-xs leading-relaxed ${styles.muted}`}>
              {preview.heroSubtitle}
            </p>
          </div>
          <button
            type="button"
            className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold ${styles.cta}`}
          >
            {preview.ctaLabel}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {preview.features.map((f) => (
            <div key={f.title} className={`rounded-lg border p-3 ${styles.card}`}>
              <p className={`text-[10px] ${styles.muted}`}>{f.title}</p>
              <p className={`mt-1 font-heading text-base font-bold ${styles.text}`}>
                {f.value}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {preview.services.map((s) => (
            <div key={s.title} className={`rounded-lg border p-3 ${styles.card}`}>
              <p className={`text-xs font-medium ${styles.text}`}>{s.title}</p>
              <p className={`mt-1 text-[10px] leading-relaxed ${styles.muted}`}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (styles.layout === "grid") {
    return (
      <div className="relative p-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 border-b border-slate-600/30 pb-3">
            <div className={`h-2 w-2 rounded-sm ${styles.accent} bg-current`} />
            <p className={`text-xs font-mono tracking-wider ${styles.accent}`}>
              {preview.companyName.toUpperCase()}
            </p>
          </div>
          <h3
            className={`mt-4 font-heading text-xl font-bold leading-tight ${styles.text}`}
          >
            {preview.heroTitle}
          </h3>
          <p className={`mt-2 max-w-md text-xs leading-relaxed ${styles.muted}`}>
            {preview.heroSubtitle}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {preview.services.map((s) => (
              <div
                key={s.title}
                className={`rounded border-l-2 border-sky-400/60 p-3 ${styles.card}`}
              >
                <p className={`text-xs font-semibold ${styles.text}`}>
                  {s.title}
                </p>
                <p className={`mt-1 text-[10px] ${styles.muted}`}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className={`mt-4 rounded border p-3 ${styles.card}`}>
            <p className={`text-[10px] font-mono uppercase tracking-wider ${styles.accent}`}>
              {preview.specLabel}
            </p>
            <div className="mt-2 space-y-1">
              {preview.specItems.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between border-b border-slate-600/20 py-1 text-[10px] last:border-0"
                >
                  <span className={styles.muted}>{item.label}</span>
                  <span className={`font-mono ${styles.text}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (styles.layout === "product") {
    return (
      <div className="p-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div
              className={`flex aspect-square items-center justify-center rounded-xl border ${styles.card}`}
            >
              <div className="text-center">
                <div className={`mx-auto h-16 w-16 rounded-2xl bg-orange-500/20 ring-1 ring-orange-500/30`} />
                <p className={`mt-3 text-[10px] ${styles.muted}`}>Product Image</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <p className={`text-xs font-bold uppercase tracking-wider ${styles.accent}`}>
              {preview.companyName}
            </p>
            <h3
              className={`mt-2 font-heading text-lg font-bold leading-tight ${styles.text}`}
            >
              {preview.heroTitle}
            </h3>
            <p className={`mt-2 text-xs ${styles.muted}`}>{preview.heroSubtitle}</p>
            <button
              type="button"
              className={`mt-4 rounded-lg px-4 py-2 text-xs font-bold ${styles.cta}`}
            >
              {preview.ctaLabel}
            </button>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {preview.features.map((f) => (
                <div key={f.title} className="text-center">
                  <p className={`font-heading text-sm font-bold ${styles.accent}`}>
                    {f.value}
                  </p>
                  <p className={`text-[10px] ${styles.muted}`}>{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`mt-4 rounded-lg border ${styles.card} overflow-hidden`}>
          <div className={`border-b px-3 py-2 text-[10px] font-semibold ${styles.text}`}>
            {preview.specLabel}
          </div>
          {preview.specItems.map((item) => (
            <div
              key={item.label}
              className="flex justify-between border-b border-white/5 px-3 py-2 text-[10px] last:border-0"
            >
              <span className={styles.muted}>{item.label}</span>
              <span className={`font-medium ${styles.text}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (styles.layout === "scientific") {
    return (
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
            <span className="text-lg">🧬</span>
          </div>
          <div>
            <p className={`text-xs font-semibold ${styles.accent}`}>
              {preview.companyName}
            </p>
            <p className={`text-[10px] ${styles.muted}`}>Research & Diagnostics</p>
          </div>
        </div>
        <h3
          className={`mt-4 font-heading text-xl font-bold leading-tight ${styles.text}`}
        >
          {preview.heroTitle}
        </h3>
        <p className={`mt-2 text-xs leading-relaxed ${styles.muted}`}>
          {preview.heroSubtitle}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {preview.features.map((f) => (
            <div
              key={f.title}
              className={`rounded-lg border p-3 text-center ${styles.card}`}
            >
              <p className={`font-heading text-lg font-bold ${styles.accent}`}>
                {f.value}
              </p>
              <p className={`text-[10px] ${styles.muted}`}>{f.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {preview.services.map((s) => (
            <div key={s.title} className="flex items-start gap-2">
              <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.accent}`} />
              <div>
                <p className={`text-xs font-medium ${styles.text}`}>{s.title}</p>
                <p className={`text-[10px] ${styles.muted}`}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold ${styles.cta}`}
        >
          {preview.ctaLabel}
        </button>
      </div>
    );
  }

  // minimal (premium)
  return (
    <div className="p-8">
      <p className={`text-[10px] tracking-[0.3em] uppercase ${styles.muted}`}>
        {preview.companyName}
      </p>
      <h3
        className={`mt-6 font-heading text-2xl font-light leading-tight tracking-tight ${styles.text}`}
      >
        {preview.heroTitle}
      </h3>
      <p className={`mt-4 max-w-sm text-sm font-light leading-relaxed ${styles.muted}`}>
        {preview.heroSubtitle}
      </p>
      <div className="mt-8 space-y-4">
        {preview.services.slice(0, 2).map((s) => (
          <div key={s.title} className="border-t border-zinc-800 pt-4">
            <p className={`text-sm font-medium ${styles.text}`}>{s.title}</p>
            <p className={`mt-1 text-xs ${styles.muted}`}>{s.description}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`mt-8 rounded-none border px-6 py-2.5 text-xs font-medium tracking-wider uppercase ${styles.cta}`}
      >
        {preview.ctaLabel}
      </button>
    </div>
  );
}

export function LivePreview({ mode }: LivePreviewProps) {
  const currentMode = themeModes.find((m) => m.id === mode)!;
  const styles = modeStyles[mode];

  return (
    <section className="relative pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className={tc.headingLg}>
            Same company. Different web experience.
          </h2>
          <p className={cn("mx-auto mt-4 max-w-xl", tc.body)}>
            Each mode transforms layout, typography, and visual hierarchy — not
            just colors.
          </p>
        </motion.div>

        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-background-muted to-background p-1",
            styles.wrapper,
          )}
        >
          <div
            className={cn(
              "overflow-hidden rounded-xl border shadow-2xl",
              styles.browser,
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 border-b px-4 py-2.5",
                styles.header,
              )}
            >
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-amber-400/60" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
              </div>
              <span className={`ml-2 text-[10px] ${styles.muted}`}>
                {currentMode.preview.companyName.toLowerCase().replace(/\s+/g, "")}.com
              </span>
              <span
                className={cn(
                  "ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium",
                  mode === "biotech"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-white/10 text-zinc-400",
                )}
              >
                {currentMode.name}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <PreviewContent mode={currentMode} styles={styles} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground-muted">
          <ArrowRight className="h-4 w-4 text-accent" />
          <span>
            Currently viewing:{" "}
            <span className="text-accent">{currentMode.name}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
