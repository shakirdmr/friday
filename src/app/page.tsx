"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import { LandingIllustration, LoopMark } from "@/components/brand";

export default function Home() {
  const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (authMode && !dialog?.open) dialog?.showModal();
    if (!authMode && dialog?.open) dialog.close();
    document.body.style.overflow = authMode ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [authMode]);

  function openAuth(mode: "signup" | "login") {
    triggerRef.current = document.activeElement as HTMLElement;
    setAuthMode(mode);
  }

  function closeAuth() {
    dialogRef.current?.close();
    setAuthMode(null);
    triggerRef.current?.focus();
  }

  return (
    <div className="landing-page">
      <header className="landing-header landing-width">
        <div className="wordmark"><LoopMark />memory</div>
        <Link className="preview-link" href="/home">Explore app preview <ArrowRight size={15} /></Link>
      </header>
      <main className="landing-main landing-width">
        <LandingIllustration />
        <div className="landing-copy">
          <span className="landing-eyebrow">YOUR MIND HAS A HOME.</span>
          <h1>Your life.<br />Your second brain.</h1>
          <p>A place for your thoughts, experiences, and discoveries. A second brain that grows with you.</p>
          <div className="landing-actions">
            <button className="button button-green" onClick={() => openAuth("signup")}>Get started</button>
            <button className="button button-outline" onClick={() => openAuth("login")}>I already have an account</button>
          </div>
        </div>
      </main>
      <footer className="landing-footer landing-width"><span>Your thoughts. Your story. Your memory.</span><span>Day-one design preview</span></footer>
      <dialog ref={dialogRef} className="auth-dialog" aria-labelledby="auth-title" onCancel={(event) => { event.preventDefault(); closeAuth(); }} onClick={(event) => { if (event.target === event.currentTarget) closeAuth(); }}>
        <div className="auth-content">
          <button className="dialog-close" onClick={closeAuth} aria-label="Close welcome screen"><X size={21} /></button>
          <div className="auth-brand"><LoopMark /></div>
          <h2 id="auth-title">{authMode === "login" ? "Welcome back!" : "Your story starts here."}</h2>
          <p>Your thoughts, ideas, and experiences. One place.</p>
          <form onSubmit={(event) => { event.preventDefault(); closeAuth(); router.push("/home"); }}>
            <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <button className="button button-green" type="submit">Continue to preview <ArrowRight size={17} /></button>
          </form>
          <p className="auth-switch">{authMode === "login" ? "New to Memory?" : "Already have an account?"} <button onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}>{authMode === "login" ? "Get started" : "Log in"}</button></p>
          <p className="auth-note">UI preview only. No account is created or data sent.</p>
        </div>
      </dialog>
    </div>
  );
}
