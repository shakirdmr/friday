"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Plus, SlidersHorizontal, Zap } from "lucide-react";
import { BirdFriends } from "@/components/reference-art";

const slides = [{ title: "NEW FEATURE ALERT!", goal: "Drink water", glyph: "🥤" }, { title: "A LITTLE KINDNESS GOES FAR", goal: "Send someone a kind message", glyph: "💌" }, { title: "ONE LITTLE MOMENT AT A TIME", goal: "Make a little space to breathe", glyph: "🍃" }];

export default function FeaturePage() {
  const [slide, setSlide] = useState(0);
  const [done, setDone] = useState<number[]>([]);
  const touch = useRef<{x: number; y: number} | null>(null);
  const item = slides[slide];
  function next(direction = 1) { setSlide(current => (current + direction + slides.length) % slides.length); }
  return <main className="reference-page feature-page" onTouchStart={event => { const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY }; }} onTouchEnd={event => { if (!touch.current) return; const dx = event.changedTouches[0].clientX - touch.current.x; const dy = event.changedTouches[0].clientY - touch.current.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) next(dx < 0 ? 1 : -1); touch.current = null; }}>
    <Link href="/home#memories" className="feature-back" aria-label="Back to memories"><ArrowLeft size={21} /></Link>
    <section className="feature-intro"><h1 key={slide}>{item.title}</h1><BirdFriends /></section>
    <section className="feature-goals" aria-label="Feature preview"><div className="feature-goals-heading"><span>▦</span><strong>goals for today!</strong><Link href="/activities" aria-label="Browse goal ideas"><SlidersHorizontal size={20} /></Link><Link href="/activities" aria-label="Add a goal"><Plus size={18} /></Link></div><div className={`feature-goal ${done.includes(slide) ? "feature-goal-done" : ""}`}><span className="feature-goal-glyph" aria-hidden="true">{item.glyph}</span><strong>{item.goal}</strong><span className="feature-goal-energy">5 <Zap size={14} fill="#E4BA49" /></span><button aria-label={done.includes(slide) ? `Uncheck ${item.goal}` : `Complete ${item.goal}`} aria-pressed={done.includes(slide)} onClick={() => setDone(current => current.includes(slide) ? current.filter(index => index !== slide) : [...current, slide])}><Check size={24} /></button></div>
      <div className="feature-swipe-controls"><button aria-label="Previous feature" onClick={() => next(-1)}><ArrowLeft size={20} /></button><button className="feature-swipe" onClick={() => next()}>Swipe! <ArrowRight size={27} /></button></div><div className="feature-dots" aria-label="Feature pages">{slides.map((_, index) => <button key={index} aria-label={`Feature ${index + 1}`} aria-current={slide === index ? "step" : undefined} onClick={() => setSlide(index)} />)}</div><span className="sr-only" role="status">Feature {slide + 1} of {slides.length}</span>
    </section>
  </main>;
}
