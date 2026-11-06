import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const areas = [
  { id: "calm", title: "Calm", background: "#BDEBD4", ink: "#303830" },
  { id: "nutrition", title: "Nutrition", background: "#80B45A", ink: "#fff" },
  { id: "movement", title: "Movement", background: "#FFD77A", ink: "#303830" },
  { id: "self-kindness", title: "Self-kindness", background: "#FFA152", ink: "#fff" },
  { id: "sleep", title: "Sleep", background: "#7051B6", ink: "#fff" },
  { id: "connection", title: "Connection", background: "#7A7BC0", ink: "#fff" },
];

export default function FocusPage() {
  return <main className="reference-page focus-page">
    <header className="reference-heading"><Link href="/home#memories" className="reference-back" aria-label="Back to memories"><ChevronLeft size={26} /></Link><h1>What area do you want to focus on?</h1></header>
    <div className="focus-area-grid">{areas.map(area => <Link key={area.id} href={`/activities?focus=${area.id}`} className={`focus-area focus-${area.id}`} style={{ background: area.background, color: area.ink }}><h2>{area.title}</h2><Image src={`/art/screens/focus-${area.id}.webp`} alt="" width={512} height={512} unoptimized /></Link>)}</div>
  </main>;
}
