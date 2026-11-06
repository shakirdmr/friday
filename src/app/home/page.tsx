"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, Compass, Flame, Lightbulb, MessageCircle, Menu, Plus, Search, SlidersHorizontal, Sparkles, Sun, Trophy, X, Zap } from "lucide-react";
import { LoopMark } from "@/components/brand";
import { HomeIcon, MemoriesIcon, DiscoveriesIcon, ProfileIcon } from "@/components/navigation-icons";
import { QuickActions } from "@/components/quick-actions";
import { ReferencePreviews } from "@/components/reference-previews";

const initialMemories = [
  { id: 1, title: "An idea I keep coming back to", text: "I want to build something that helps people remember what matters to them. A second brain that feels personal.", type: "Idea", date: "Today", color: "yellow" },
  { id: 2, title: "A walk cleared my head", text: "I stepped away from my screen and went for a walk. I came back with a clearer idea of what I wanted to make next.", type: "Moment", date: "Yesterday", color: "blue" },
  { id: 3, title: "Learning by making", text: "I understand things better when I build something with them. Even a rough first version helps the idea become clear.", type: "Thought", date: "This week", color: "green" },
];

type Memory = typeof initialMemories[number];
type View = "home" | "memories" | "discoveries" | "you";
type Dialog = "capture" | "companion" | "memory" | "quick-actions" | null;
const navigation = [{ id: "home" as const, label: "Home", icon: HomeIcon }, { id: "memories" as const, label: "Memories", icon: MemoriesIcon }, { id: "discoveries" as const, label: "Discoveries", icon: DiscoveriesIcon }, { id: "you" as const, label: "You", icon: ProfileIcon }];

function PipArtwork({ className = "" }: { className?: string }) {
  return <Image className={`pip-artwork ${className}`} src="/art/pip-character-v2.webp" alt="Pip, your blue memory companion" width={1254} height={1254} unoptimized />;
}

