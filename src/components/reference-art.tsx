export type ItemKind = "skirt" | "pants" | "overalls" | "candle" | "cape" | "hat" | "vest" | "bed" | "chair" | "plant" | "rug" | "lamp";

export function WardrobeItem({ kind, color = "#302f42" }: { kind: ItemKind; color?: string }) {
  return <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className="wardrobe-item-art">
    {kind === "skirt" && <><path d="m24 23 52-2 8 57c-16 9-52 9-68 0l8-55Z" fill={color} /><path d="M23 38q27 12 54 0M21 53q29 13 58 0M18 69q32 12 64 0" stroke="#ffffff23" strokeWidth="5" /><path d="m31 26-7 51m20-49-2 53m16-53 5 52m8-53 9 49" stroke="#12122533" strokeWidth="3" /><path d="M22 24q28 6 56-2l-1 10q-26 5-54 0l-1-8Z" fill="#242432" /></>}
    {kind === "pants" && <><path d="m25 18 52 1-1 65-23 1-4-40-5 40-24-1 5-66Z" fill={color} /><path d="M25 25h50M49 25v19" stroke="#ffffff25" strokeWidth="3" /><circle cx="50" cy="23" r="2" fill="#fff" /></>}
    {kind === "overalls" && <><path d="m22 27 16-9h25l17 9 9 18-13 8-4-12v41H27V41l-5 12-12-8 12-18Z" fill="#ECC98C" /><path d="M20 30h61M16 39h68M28 22v26m11-28v29m23-29v29m12-24v22" stroke="#B480533F" strokeWidth="3" /><path d="M29 36h44l5 46H54l-4-20-3 20H23l6-46Z" fill={color} /><path d="M32 21v29m36-29v29" stroke={color} strokeWidth="8" /><circle cx="34" cy="47" r="2" fill="#FFECAE" /><circle cx="67" cy="47" r="2" fill="#FFECAE" /><path d="M39 49h22v11a11 11 0 0 1-22 0V49Z" fill="#ffffff25" /><path d="M50 52v10m-5-5q5-8 10 0" stroke="#EC735B" strokeWidth="3" /></>}
    {kind === "candle" && <><path d="m36 78 8-30h12l8 30H36Z" fill="#2C6758" /><ellipse cx="50" cy="78" rx="18" ry="5" fill="#214C43" /><ellipse cx="50" cy="49" rx="14" ry="5" fill="#326F5B" /><rect x="43" y="27" width="14" height="24" rx="3" fill="#FFF7CA" /><ellipse cx="50" cy="22" rx="16" ry="21" fill="#FFEA7080" /><path d="M51 9c3 8 10 16 0 22-8-5-7-12 0-22Z" fill="#FFDC41" /><path d="M50 25v8" stroke="#64604C" strokeWidth="2" /></>}
    {kind === "cape" && <><path d="m50 19 26 8-5 10 15 9-12 8 11 18-24-6-11 18-12-18-23 6 11-18-12-8 16-9-5-10 25-8Z" fill={color} /><path d="m39 38-7 46m22-43 12 43" stroke="#CFB67D" strokeWidth="6" /><ellipse cx="50" cy="33" rx="10" ry="13" fill="#262832" /><ellipse cx="50" cy="33" rx="6" ry="9" fill="#B4C6C8" /><circle cx="52" cy="30" r="2" fill="#fff" /></>}
    {kind === "hat" && <><path d="m27 26 49-4-5 43H30l-3-39Z" fill={color} /><path d="m28 47 45-4-2 15-42 3-1-14Z" fill="#E2E3DE" /><ellipse cx="50" cy="68" rx="38" ry="9" fill={color} /><ellipse cx="50" cy="63" rx="27" ry="6" fill="#ffffff30" /><path d="M69 48q20-25 22-12-5 14-22 18" fill="#262734" /><circle cx="66" cy="57" r="4" fill="#D0D7DA" /></>}
    {kind === "vest" && <><path d="m30 20 12 7h16l13-7 16 16-14 12-7-9 4 44H29l5-44-8 9-14-12 18-16Z" fill={color} /><path d="m42 26 8 19 8-19" fill="#F099B3" /><path d="m43 47 14 6-13 7 12 7-13 7" stroke="#F099B3" strokeWidth="3" /></>}
    {kind === "bed" && <><path d="M15 42v38m70-38v38" stroke="#AB7851" strokeWidth="7" strokeLinecap="round" /><path d="M16 29q32-24 68 0v35H16V29Z" fill="#C9956A" /><rect x="13" y="46" width="74" height="27" rx="9" fill={color} /><rect x="20" y="37" width="27" height="15" rx="6" fill="#FFE4E2" /><path d="M14 62h73" stroke="#FFE5D2" strokeWidth="4" /></>}
    {kind === "chair" && <><rect x="25" y="15" width="50" height="48" rx="16" fill={color} /><rect x="14" y="40" width="17" height="32" rx="8" fill={color} /><rect x="69" y="40" width="17" height="32" rx="8" fill={color} /><rect x="28" y="53" width="44" height="18" rx="8" fill="#ffffff30" /><path d="M26 71v13m48-13v13" stroke="#8B6248" strokeWidth="5" /></>}
    {kind === "plant" && <><path d="m32 58 6 28h26l6-28H32Z" fill={color} /><path d="M51 66V29" stroke="#557D4A" strokeWidth="4" /><path d="M50 51C27 50 24 24 25 18c20 4 26 13 25 33Zm3-10c1-22 16-28 25-26 2 14-8 25-25 26ZM50 63C28 65 18 54 18 40c18-1 29 7 32 23Zm3-8c9-20 24-19 30-13-3 14-16 19-30 13Z" fill="#72A56A" /></>}
    {kind === "rug" && <><ellipse cx="50" cy="55" rx="40" ry="25" fill={color} /><ellipse cx="50" cy="55" rx="30" ry="17" stroke="#ffffff50" strokeWidth="3" /><path d="m10 48-6-3m6 11-7 1m10 8-7 3m83-20 7-3m-6 12 7 1m-9 8 7 3" stroke={color} strokeWidth="3" /></>}
    {kind === "lamp" && <><path d="M50 38v42m-14 1h28" stroke="#B78954" strokeWidth="5" strokeLinecap="round" /><path d="m30 15-12 33h64L69 15H30Z" fill={color} /><ellipse cx="50" cy="48" rx="32" ry="6" fill="#FFF1BC" /></>}
  </svg>;
}

