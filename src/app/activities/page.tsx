"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Check, Pause, Play } from "lucide-react";
import { PreviewModal } from "@/components/preview-modal";

const activities = [
  { id: "goals", label: "Goal Ideas", glyph: "⛳" }, { id: "reflections", label: "Reflections", glyph: "🖋️" },
  { id: "breathe", label: "Breathe", glyph: "🍃" }, { id: "quizzes", label: "Quizzes", glyph: "📐" },
  { id: "soundscapes", label: "Soundscapes", glyph: "🎶" }, { id: "movements", label: "Movements", glyph: "👟" },
  { id: "timers", label: "Timers", glyph: "⏲️" }, { id: "kindness", label: "Act of Kindness", glyph: "🌼" },
  { id: "first-aid", label: "First Aid Kit", glyph: "🧰" },
];
const goalIdeas = ["Drink a glass of water", "Take a five-minute walk", "Write down one good thing"];

export default function ActivitiesPage() {
  const [active, setActive] = useState<typeof activities[number] | null>(null);
  const [focus, setFocus] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [reflections, setReflections] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);
  const [breathing, setBreathing] = useState(true);
  const [sound, setSound] = useState("Rain");
  const [answer, setAnswer] = useState("");
  useEffect(() => { setFocus(new URLSearchParams(window.location.search).get("focus")?.replaceAll("-", " ") ?? ""); }, []);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds(current => { if (current <= 1) { setRunning(false); return 0; } return current - 1; }), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  function close() { setActive(null); setRunning(false); }
  function keepNote() { setReflections(current => [...current, draft.trim()]); setNotice("Your reflection is kept for this visit."); setDraft(""); close(); }
  function toggleGoal(goal: string) { setSelectedGoals(current => current.includes(goal) ? current.filter(item => item !== goal) : [...current, goal]); }

  return <main className="reference-page activities-page">
    <h1 className="sr-only">Activities for your world</h1>
    <div className="activities-sky"><Image src="/art/screens/activities-sky.webp" alt="A little bird in a yellow airplane above pink clouds" width={1672} height={941} unoptimized fetchPriority="high" /><Link className="activities-back" href="/focus" aria-label="Back to focus areas"><ChevronLeft size={37} strokeWidth={3.5} /></Link>{focus && <span className="activities-focus">{focus}</span>}</div>
    <div className="activities-grid">{activities.map(activity => <button key={activity.id} className={`activity-tile activity-${activity.id}`} onClick={() => { setActive(activity); setAnswer(""); }}><span className="activity-glyph" aria-hidden="true">{activity.glyph}</span><span>{activity.label}</span></button>)}</div>
    {notice && <p className="reference-notice" role="status"><Check size={17} />{notice}</p>}
    {reflections.length > 0 && <section className="activity-saved-reflections" aria-label="Your reflections"><h2>Your reflections</h2>{reflections.map((reflection, index) => <p key={index}>{reflection}</p>)}</section>}
    <PreviewModal open={!!active} title={active?.label ?? "Activity"} onClose={close}>
      {active?.id === "goals" && <><p>A little progress, one small thing at a time.</p><div className="activity-options">{goalIdeas.map(goal => <button key={goal} aria-pressed={selectedGoals.includes(goal)} onClick={() => toggleGoal(goal)}>{goal}<span>{selectedGoals.includes(goal) ? <Check size={19} /> : "+"}</span></button>)}</div><button className="reference-primary" disabled={!selectedGoals.length} onClick={() => { setNotice(`${selectedGoals.length} ${selectedGoals.length === 1 ? "goal" : "goals"} added for this visit.`); close(); }}>Add {selectedGoals.length || "a"} {selectedGoals.length === 1 ? "goal" : "goals"}</button></>}
      {(active?.id === "reflections" || active?.id === "first-aid") && <form onSubmit={event => { event.preventDefault(); keepNote(); }}><p>{active.id === "first-aid" ? "Keep a comforting thought you can come back to." : "What is something you want to remember about today?"}</p><label className="sr-only" htmlFor="activity-reflection">Your reflection</label><textarea id="activity-reflection" value={draft} onChange={event => setDraft(event.target.value)} placeholder="A little thought…" maxLength={1500} required /><button className="reference-primary" disabled={!draft.trim()}>Keep this reflection</button><small>Local preview · resets when you leave this screen.</small></form>}
      {active?.id === "breathe" && <><p>Give yourself a quiet moment.</p><div className={`breathing-orb ${breathing ? "" : "is-paused"}`} aria-hidden="true">🍃</div><p className="breathing-caption">Breathe in. Breathe out.</p><button className="reference-primary" onClick={() => setBreathing(value => !value)}>{breathing ? <Pause size={18} /> : <Play size={18} />}{breathing ? "Pause" : "Continue"}</button></>}
      {active?.id === "timers" && <><p>A little time, just for you.</p><div className="activity-duration">{[1, 5, 10].map(minutes => <button key={minutes} aria-pressed={seconds === minutes * 60 && !running} onClick={() => { setRunning(false); setSeconds(minutes * 60); }}>{minutes} min</button>)}</div><div className="activity-timer" role="timer" aria-label="Time remaining">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</div>{seconds === 0 && <p role="status">Your little pause is complete.</p>}<button className="reference-primary" disabled={seconds === 0} onClick={() => setRunning(value => !value)}>{running ? <Pause size={18} /> : <Play size={18} />}{running ? "Pause timer" : "Start timer"}</button></>}
      {active?.id === "soundscapes" && <><p>Choose a little background calm.</p><div className="activity-options">{["Rain", "Ocean", "Forest"].map((option, index) => <button key={option} aria-pressed={sound === option} onClick={() => setSound(option)}><span aria-hidden="true">{["🌧️", "🌊", "🌳"][index]}</span>{option}{sound === option && <Check size={18} />}</button>)}</div><small>Sound selection preview · audio is not connected yet.</small></>}
      {active?.id === "quizzes" && <><p>What helps you feel more like yourself?</p><div className="activity-options">{["A quiet moment", "Making something", "A conversation"].map(option => <button key={option} aria-pressed={answer === option} onClick={() => setAnswer(option)}>{option}{answer === option && <Check size={18} />}</button>)}</div>{answer && <p className="activity-result" role="status">A little discovery: make more room for {answer.toLowerCase()}.</p>}</>}
      {(active?.id === "movements" || active?.id === "kindness") && <><p>{active.id === "movements" ? "Pick a small way to make room for yourself." : "Small kind things can make a big day."}</p><div className="activity-options">{(active.id === "movements" ? ["Stretch your arms", "Take a short walk", "Dance to a favorite song"] : ["Send someone a kind message", "Thank someone who helped you", "Do a little thing for yourself"]).map(option => <button key={option} aria-pressed={selectedGoals.includes(option)} onClick={() => toggleGoal(option)}>{option}{selectedGoals.includes(option) ? <Check size={18} /> : "+"}</button>)}</div><small>Your selections stay in this screen for this visit.</small></>}
    </PreviewModal>
  </main>;
}
