"use client";

import { type CSSProperties, useRef, useState } from "react";
import { ArrowLeft, Check, ClipboardList, Footprints, HeartHandshake, Leaf, Music2, NotebookPen, Shield, Timer, Wind, X } from "lucide-react";

const actions = [
  { id: "first-aid", label: "First Aid", color: "#E96D77", shade: "#CA505E", icon: Shield, description: "A place for comforting memories and grounding reminders. Keep something you can come back to.", prompt: "Keep a comforting thought" },
  { id: "kindness", label: "Act of Kindness", color: "#A6C984", shade: "#79A85C", icon: HeartHandshake, description: "A small kind moment is worth remembering. What did someone do for you, or you for someone else?", prompt: "Remember a kind moment" },
  { id: "timers", label: "Timers", color: "#F8D889", shade: "#E9B855", icon: Timer, description: "Make a little space to focus, pause, or reflect. Your focus timers will live here." },
  { id: "soundscapes", label: "Soundscapes", color: "#7467E5", shade: "#5144C0", icon: Music2, description: "A little background calm for your thoughts. Your collection of sounds will live here." },
  { id: "movements", label: "Movements", color: "#DC73AA", shade: "#BC4E87", icon: Footprints, description: "Step away, stretch, and make space for a new thought. Your movement breaks will live here." },
  { id: "breathe", label: "Breathe", color: "#9A86DC", shade: "#7461BE", icon: Wind, description: "A quiet moment to come back to yourself. Your guided breathing space will live here." },
  { id: "quizzes", label: "Quizzes", color: "#F1BE66", shade: "#D69A3C", description: "Discover a little more about the way you think. Your self-discovery quizzes will live here." },
  { id: "reflections", label: "Reflections", color: "#89C7CE", shade: "#5AA4AE", icon: Leaf, description: "Give a thought, a feeling, or a moment a place in your second brain." },
  { id: "goals", label: "Goals", color: "#9CC874", shade: "#76A754", icon: ClipboardList, description: "Come back to the little moments that grow your world." },
];

type Action = typeof actions[number];

function ActionIcon({ action }: { action: Action }) {
  const Icon = action.icon;
  return <span className="quick-action-icon" style={{ "--action-color": action.color, "--action-shade": action.shade } as CSSProperties} aria-hidden="true">
    {Icon ? <Icon size={26} strokeWidth={2} /> : <svg width="27" height="27" viewBox="0 0 28 28" fill="none"><path d="m4 4 6 6m0-6-6 6m14 9 6 6m0-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="21" cy="7" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="7" cy="22" r="4" stroke="currentColor" strokeWidth="2" /></svg>}
  </span>;
}

export function QuickActions({ onClose, onCapture, onGoals }: { onClose: () => void; onCapture: () => void; onGoals: () => void }) {
  const [selected, setSelected] = useState<Action | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  function chooseAction(action: Action) {
    if (action.id === "reflections") return onCapture();
    if (action.id === "goals") return onGoals();
    setSelected(action);
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  return <div className="quick-actions-content">
    <h2 id="dialog-title" className="sr-only">Quick actions</h2>
    {selected ? <section className="quick-action-detail" aria-labelledby="activity-title">
      <button className="quick-actions-back" onClick={() => setSelected(null)}><ArrowLeft size={18} /> All activities</button>
      <ActionIcon action={selected} />
      <h3 id="activity-title" ref={headingRef} tabIndex={-1}>{selected.label}</h3>
      <p>{selected.description}</p>
      {selected.prompt ? <button className="quick-action-primary" onClick={onCapture}>{selected.prompt}<NotebookPen size={19} /></button> : <><span className="quick-action-preview">Activity preview · Coming to your world</span><button className="quick-action-primary" onClick={() => setSelected(null)}>Explore other activities <ArrowLeft size={18} /></button></>}
    </section> : <div className="quick-actions-list">{actions.map((action) => <button key={action.id} onClick={() => chooseAction(action)}><ActionIcon action={action} /><span>{action.label}</span></button>)}</div>}
    <div className="quick-actions-footer">
      <button className="quick-actions-utility" onClick={onCapture} aria-label="Capture a thought"><NotebookPen size={25} /></button>
      <button className="quick-actions-close" onClick={onClose} aria-label="Close quick actions" autoFocus><X size={30} strokeWidth={3} /></button>
      <button className="quick-actions-utility" onClick={onGoals} aria-label="View today's goals"><ClipboardList size={26} /><Check size={10} className="quick-utility-check" /></button>
    </div>
  </div>;
}