export function WardrobeBird({ color = "#F2AFD0", outfit = "plaid", outfitColor = "#683955", hat = false, hatColor = "#8B949D" }: { color?: string; outfit?: string | null; outfitColor?: string; hat?: boolean; hatColor?: string }) {
  return <svg viewBox="0 0 240 310" fill="none" className="wardrobe-bird-art" role="img" aria-label="Your bird wearing the selected outfit">
    <ellipse cx="120" cy="294" rx="72" ry="9" fill="#5C5B4920" />
    <path d="M87 275v21h20l8-22m26 0 4 22h21l-4-24" fill="#9B7256" />
    <path d="M72 157C39 169 29 205 51 211l28-18m86-36c34 11 45 48 24 54l-29-18" fill={color} />
    <path d="M69 153h104l15 99c-2 36-132 36-135 0l16-99Z" fill={color} /><ellipse cx="120" cy="108" rx="75" ry="77" fill={color} />
    <path d="M46 103C15 61 54 7 108 17c40-24 106 24 89 79l-14 18c-4-17-9-24-14-39-3 16-25 13-24-3-10 18-29 12-31-1-8 21-27 16-31 2-5 20-17 31-37 30Z" fill="#30292D" />
    <path d="M47 97c-22-6-32 15-19 26-20 11-12 30 1 31-16 9-7 25 11 24-9 14 10 25 26 12l7-86-26-7Zm145 0c22-5 32 15 19 26 20 11 12 30-1 31 16 9 7 25-11 24 9 14-10 25-26 12l-7-86 26-7Z" fill="#30292D" />
    <path d="M40 99c1-112 163-111 163 0" stroke="#D92388" strokeWidth="14" /><rect x="30" y="94" width="21" height="41" rx="10" fill="#E9228D" /><rect x="192" y="94" width="21" height="41" rx="10" fill="#E9228D" /><path d="M34 103v20m173-20v20" stroke="#F6C349" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="94" cy="113" rx="7" ry="11" fill="#28292E" /><ellipse cx="149" cy="113" rx="7" ry="11" fill="#28292E" /><ellipse cx="74" cy="135" rx="12" ry="8" fill="#ED80AD" /><ellipse cx="167" cy="135" rx="12" ry="8" fill="#ED80AD" /><path d="M111 132q10-13 20 0l-10 9-10-9Z" fill="#E5749C" /><path d="M114 141q7 10 14 0" fill="#593748" />
    {outfit && <g><path d="m76 166 25-9 20 25 20-25 25 9 20 28-20 12-8-13 14 77H68l14-77-9 13-19-12 22-28Z" fill={outfitColor} />
      {outfit === "plaid" && <><path d="M77 169v98m23-104v106m25-86v86m24-103v103m18-87v87" stroke="#331A383F" strokeWidth="9" /><path d="M70 188h105M74 210h94m-96 23h97m-98 22h98" stroke="#D18AAC55" strokeWidth="6" /></>}
      {outfit === "overalls" && <><path d="M92 160v53m57-53v53" stroke="#EBC88E" strokeWidth="12" /><rect x="99" y="204" width="44" height="30" rx="7" fill="#ffffff25" /></>}
      {outfit === "pants" && <path d="m76 224-8 51h40l12-37 12 37h40l-9-51H76Z" fill={outfitColor} />}
      {outfit === "skirt" && <path d="m81 218-24 54q64 24 128 0l-25-54H81Z" fill={outfitColor} />}
      <path d="M122 183v83" stroke="#ffffff40" strokeWidth="3" /><circle cx="130" cy="204" r="3" fill="#FAF1D3" /><circle cx="130" cy="224" r="3" fill="#FAF1D3" /><circle cx="130" cy="244" r="3" fill="#FAF1D3" />
    </g>}
    {hat && <g><path d="m76 20 81-5 3 38H78l-2-33Z" fill={hatColor} /><ellipse cx="119" cy="52" rx="62" ry="9" fill={hatColor} /><path d="M78 39h80" stroke="#E5E7DE" strokeWidth="8" /></g>}
  </svg>;
}

