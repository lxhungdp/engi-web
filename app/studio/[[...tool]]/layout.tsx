export { metadata, viewport } from "next-sanity/studio";

export const dynamic = "force-dynamic";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#101112]">
      {children}
    </div>
  );
}
