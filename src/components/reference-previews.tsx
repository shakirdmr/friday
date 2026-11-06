import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const screens = [{ href: "/focus", label: "Focus areas", glyph: "🍃", color: "#E5F4E8" }, { href: "/activities", label: "Activities", glyph: "✈️", color: "#F8E3F0" }, { href: "/wardrobe", label: "Your wardrobe", glyph: "👚", color: "#F7F0D1" }, { href: "/feature", label: "What's new", glyph: "💌", color: "#DFF5EF" }, { href: "/hatch", label: "Meet a micropet", glyph: "🥚", color: "#DFF3FD" }];

export function ReferencePreviews() {
  return <section className="reference-previews" aria-labelledby="reference-previews-title"><div><h2 id="reference-previews-title">Explore your world</h2><span>A few new places to try.</span></div><nav aria-label="Screen previews">{screens.map(screen => <Link key={screen.href} href={screen.href}><span className="reference-preview-glyph" style={{ background: screen.color }} aria-hidden="true">{screen.glyph}</span><span>{screen.label}</span><ArrowUpRight size={14} /></Link>)}</nav></section>;
}