export function Tumtum({ color = "#8BD4EA" }: { color?: string }) {
  return <svg viewBox="0 0 240 240" className="tumtum-art" fill="none" role="img" aria-label="Lovely, a little blue Tumtum with floating hearts">
    <ellipse cx="120" cy="207" rx="79" ry="14" fill="#4D9FB040" /><circle cx="75" cy="69" r="17" fill="#76BFD5" /><circle cx="164" cy="69" r="17" fill="#76BFD5" />
    <path d="M120 49c-34 0-52 13-55 42l-13 87c-15 11-5 28 68 29 73-1 82-18 68-29l-13-87c-3-29-21-42-55-42Z" fill={color} />
    <ellipse cx="105" cy="70" rx="6" ry="8" fill="#2D3B42" /><ellipse cx="137" cy="70" rx="6" ry="8" fill="#2D3B42" /><ellipse cx="91" cy="85" rx="8" ry="4" fill="#5DA6BD" /><ellipse cx="151" cy="85" rx="8" ry="4" fill="#5DA6BD" />
    <path d="M78 117q42-15 84 0l11 61q-53 24-106 0l11-61Z" fill="#C8ECF2" fillOpacity=".65" /><path d="M82 121q9-4 15-3" stroke="#E5F6F7" strokeWidth="6" strokeLinecap="round" />
    <path d="M91 143c-9-11-17-3-10 6l10 10 10-10c7-9-1-17-10-6Zm27-9c-8-10-16-3-10 5l10 10 10-10c6-8-2-15-10-5Zm37-6c-8-10-16-3-10 5l10 10 10-10c6-8-2-15-10-5Z" fill="#54B0DF" /><path d="M124 159c-9-10-16-2-10 5l10 10 10-10c6-7-1-15-10-5Z" fill="#62B6DE" /><ellipse cx="119" cy="180" rx="43" ry="8" fill="#E2F4F5" fillOpacity=".5" />
  </svg>;
}

export function BirdFriends() {
  return <svg viewBox="0 0 360 240" className="bird-friends-art" fill="none" role="img" aria-label="Two birds giving each other a high five">
    <ellipse cx="114" cy="219" rx="44" ry="7" fill="#328F8826" /><ellipse cx="264" cy="219" rx="44" ry="7" fill="#328F8826" />
    <path d="m94 204-4 15h17l7-16m17-1 5 17h18l-8-17" fill="#40434A" /><path d="M73 103c-17 29-16 74 5 96 21 24 74 22 91-3 20-30 14-69-8-90L73 103Z" fill="#F7E9C8" /><path d="M161 120c21-2 42-24 42-42-28-3-50 12-52 26l10 16Z" fill="#333840" />
    <path d="M70 120c-12-32-7-69 20-86 29-18 72-10 82 17-23-6-31-2-45 15-17 20-26 48-37 70l-20-16Z" fill="#303640" /><path d="M95 130c-25-15-43-7-47 6 0 14 23 23 44 17l3-23Z" fill="#353A42" /><path d="m160 60 18 9-18 8V60Z" fill="#EF8C88" /><path d="m150 54 7-3" stroke="#32363D" strokeWidth="4" strokeLinecap="round" /><circle cx="150" cy="77" r="7" fill="#EB9F9A" />
    <path d="m241 207-8 14h20l4-16m19 1 5 15h21l-12-17" fill="#EC70A0" /><path d="M220 100c-28 35-28 79-1 102 25 21 75 21 93-8 15-29 8-70-15-93l-77-1Z" fill="#FFABC9" /><path d="M211 123c-25-7-42-22-39-38 26-4 51 11 55 29l-16 9Zm91 11c15-22 36-25 50-15-8 15-28 23-50 15Z" fill="#FF78AB" />
    <circle cx="257" cy="82" r="45" fill="#FFC3D8" /><path d="M216 73c-13-45 60-65 82-20 7 13 5 24-1 32-8-26-21-39-40-28-19 12-24 15-41 16Z" fill="#FF80B0" /><ellipse cx="237" cy="78" rx="4" ry="6" fill="#33363D" /><ellipse cx="273" cy="78" rx="4" ry="6" fill="#33363D" /><path d="m250 90 12 1-6 10-6-11Z" fill="#E7BB42" /><circle cx="227" cy="95" r="7" fill="#F49CB9" /><circle cx="284" cy="95" r="7" fill="#F49CB9" />
    <path d="m188 55 3-8m9 12 7-4m-31 1-4-8" stroke="#3C7774" strokeWidth="3" strokeLinecap="round" /><path d="m34 110 3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Zm280-75 4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z" fill="#E8FCF4" />
  </svg>;
}
