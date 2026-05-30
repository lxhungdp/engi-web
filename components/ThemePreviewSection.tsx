"use client";

import { useState } from "react";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { LivePreview } from "@/components/LivePreview";
import type { ThemeModeId } from "@/lib/types";

export function ThemePreviewSection() {
  const [selectedMode, setSelectedMode] = useState<ThemeModeId>("tech");

  return (
    <>
      <StyleSwitcher selected={selectedMode} onSelect={setSelectedMode} />
      <LivePreview mode={selectedMode} />
    </>
  );
}
