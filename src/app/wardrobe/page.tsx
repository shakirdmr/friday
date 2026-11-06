"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Grid3X3, Heart, Search, Shirt, X } from "lucide-react";
import { WardrobeBird, WardrobeItem, Tumtum, type ItemKind } from "@/components/reference-art";
import { PreviewModal } from "@/components/preview-modal";

type Item = { id: string; label: string; kind: ItemKind; color: string; group: string };
const outfits: Item[] = [
  { id: "midnight-skirt", label: "Midnight ruffle skirt", kind: "skirt", color: "#282735", group: "bottoms" },
  { id: "navy-pants", label: "Navy trousers", kind: "pants", color: "#2C3040", group: "bottoms" },
  { id: "honey-overalls", label: "Honey overalls", kind: "overalls", color: "#D9AB31", group: "outfits" },
  { id: "green-candle", label: "Green candlestick", kind: "candle", color: "#315E4F", group: "accessories" },
  { id: "sky-overalls", label: "Sky blue overalls", kind: "overalls", color: "#78BFCA", group: "outfits" },
  { id: "plum-skirt", label: "Plum ruffle skirt", kind: "skirt", color: "#52385C", group: "bottoms" },
  { id: "forest-cape", label: "Forest ribbon cape", kind: "cape", color: "#284E36", group: "tops" },
  { id: "silver-hat", label: "Silver feather hat", kind: "hat", color: "#8B949D", group: "hats" },
  { id: "silver-vest", label: "Silver lace vest", kind: "vest", color: "#BEC1BD", group: "tops" },
  { id: "woodland-cape", label: "Woodland ribbon cape", kind: "cape", color: "#694D3D", group: "tops" },
  { id: "rose-vest", label: "Rose laced vest", kind: "vest", color: "#3D3D3D", group: "tops" },
  { id: "navy-hat", label: "Navy feather hat", kind: "hat", color: "#34394F", group: "hats" },
];
const furniture: Item[] = [
  { id: "rose-bed", label: "Rose wicker bed", kind: "bed", color: "#EE92B4", group: "furniture" },
  { id: "reading-chair", label: "Peach reading chair", kind: "chair", color: "#EFA888", group: "furniture" },
  { id: "flower-lamp", label: "Pink bedside lamp", kind: "lamp", color: "#EA92B2", group: "furniture" },
  { id: "fern", label: "A little fern", kind: "plant", color: "#D9976D", group: "furniture" },
  { id: "mint-rug", label: "Mint oval rug", kind: "rug", color: "#A6BF79", group: "furniture" },
  { id: "gold-candle", label: "Golden candle", kind: "candle", color: "#D6AD58", group: "furniture" },
  { id: "violet-chair", label: "Violet reading chair", kind: "chair", color: "#A48DBB", group: "furniture" },
  { id: "sunny-lamp", label: "Sunny bedside lamp", kind: "lamp", color: "#E9BF60", group: "furniture" },
];
const colors = [{ name: "Rose", hex: "#F2AFD0" }, { name: "Lilac", hex: "#BDA0F1" }, { name: "Sky", hex: "#A1D9ED" }, { name: "Peach", hex: "#F6B78F" }, { name: "Mint", hex: "#B1D9B5" }, { name: "Butter", hex: "#F4DA8D" }, { name: "Cloud", hex: "#E2E4E8" }, { name: "Coral", hex: "#F69C9B" }, { name: "Plum", hex: "#A68BC0" }, { name: "Seafoam", hex: "#8BCBC0" }, { name: "Cream", hex: "#F7E9C8" }, { name: "Cocoa", hex: "#AD8C7B" }];
const tabs = [{ id: "outfits", label: "Outfits", glyph: "👚" }, { id: "furniture", label: "Furniture", glyph: "🛋️" }, { id: "colors", label: "Colors", glyph: "🎨" }, { id: "micropets", label: "Micropets", glyph: "🐾" }] as const;
const filters = [{ id: "search", label: "Search" }, { id: "favorites", label: "Favorites" }, { id: "all", label: "All items" }, { id: "tops", label: "Tops", glyph: "👕" }, { id: "bottoms", label: "Bottoms", glyph: "👖" }, { id: "outfits", label: "Full outfits", glyph: "🩱" }, { id: "hats", label: "Hats", glyph: "🎩" }, { id: "accessories", label: "Accessories", glyph: "🕶️" }];

