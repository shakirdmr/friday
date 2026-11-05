export function LoopMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M13 27C5 19 11 7 22 7c12 0 19 12 14 22-5 10-19 11-23 4-4-8 5-20 11-17 8 5-2 16-8 14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function MemoryBuddy({ className = "", wave = false }: { className?: string; wave?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 240 250" fill="none" role="img" aria-label="Pip, a blue memory companion with a yellow satchel">
      <ellipse cx="122" cy="229" rx="70" ry="10" fill="#194C6A" opacity=".08" />
      <path d="M75 204c-14 4-20 14-13 21 7 5 24 4 34-3l4-15M145 208l3 14c9 7 28 9 34 1 5-7-3-16-15-20" fill="#4AA8C1" />
      <path d="M61 124c-21-10-32-3-31 11 1 12 17 25 34 20" fill="#6EC6D9" />
      <path d={wave ? "M179 128c19-5 32-26 24-34-11-10-25 9-30 21" : "M177 125c23-13 35-1 30 12-4 12-17 20-28 15"} fill="#6EC6D9" />
      <circle cx="74" cy="52" r="22" fill="#5BB8CE" />
      <circle cx="166" cy="52" r="22" fill="#5BB8CE" />
      <path d="M58 77c1-34 22-46 62-46s61 12 63 46l8 86c3 36-25 55-70 55-44 0-73-19-70-54l7-87Z" fill="#7ECFDF" />
      <path d="M70 78c2-17 12-27 30-29" stroke="#B4E7F0" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="97" cy="93" rx="7" ry="10" fill="#284F62" />
      <ellipse cx="145" cy="93" rx="7" ry="10" fill="#284F62" />
      <circle cx="99" cy="90" r="2" fill="white" />
      <circle cx="147" cy="90" r="2" fill="white" />
      <path d="M112 113c5 6 12 6 17 0" stroke="#284F62" strokeWidth="4" strokeLinecap="round" />
      <path d="m77 125 75 63" stroke="#DCA949" strokeWidth="13" />
      <rect x="89" y="151" width="72" height="49" rx="13" fill="#F9D87E" />
      <path d="M90 165c22 11 48 11 70 0" stroke="#E5B957" strokeWidth="2" />
      <rect x="118" y="160" width="14" height="16" rx="4" fill="#FFF3C6" />
      <path d="M111 191h23" stroke="#E2B352" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function LandingIllustration() {
  return (
    <div className="landing-illustration" aria-label="Pip connects your ideas, memories, and discoveries" role="img">
      <svg className="landing-connections" viewBox="0 0 440 380" fill="none" aria-hidden="true"><path d="M88 91c70-2 38 92 120 92M338 112c-64 0-36 72-85 94M340 298c-69 8-62-54-107-61" stroke="#E4E9EC" strokeWidth="2" strokeDasharray="5 7" /></svg>
      <div className="illustration-circle" />
      <MemoryBuddy className="landing-buddy" wave />
      <div className="illustration-note thought-note"><span className="note-symbol yellow-symbol">✦</span><div><span>An idea worth keeping</span><i /><i /></div></div>
      <div className="illustration-note moment-note"><span className="note-symbol blue-symbol">↗</span><div><span>Something you discovered</span><i /><i /></div></div>
      <div className="illustration-note memory-note"><span className="note-symbol green-symbol">✓</span><span>A moment to remember</span></div>
      <span className="illustration-spark spark-a">✦</span><span className="illustration-spark spark-b">✧</span>
    </div>
  );
}

export function CompanionRoom() {
  return (
    <div className="companion-room" role="img" aria-label="Pip's bright room, with a window, books, plants, and a sunny reading corner">
      <svg className="room-scene" viewBox="0 0 680 350" fill="none" aria-hidden="true">
        <path d="M0 0h680v238H0z" fill="#F5EDDC" />
        <path d="M0 238h680v112H0z" fill="#C5E5DE" />
        <path d="M0 238h680" stroke="#DFD5BF" strokeWidth="5" />
        <path d="M20 46h71m141 0h80m90 0h86m83 0h53M0 95h24m205 0h108m83 0h101m65 0h94M14 146h53m163 0h155m103 0h173M0 194h70m150 0h67m82 0h133m59 0h85" stroke="#E7DDC8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M68 82c0-35 24-57 67-57s67 22 67 57v103H68V82Z" fill="#FFFDF7" stroke="#D9D0BC" strokeWidth="3" />
        <path d="M80 83c0-28 19-46 55-46s55 18 55 46v90H80V83Z" fill="#BCE8F4" />
        <circle cx="163" cy="71" r="15" fill="#FFF3B0" />
        <path d="M80 155c33-32 51-35 72-9 15-13 26-9 38 5v22H80v-18Z" fill="#A2C884" />
        <path d="M80 163c29-12 60-8 110-1v11H80v-10Z" fill="#78AD71" />
        <path d="M135 35v140M78 106h113" stroke="#FFFDF7" strokeWidth="7" />
        <path d="M60 185h150" stroke="#D7C7A3" strokeWidth="10" strokeLinecap="round" />
        <path d="M449 146h151v97H449z" fill="#BE9264" />
        <path d="M458 155h133v76H458z" fill="#CFAE7D" />
        <path d="M452 194h146" stroke="#AE8057" strokeWidth="8" />
        <path d="M462 242v16m125-16v16" stroke="#9C7956" strokeWidth="7" strokeLinecap="round" />
        <path d="M470 166v23m11-26v26m12-20v20m14-29v29m12-22v22" stroke="#70ABB2" strokeWidth="7" />
        <path d="m544 169 7 20m8-27 8 27m12-24 7 24" stroke="#F6DA88" strokeWidth="7" />
        <path d="M470 215h32m-25 7h32m16-11h29m-23 8h27" stroke="#F3E4BF" strokeWidth="5" />
        <rect x="468" y="97" width="48" height="45" rx="4" fill="#FFFDFA" stroke="#DFCAA6" strokeWidth="5" />
        <path d="M480 127c-6-7-1-17 8-16 10 1 13 13 6 19-8 6-16-1-11-7 5-7 10-1 6 2" stroke="#75B1A8" strokeWidth="3" strokeLinecap="round" />
        <path d="M557 128h25l-4 18h-18l-3-18Z" fill="#E7B371" />
        <path d="M569 129V97m0 16c-15-2-23-13-16-17 9-4 13 4 16 17Zm0-8c16-5 19-18 12-19-9-1-12 10-12 19Z" fill="#7EA76D" stroke="#719964" strokeWidth="2" strokeLinecap="round" />
        <path d="M89 247v51m129-51v51" stroke="#AE835D" strokeWidth="8" strokeLinecap="round" />
        <rect x="77" y="231" width="154" height="18" rx="6" fill="#DAB88A" />
        <path d="m110 220 35-5 19 11-35 3-19-9Z" fill="#FFFDF1" />
        <path d="m134 220 13-2" stroke="#B3C3A0" strokeWidth="2" />
        <rect x="180" y="213" width="19" height="17" rx="4" fill="#96BCB3" />
        <path d="M199 217c12-5 13 12 0 8" stroke="#96BCB3" strokeWidth="4" />
        <ellipse cx="363" cy="306" rx="115" ry="27" fill="#F7E7B9" />
        <ellipse cx="363" cy="306" rx="101" ry="20" stroke="#DECF9E" strokeWidth="1.5" strokeDasharray="4 5" />
        <path d="M302 0v54" stroke="#BBA787" strokeWidth="2" />
        <path d="M276 53h52l-13 18h-26l-13-18Z" fill="#CDB28A" />
        <path d="M302 55V31m-1 10c-17-2-25-14-17-17 9-3 16 7 17 17Zm2 4c20-4 25-16 16-18-10-1-14 8-16 18Z" fill="#7EAA72" />
        <path d="M626 280h21l-3 25h-15l-3-25Z" fill="#E8C29A" />
        <path d="M636 281v-29m0 16c-16-2-21-14-14-16 8-3 13 7 14 16Zm1-8c17-7 18-19 11-19-9 0-12 11-11 19Z" fill="#80AC7B" />
        <path d="M362 79h35v36h-35z" fill="#FFFDF5" stroke="#DBC8A4" strokeWidth="4" />
        <circle cx="380" cy="92" r="5" fill="#F2D27C" /><path d="m367 109 11-13 13 13" fill="#9FC0AC" />
      </svg>
      <MemoryBuddy className="room-buddy" />
    </div>
  );
}
