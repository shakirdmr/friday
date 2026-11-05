"use client";

import { useId } from "react";

type IconProps = { size?: number; active?: boolean; className?: string };
type IconKind = "home" | "memories" | "discoveries" | "you";

function IllustratedIcon({ kind, size = 34, active = false, className = "" }: IconProps & { kind: IconKind }) {
  const id = useId();
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`illustrated-nav-icon ${active ? "icon-active" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
      data-icon={kind}
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="13" y1="18" x2="35" y2="43" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE9A5" /><stop offset="1" stopColor="#F4BE49" /></linearGradient>
        <linearGradient id={`${id}-roof`} x1="14" y1="9" x2="29" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#FFBA6A" /><stop offset="1" stopColor="#EC8A36" /></linearGradient>
        <linearGradient id={`${id}-book`} x1="12" y1="8" x2="37" y2="35" gradientUnits="userSpaceOnUse"><stop stopColor="#81D6F5" /><stop offset="1" stopColor="#3B9ADA" /></linearGradient>
        <linearGradient id={`${id}-green`} x1="14" y1="7" x2="35" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#C1E593" /><stop offset="1" stopColor="#7BB65B" /></linearGradient>
        <linearGradient id={`${id}-pip`} x1="14" y1="9" x2="36" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#A9E5F0" /><stop offset="1" stopColor="#6CC6DC" /></linearGradient>
      </defs>
      <ellipse cx="24" cy="43" rx="16.5" ry="2.5" fill="#365369" opacity=".10" />

      {kind === "home" && <>
        <rect x="32" y="8" width="6" height="14" rx="1.8" fill="#ECA84A" />
        <path d="M10 22h28v17a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V22Z" fill={paint("gold")} />
        <path d="M34 22h4v17a3 3 0 0 1-3 3h-1V22Z" fill="#DDA63E" opacity=".65" />
        <path d="M6 23.5 21.5 9a3.7 3.7 0 0 1 5 0L42 23.5a2.2 2.2 0 0 1-2.9 3.3L24 13.4 8.9 26.8A2.2 2.2 0 0 1 6 23.5Z" fill="#D88232" />
        <path d="M6 21.3 21.5 6.8a3.7 3.7 0 0 1 5 0L42 21.3a2.2 2.2 0 0 1-2.9 3.3L24 11.2 8.9 24.6A2.2 2.2 0 0 1 6 21.3Z" fill={paint("roof")} />
        <path d="m8.5 20.5 14-12.3a2.1 2.1 0 0 1 2.8 0l10.2 9" stroke="#FFDB9C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 29a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13H21V29Z" fill="#FFF1C0" />
        <path d="M23 30a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12h-6V30Z" fill="#BA8A42" />
        <circle cx="27.2" cy="36" r=".9" fill="#FFF3C5" />
        <rect x="12.7" y="27.7" width="5.7" height="7.7" rx="1.2" fill="#86D3E6" stroke="#FFF2CA" strokeWidth="1.8" />
        <path d="M15.6 28v7" stroke="#D9F3F5" strokeWidth="1" />
      </>}

      {kind === "memories" && <g transform="rotate(-8 24 24)">
        <rect x="9" y="6" width="30" height="36" rx="4.5" fill="#287BB5" />
        <rect x="12" y="31" width="26" height="10" rx="3" fill="#E3EBE8" />
        <path d="M15 33h20m-20 3h20m-20 3h20" stroke="#FFFDF2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11a5 5 0 0 1 5-5h21a3 3 0 0 1 3 3v24H14a5 5 0 0 0-5 5V11Z" fill={paint("book")} />
        <path d="M14 8v22" stroke="#BCEBFA" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 11a5 5 0 0 1 4-4.9V32a5 5 0 0 0-4 5V11Z" fill="#3E9DCF" />
        <path d="M28 6h6v14l-3-2.7L28 20V6Z" fill="#F5C251" />
        <path d="M30 7v9" stroke="#FFE5A4" strokeWidth="1.3" strokeLinecap="round" />
        <rect x="18" y="16" width="11" height="2.3" rx="1.15" fill="#EAF9FF" />
        <rect x="18" y="21" width="9" height="2.3" rx="1.15" fill="#C3ECFA" />
        <path d="M11 40c1 1 2 1 4 1h21" stroke="#246FA5" strokeWidth="2.2" strokeLinecap="round" />
      </g>}

      {kind === "discoveries" && <>
        <circle cx="24" cy="25" r="18" fill="#639747" />
        <circle cx="24" cy="22.8" r="18" fill={paint("green")} />
        <path d="M12 15a15 15 0 0 1 20-5" stroke="#DFEFC1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="22.8" r="12.7" fill="#FFFDF1" stroke="#70A44E" strokeWidth="1.5" />
        <path d="M24 12.5v2m0 16.6v2M13.7 22.8h2m16.6 0h2" stroke="#B7CAA1" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m30.4 14.3-3.5 11.3-9.3 5.7 3.5-11.4 9.3-5.6Z" fill="#557D83" opacity=".15" transform="translate(0 1)" />
        <path d="m30.4 14.3-3.5 11.3-5.8-5.7 9.3-5.6Z" fill="#F0B65B" />
        <path d="m17.6 31.3 3.5-11.4 5.8 5.7-9.3 5.7Z" fill="#7ABAC7" />
        <circle cx="24" cy="22.8" r="2.1" fill="#FFFEF8" stroke="#C2B78D" strokeWidth="1" />
      </>}

      {kind === "you" && <>
        <defs><clipPath id={`${id}-portrait`}><circle cx="24" cy="24" r="18.8" /></clipPath></defs>
        <circle cx="24" cy="24" r="20" fill="#E6F7FF" stroke="#FFF" strokeWidth="2" />
        <image href="/art/pip-character-v2.webp" x="-5" y="-4" width="58" height="67" preserveAspectRatio="xMidYMin slice" clipPath={paint("portrait")} />
      </>}
    </svg>
  );
}

export function HomeIcon(props: IconProps) { return <IllustratedIcon kind="home" {...props} />; }
export function MemoriesIcon(props: IconProps) { return <IllustratedIcon kind="memories" {...props} />; }
export function DiscoveriesIcon(props: IconProps) { return <IllustratedIcon kind="discoveries" {...props} />; }
export function ProfileIcon(props: IconProps) { return <IllustratedIcon kind="you" {...props} />; }