export default function WardrobePage() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("outfits");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selected, setSelected] = useState<Item | null>(null);
  const [worn, setWorn] = useState<Item | null>({ id: "plaid", label: "Rose plaid outfit", kind: "vest", color: "#683955", group: "outfits" });
  const [hat, setHat] = useState<Item | null>(null);
  const [color, setColor] = useState(colors[0]);
  const [decoration, setDecoration] = useState<Item | null>(null);
  const [pet, setPet] = useState(false);
  const [shop, setShop] = useState(false);
  function select(item: Item) { setSelected(item); if (tab === "furniture" || item.kind === "candle") setDecoration(item); else if (item.kind === "hat") { setHat(item); } else setWorn(item); }
  function favorite() { if (!selected) return; setFavorites(current => current.includes(selected.id) ? current.filter(id => id !== selected.id) : [...current, selected.id]); }
  const visible = (tab === "furniture" ? furniture : outfits).filter(item => (filter !== "favorites" || favorites.includes(item.id)) && (["all", "favorites", "search"].includes(filter) || item.group === filter) && item.label.toLowerCase().includes(query.toLowerCase()));

  return <main className="reference-page wardrobe-page">
    <h1 className="sr-only">Customize your world</h1>
    <section className="dressing-room" aria-label="Your room and outfit preview">
      <Image className="dressing-room-background" src="/art/screens/wardrobe-room.webp" alt="A pink bedroom with flower decorations, a wicker bed, an arched door, and a green floral rug" width={1312} height={1199} unoptimized fetchPriority="high" />
      <Link href="/home#memories" className="wardrobe-close" aria-label="Back to memories"><X size={27} strokeWidth={3} /></Link>
      <button className="wardrobe-shop" onClick={() => setShop(true)}><span aria-hidden="true">🏪</span>Shop</button>
      <div className="wardrobe-character"><WardrobeBird color={color.hex} outfit={worn?.id === "plaid" ? "plaid" : worn?.kind ?? null} outfitColor={worn?.color} hat={!!hat} hatColor={hat?.color} /></div>
      {decoration && <div className="room-decoration"><WardrobeItem kind={decoration.kind} color={decoration.color} /></div>}
      {pet && <Link href="/hatch" className="room-micropet" aria-label="Meet Lovely the Tumtum"><Tumtum /></Link>}
      <div className="wardrobe-room-tools"><button aria-label="Browse furniture" onClick={() => { setTab("furniture"); setFilter("all"); }}><span aria-hidden="true">🏠</span></button><button aria-label="Remove outfit" onClick={() => { setWorn(null); setHat(null); }}><Shirt size={32} /></button><button aria-label="Favorite selected item" aria-pressed={!!selected && favorites.includes(selected.id)} disabled={!selected} onClick={favorite}><Heart size={33} fill={selected && favorites.includes(selected.id) ? "#fff" : "none"} /></button></div>
    </section>
    {tab === "outfits" || tab === "furniture" ? <>
      <nav className="wardrobe-filters" aria-label="Item categories">{filters.filter(item => tab !== "furniture" || ["search", "favorites", "all"].includes(item.id)).map(item => <button key={item.id} aria-label={item.label} aria-pressed={filter === item.id} onClick={() => { setFilter(item.id); setQuery(""); }}>{item.id === "search" ? <Search size={23} /> : item.id === "favorites" ? <Heart size={24} fill="currentColor" /> : item.id === "all" ? <Grid3X3 size={25} /> : <span aria-hidden="true">{item.glyph}</span>}</button>)}</nav>
      {filter === "search" && <label className="wardrobe-search"><Search size={18} /><input aria-label="Search your items" placeholder="Find something lovely…" value={query} onChange={event => setQuery(event.target.value)} autoFocus /></label>}
      <div className="wardrobe-inventory">{visible.map(item => <button key={item.id} className="wardrobe-item" aria-label={item.label} aria-pressed={selected?.id === item.id} onClick={() => select(item)}><WardrobeItem kind={item.kind} color={item.color} />{selected?.id === item.id && <span className="item-equipped"><Check size={13} /></span>}{favorites.includes(item.id) && <Heart className="item-favorite" size={12} fill="currentColor" />}</button>)}</div>
      {!visible.length && <p className="wardrobe-empty">{filter === "favorites" ? "Choose an item, then tap the heart to keep a favorite." : "No items here yet. Try another category."}</p>}
    </> : tab === "colors" ? <section className="wardrobe-color-section"><h2>A little more {color.name.toLowerCase()}.</h2><div className="wardrobe-inventory">{colors.map(option => <button className="wardrobe-item color-item" key={option.name} aria-label={`${option.name} bird color`} aria-pressed={color.name === option.name} onClick={() => setColor(option)}><span style={{ background: option.hex }}>{color.name === option.name && <Check size={25} />}</span><small>{option.name}</small></button>)}</div></section> : <section className="wardrobe-pet-section"><h2>A little friend for your world.</h2><button className="micropet-choice" aria-label="Lovely the Tumtum" aria-pressed={pet} onClick={() => setPet(value => !value)}><Tumtum /><span>Lovely the Tumtum</span>{pet && <Check size={18} />}</button><Link className="micropet-hatch-link" href="/hatch">See the hatching moment <span>→</span></Link></section>}
    {selected && <p className="wardrobe-selection" role="status">{selected.label} selected</p>}
    <nav className="wardrobe-bottom-nav" aria-label="Customization sections">{tabs.map(item => <button key={item.id} aria-current={tab === item.id ? "page" : undefined} onClick={() => { setTab(item.id); setFilter("all"); setQuery(""); }}><span aria-hidden="true">{item.glyph}</span><span>{item.label}</span></button>)}</nav>
    <PreviewModal open={shop} title="A little something for your world" onClose={() => setShop(false)}><p>Try the sample collection. Everything here is a local design preview.</p><div className="sample-shop">{outfits.slice(0, 4).map(item => <button key={item.id} onClick={() => { setTab("outfits"); select(item); setShop(false); }}><WardrobeItem kind={item.kind} color={item.color} /><span>{item.label}</span></button>)}</div></PreviewModal>
  </main>;
}
