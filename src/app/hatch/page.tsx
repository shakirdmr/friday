"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Tumtum } from "@/components/reference-art";

export default function HatchPage() {
  const [hatched, setHatched] = useState(true);
  return <main className="reference-page hatch-page">
    <Link href="/wardrobe" className="hatch-back" aria-label="Back to wardrobe"><ArrowLeft size={24} /></Link>
    <button className="hatch-replay" aria-label="Replay hatching" onClick={() => setHatched(false)}><RotateCcw size={20} /></button>
    <div className="hatch-rays" aria-hidden="true" />
    <section className="hatch-reveal" aria-live="polite">{hatched ? <><div className="hatch-pet"><Tumtum /></div><h1>Lovely the Tumtum</h1><p>hatched from the egg!</p><Link href="/wardrobe" className="hatch-continue">Meet your little friend <span>→</span></Link></> : <><button className="hatch-egg" aria-label="Hatch the egg" onClick={() => setHatched(true)}><svg viewBox="0 0 180 220" fill="none" aria-hidden="true"><path d="M90 12c-37 0-72 78-72 126a72 72 0 0 0 144 0C162 90 127 12 90 12Z" fill="#E7F8FF" /><path d="m25 116 28-15 24 18 24-18 25 18 28-18" stroke="#B5DDED" strokeWidth="6" strokeLinejoin="round" /><ellipse cx="64" cy="73" rx="12" ry="17" fill="#B1DEF0" /><circle cx="121" cy="151" r="14" fill="#B1DEF0" /><circle cx="62" cy="159" r="8" fill="#B1DEF0" /></svg></button><h1>A little friend is waiting.</h1><p>Tap the egg to say hello.</p></>}</section>
  </main>;
}
