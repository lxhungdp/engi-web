"use client";

import { motion } from "framer-motion";
import type { IndustrialProduct } from "@/lib/types/industrial-product";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function DroneVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center">
      <svg viewBox="0 0 200 140" className="w-3/4 max-w-xs" fill="none">
        <line x1="100" y1="70" x2="45" y2="35" stroke="currentColor" strokeOpacity="0.3" />
        <line x1="100" y1="70" x2="155" y2="35" stroke="currentColor" strokeOpacity="0.3" />
        <line x1="100" y1="70" x2="45" y2="105" stroke="currentColor" strokeOpacity="0.3" />
        <line x1="100" y1="70" x2="155" y2="105" stroke="currentColor" strokeOpacity="0.3" />
        {[[45,35],[155,35],[45,105],[155,105]].map(([cx,cy],i) => (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx="16" ry="4" stroke="currentColor" strokeOpacity="0.5" className="text-accent" />
            <circle cx={cx} cy={cy} r="3" className="fill-accent" />
          </g>
        ))}
        <rect x="78" y="58" width="44" height="24" rx="6" stroke="currentColor" strokeOpacity="0.4" className="fill-accent/10" />
        <circle cx="100" cy="95" r="5" stroke="currentColor" strokeOpacity="0.5" className="fill-accent/20" />
      </svg>
    </div>
  );
}

function RoverVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center px-8">
      <div className="w-full max-w-xs rounded-xl border border-border bg-background-muted/50 p-4">
        <div className="flex gap-1 mb-3">
          {[1,2,3,4].map(i => <div key={i} className="h-2 flex-1 rounded bg-accent/30" />)}
        </div>
        <div className="mx-auto h-16 w-24 rounded-lg border-2 border-accent/40 bg-accent/10" />
        <div className="mt-3 flex justify-between">
          <span className="text-[10px] text-foreground-muted">360° CAM</span>
          <span className="text-[10px] text-emerald-500">PATROL</span>
        </div>
      </div>
    </div>
  );
}

function LidarVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center">
      <div className="relative h-32 w-32">
        {[1,2,3,4,5].map(i => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="absolute inset-0 rounded-full border border-accent/40"
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-accent/30 ring-2 ring-accent" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-5 gap-0.5 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-sm bg-accent/60" style={{ opacity: Math.random() * 0.8 + 0.2 }} />
        ))}
      </div>
    </div>
  );
}

function SensorVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="h-6 w-6 rounded-full bg-accent/20 ring-2 ring-accent/40" />
            {i < 4 && <div className="h-px w-8 bg-accent/30" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CameraVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center px-6">
      <div className="w-full max-w-xs rounded-xl border border-border bg-background-muted/50 p-3">
        <div className="aspect-video rounded-lg border border-dashed border-accent/30 bg-accent/5 relative overflow-hidden">
          <div className="absolute inset-3 border-2 border-emerald-500/50 rounded" />
          <div className="absolute top-2 right-2 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] text-emerald-600 dark:text-emerald-400">
            DETECTED
          </div>
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-foreground-muted">
          <span>Edge AI</span>
          <span className="text-accent">Live</span>
        </div>
      </div>
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center">
      <div className="w-[100px] overflow-hidden rounded-[1.5rem] border-2 border-border bg-background-muted shadow-mockup">
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <div className="h-12 w-12 rounded-full bg-accent/15 ring-1 ring-accent/25" />
          <div className="h-1 w-8 rounded-full bg-border" />
        </div>
      </div>
    </div>
  );
}

const visuals = {
  phone: PhoneVisual,
  drone: DroneVisual,
  rover: RoverVisual,
  lidar: LidarVisual,
  sensor: SensorVisual,
  camera: CameraVisual,
};

export function ProductVisual({ product }: { product: IndustrialProduct }) {
  const Visual = visuals[product.visualType];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("overflow-hidden", tc.mockup)}
    >
      <div className={cn("px-4 py-2 text-xs text-foreground-muted", tc.mockupInner)}>
        {product.name} — Product Preview
      </div>
      <div className="text-accent">
        <Visual />
      </div>
    </motion.div>
  );
}

/** Floating product cards for homepage hero */
export function ProductShowcaseHero() {
  const items = [
    { name: "Smart Inspection Drone", pos: "top-0 left-0", delay: 0.3 },
    { name: "Inspection Rover", pos: "top-8 right-0", delay: 0.45 },
    { name: "LiDAR Mapping Unit", pos: "bottom-24 left-0", delay: 0.6 },
    { name: "IoT Sensor", pos: "bottom-12 right-4", delay: 0.75 },
    { name: "AI Vision Camera", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", delay: 0.2, center: true },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full hero-glow-1 blur-3xl" />
      <div className={cn("absolute inset-4 rounded-2xl", tc.mockup)}>
        <div className={cn("px-4 py-3 text-xs text-foreground-muted", tc.mockupInner)}>
          vertex-systems.com/products
        </div>
        <div className="relative h-[calc(100%-3rem)] p-4">
          {items.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className={cn(
                "absolute rounded-xl border border-border bg-card px-3 py-2 shadow-card",
                item.center ? "z-10 w-44 text-center" : "hidden sm:block",
                !item.center && item.pos,
              )}
            >
              <p className="text-[10px] font-medium text-accent">Vertex</p>
              <p className="text-xs font-semibold text-foreground">{item.name}</p>
            </motion.div>
          ))}
          <div className="flex h-full items-center justify-center sm:hidden">
            <p className="text-center text-sm text-foreground-muted">
              5 product lines for field intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