export default function MemoryHome() {
  const [view, setView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [memories, setMemories] = useState(initialMemories);
  const [captured, setCaptured] = useState(false);
  const [rediscovered, setRediscovered] = useState(false);
  const [dialog, setDialog] = useState<Dialog>(null);
  const [selectedMemory, setSelectedMemory] = useState<Memory>(initialMemories[0]);
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const completed = Number(captured) + Number(rediscovered);
  const chapterEnergy = 10 + completed * 10;

  useEffect(() => {
    const requested = window.location.hash.slice(1);
    if (requested === "memories" || requested === "discoveries" || requested === "you") setView(requested);
  }, []);

  useEffect(() => {
    const element = dialogRef.current;
    if (dialog && !element?.open) element?.showModal();
    if (!dialog && element?.open) element.close();
    document.body.style.overflow = dialog ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [dialog]);

  function openDialog(next: Dialog) {
    triggerRef.current = document.activeElement as HTMLElement;
    setDialog(next);
  }

  function closeDialog() {
    dialogRef.current?.close();
    setDialog(null);
    triggerRef.current?.focus();
  }

  function changeView(next: View) {
    setView(next);
    setMenuOpen(false);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function readMemory(memory: Memory) {
    setSelectedMemory(memory);
    setRediscovered(true);
    openDialog("memory");
  }

  function saveMemory() {
    const text = draft.trim();
    if (!text) return;
    setMemories((current) => [{ id: Date.now(), title: text.length > 48 ? `${text.slice(0, 48)}…` : text, text, type: "Thought", date: "Just now", color: "blue" }, ...current]);
    setCaptured(true);
    setDraft("");
    closeDialog();
  }

  const filtered = memories.filter((memory) => `${memory.title} ${memory.text} ${memory.type}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`app-shell world-app ${view === "home" ? "world-home" : ""}`}>
      <aside className="app-sidebar">
        <Link href="/" className="wordmark" aria-label="Memory landing page"><LoopMark />memory</Link>
        <button className="sidebar-quick-add" aria-label="Open quick actions" aria-haspopup="dialog" onClick={() => openDialog("quick-actions")}><Plus size={21} strokeWidth={2.5} /> Create</button>
        <nav className="app-nav" aria-label="Main navigation">{navigation.map(({ id, label, icon: Icon }) => <button key={id} aria-current={view === id ? "page" : undefined} onClick={() => changeView(id)}><span className={`nav-icon nav-${id}`}><Icon size={42} active={view === id} /></span>{label}</button>)}</nav>
        <div className="sidebar-bottom"><span className="design-preview-label">DESIGN PREVIEW</span><p>A first look at your second brain. All activity stays in this tab.</p><Link href="/"><ArrowLeft size={14} /> Back to landing</Link></div>
      </aside>
      <div className="app-body">
        <header className="app-topbar"><Link href="/" className="mobile-wordmark"><LoopMark />memory</Link><div className="app-stats"><span className="stat-streak"><Flame size={22} />1<span className="stat-caption">day</span></span><span className="stat-xp"><Zap size={20} />{completed * 10}<span className="stat-caption">XP</span></span><button className="avatar-button" onClick={() => changeView("you")} aria-label="Your profile"><PipArtwork /></button></div></header>
        <div className="dashboard-layout">
          <main className="app-main">
            {view === "home" && <>
              <h1 className="sr-only">Your space, your story.</h1>
              <section className="world-scene" aria-label="Pip's room">
                <picture className="world-room-picture">
                  <source media="(min-width: 701px)" srcSet="/art/pip-room-desktop-v1.webp" />
                  <Image className="world-room-art" src="/art/pip-room-v2.webp" alt="Pip, a happy blue memory companion, in a sunlit mint room with an orange door and a golden reading cushion" width={1254} height={1254} unoptimized fetchPriority="high" />
                </picture>
                <div className="world-toolbar">
                  <button className="world-menu-button" aria-label={menuOpen ? "Close world menu" : "Open world menu"} aria-expanded={menuOpen} aria-controls="world-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
                  <div className="world-toolbar-right">
                    <button className="world-message-button" aria-label="A message from Pip" onClick={() => openDialog("companion")}><svg viewBox="0 0 48 44" fill="none" aria-hidden="true"><rect x="4" y="7" width="39" height="30" rx="7" fill="#F9F9F4" stroke="white" strokeWidth="3" /><path d="m7 12 17 13 17-13M8 33l10-11m22 11L30 22" stroke="#C9D4D1" strokeWidth="3" strokeLinecap="round" /><path d="M24 16c-5-6-13-1-8 5l8 7 8-7c5-6-3-11-8-5Z" fill="#F4BD53" /></svg><span className="message-dot" /></button>
                    <button className="world-energy-button" onClick={() => changeView("you")} aria-label="Your energy and profile"><span /><Zap size={27} fill="white" strokeWidth={2.3} /><strong>{chapterEnergy}</strong></button>
                  </div>
                </div>
                {menuOpen && <nav className="world-menu" id="world-menu" aria-label="World menu">{navigation.map(({id,label,icon:Icon}) => <button key={id} onClick={() => changeView(id)}><Icon size={32} />{label}</button>)}<Link href="/"><ArrowLeft size={17} /> Back to landing</Link></nav>}
                <button className="world-companion-target" onClick={() => openDialog("companion")} aria-label="Meet Pip" />
                <span className="world-room-label">Pip&apos;s place <span>·</span> Day one</span>
              </section>
              <div className="world-content">
                <section className="adventure-progress" aria-label="Your first chapter">
                  <Zap className="adventure-bolt" size={43} fill="#FFD154" />
                  <div><h2>Your first chapter</h2><div className="adventure-track" role="progressbar" aria-label="Chapter energy" aria-valuemin={0} aria-valuemax={30} aria-valuenow={chapterEnergy}><span style={{width: `${chapterEnergy / 30 * 100}%`}} /><strong>{chapterEnergy} / 30</strong></div></div>
                </section>
                <section className="world-daily" aria-labelledby="today-title">
                  <div className="world-daily-heading"><BookOpen size={21} /><h2 id="today-title">{completed === 2 ? "You made room for your mind!" : `${2 - completed} moments left for today!`}</h2><button aria-label="Browse your memories" onClick={() => changeView("memories")}><SlidersHorizontal size={19} /></button><button aria-label="Add a memory" onClick={() => openDialog("capture")}><Plus size={20} /></button></div>
                  <div className={`world-goal ${captured ? "world-goal-done" : ""}`}><span className="world-goal-handle" aria-hidden="true">⠿</span><MemoriesIcon className="world-goal-art" size={55} /><div><strong>Capture a thought</strong><span>Something worth keeping.</span></div><span className="world-goal-energy">10 <Zap size={16} fill="#F6C854" /></span><button onClick={() => openDialog("capture")} aria-label={captured ? "Capture another thought" : "Capture a thought"}>{captured ? <Check size={27} /> : <Plus size={26} />}</button></div>
                  <div className={`world-goal ${rediscovered ? "world-goal-done" : ""}`}><span className="world-goal-handle" aria-hidden="true">⠿</span><DiscoveriesIcon className="world-goal-art" size={55} /><div><strong>Find an old spark</strong><span>Come back to a good idea.</span></div><span className="world-goal-energy">10 <Zap size={16} fill="#F6C854" /></span><button onClick={() => readMemory(initialMemories[0])} aria-label="Rediscover a memory">{rediscovered ? <Check size={27} /> : <ArrowRight size={24} />}</button></div>
                </section>
                <button className="world-pip-note" onClick={() => openDialog("companion")}><ProfileIcon size={40} /><span><strong>A second brain. A companion, too.</strong><span>Say hello to Pip.</span></span><ChevronRight size={19} /></button>
              </div>
            </>}

            {view === "memories" && <>
              <div className="page-heading"><div><span className="section-kicker">THE PIECES OF YOUR WORLD</span><h1>Your memories.</h1></div><button className="square-add" onClick={() => openDialog("capture")} aria-label="Add a memory"><Plus size={22} /></button></div>
              <p className="view-description">Thoughts, ideas, and moments. All part of your story.</p><ReferencePreviews /><label className="memory-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a thought, idea, or moment" aria-label="Search memories" /></label>
              <div className="memory-grid">{filtered.map((memory) => <button key={memory.id} className={`saved-memory ${memory.color}-memory`} onClick={() => readMemory(memory)}><div><span>{memory.type}</span><span>{memory.date}</span></div><Lightbulb size={24} /><h2>{memory.title}</h2><p>{memory.text}</p><span className="read-memory">Revisit memory <ArrowRight size={14} /></span></button>)}</div>{filtered.length === 0 && <p className="empty-search">No memories match that search. Try a different word.</p>}
            </>}

            {view === "discoveries" && <>
              <div className="page-heading"><div><span className="section-kicker">CONNECTING THE DOTS</span><h1>A clearer picture of you.</h1></div><Compass size={29} className="heading-compass" /></div><p className="view-description">An illustration of the connections your second brain could find.</p>
              <article className="discovery-card"><div className="discovery-illustration"><Lightbulb size={36} /><span /><Sparkles size={25} /></div><span className="discovery-type">A THREAD WORTH FOLLOWING</span><h2>You think by making.</h2><p>You&apos;ve been collecting ideas and turning them into things. Making a first version seems to help your thinking take shape.</p><button onClick={() => readMemory(initialMemories[2])}>From “Learning by making” <ArrowRight size={15} /></button></article>
              <article className="discovery-card blue-discovery"><div className="discovery-illustration"><Sun size={36} /><span /><Compass size={25} /></div><span className="discovery-type">SOMETHING TO COME BACK TO</span><h2>Space brings perspective.</h2><p>Your note about a walk connects to a bigger idea: sometimes, a change of scene makes room for a new thought.</p><button onClick={() => readMemory(initialMemories[1])}>From “A walk cleared my head” <ArrowRight size={15} /></button></article>
            </>}

            {view === "you" && <>
              <div className="page-heading"><div><span className="section-kicker">YOUR DIGITAL PERSONA</span><h1>A second brain. Uniquely you.</h1></div></div>
              <section className="persona-card"><PipArtwork className="persona-buddy" /><span className="persona-day">DAY ONE OF GETTING TO KNOW YOU</span><h2>Your story is taking shape.</h2><p>A growing picture of your interests, experiences, and the way you see the world.</p><div className="persona-metrics"><span><strong>{memories.length}</strong>memories</span><span><strong>2</strong>sample discoveries</span><span><strong>1</strong>companion</span></div><button className="button button-outline" onClick={() => openDialog("companion")}>Meet your companion</button></section>
              <section className="personality-section"><div className="section-title"><h2>The shape of your world</h2><span>Example persona</span></div><div className="personality-chart"><svg viewBox="0 0 400 300" role="img" aria-label="Illustrative six-axis interest chart showing curiosity, creativity, exploration, reflection, focus, and connection"><polygon points="200,33 301,91 301,208 200,267 99,208 99,91" fill="#F4F8FC" stroke="#E5EDF4" strokeWidth="2" /><polygon points="200,72 267,111 267,189 200,228 133,189 133,111" fill="none" stroke="#E5EDF4" strokeWidth="1.5" /><path d="M200 33v234M99 91l202 117M99 208 301 91" stroke="#E5EDF4" strokeWidth="1.5" /><polygon points="200,64 276,106 252,180 200,223 124,193 146,119" fill="#A7DAF1" fillOpacity=".65" stroke="#66B6D6" strokeWidth="3" strokeLinejoin="round" /><g fill="#7B8D9B" fontSize="10" fontFamily="inherit" textAnchor="middle"><text x="200" y="17">Curiosity</text><text x="345" y="85">Creativity</text><text x="345" y="218">Exploration</text><text x="200" y="289">Reflection</text><text x="58" y="218">Focus</text><text x="53" y="85">Connection</text></g></svg></div><p className="persona-note">A sample visualization of how your persona could grow.</p></section>
            </>}
            <p className="app-preview-note">Sample world · Design preview · Changes reset on refresh</p>
          </main>
          <aside className="app-right-rail"><section className="world-progress"><div className="rail-card-title"><h2>Your growing world</h2><Trophy size={22} /></div><p>Good things start with showing up.</p><div className="world-progress-line"><span>Day one</span><strong>{completed}/2 moments</strong></div><div className="progress-track" role="progressbar" aria-label="Daily moments completed" aria-valuemin={0} aria-valuemax={2} aria-valuenow={completed}><span style={{ width: `${completed * 50}%` }} /></div><span className="progress-encouragement">{completed === 2 ? "You made room for your mind today. Nice work!" : "One thought at a time. You've got this."}</span></section>
            <section className="rail-discovery"><span className="rail-kicker"><Sparkles size={14} /> A CONNECTION TO EXPLORE</span><div className="rail-lightbulb"><Lightbulb size={35} /></div><h2>You think by making.</h2><p>Your ideas get clearer when you bring them into the world.</p><button onClick={() => changeView("discoveries")}>See the connection <ArrowRight size={15} /></button></section>
            <button className="meet-pip" onClick={() => openDialog("companion")}><PipArtwork /><span><strong>Meet Pip.</strong><span>Your memory companion.</span></span><ChevronRight size={16} /></button>
          </aside>
        </div>
      </div>
      <nav className="bottom-nav" aria-label="Mobile navigation">{navigation.map(({ id, label, icon: Icon }, index) => <Fragment key={id}>{index === 2 && <button className="quick-add-button" aria-label="Open quick actions" aria-haspopup="dialog" onClick={() => openDialog("quick-actions")}><Plus size={25} strokeWidth={3} /></button>}<button aria-current={view === id ? "page" : undefined} onClick={() => changeView(id)}><Icon size={46} active={view === id} /><span>{label}</span></button></Fragment>)}</nav>
      <dialog ref={dialogRef} className={`app-dialog ${dialog === "companion" ? "companion-dialog" : ""} ${dialog === "quick-actions" ? "quick-actions-dialog" : ""}`} aria-labelledby="dialog-title" onCancel={(event) => { event.preventDefault(); closeDialog(); }} onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>{dialog === "quick-actions" ? <QuickActions onClose={closeDialog} onCapture={() => setDialog("capture")} onGoals={() => { closeDialog(); changeView("home"); requestAnimationFrame(() => document.getElementById("today-title")?.scrollIntoView({ block: "center" })); }} /> : <div className="app-dialog-content"><button className="dialog-close" onClick={closeDialog} aria-label="Close dialog"><X size={21} /></button>
        {dialog === "capture" && <><span className="capture-symbol"><Lightbulb size={26} /></span><h2 id="dialog-title">What&apos;s on your mind?</h2><p>An idea, a moment, a thought. Give it a place.</p><form onSubmit={(event) => { event.preventDefault(); saveMemory(); }}><label className="sr-only" htmlFor="memory-draft">Your thought</label><textarea id="memory-draft" autoFocus maxLength={1500} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="I've been thinking about…" required /><button className="button button-green" type="submit" disabled={!draft.trim()}>Keep this thought <Plus size={17} /></button></form><span className="capture-preview-note">Kept in this tab only. Nothing is uploaded.</span></>}
        {dialog === "companion" && <><div className="companion-reveal"><span className="reveal-spark reveal-spark-one">✦</span><PipArtwork /><span className="reveal-spark reveal-spark-two">✧</span></div><span className="companion-intro-label">EVERY STORY STARTS SOMEWHERE</span><h2 id="dialog-title">Hey, I&apos;m Pip.</h2><p>Your companion for the thoughts, discoveries, and moments that make you, you.</p><button className="button button-green" onClick={() => { closeDialog(); setView("home"); }}>Let&apos;s grow together <ArrowRight size={17} /></button></>}
        {dialog === "memory" && <><span className="capture-symbol yellow-capture"><BookOpen size={25} /></span><span className="read-meta">{selectedMemory.type} · {selectedMemory.date}</span><h2 id="dialog-title">{selectedMemory.title}</h2><p className="read-memory-text">{selectedMemory.text}</p><span className="read-saved"><Check size={15} /> A piece of your story.</span><button className="button button-outline" onClick={closeDialog}>Back to my world</button></>}
      </div>}</dialog>
    </div>
  );
}
