import {
  PageHero as BasePageHero,
  SectionHeading as SharedSectionHeading,
  type PageHeroProps,
  type SectionHeadingProps,
} from "@/components/ui/SectionHeading";

export function SectionHeading(props: SectionHeadingProps) {
  return <SharedSectionHeading {...props} />;
}

/** Industrial demo inner pages use hero glow by default. */
export function PageHero(props: PageHeroProps) {
  return <BasePageHero {...props} glow />;
}
