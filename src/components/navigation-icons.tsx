import Image from "next/image";

type IconProps = { size?: number; active?: boolean; className?: string };
type IconKind = "home" | "memories" | "discoveries" | "you";

function IllustratedIcon({ kind, size = 48, active = false, className = "" }: IconProps & { kind: IconKind }) {
  return (
    <Image
      src={`/icons/${kind}.svg`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable={false}
      unoptimized
      className={`illustrated-nav-icon ${active ? "icon-active" : ""} ${className}`}
      data-icon={kind}
    />
  );
}

export function HomeIcon(props: IconProps) { return <IllustratedIcon kind="home" {...props} />; }
export function MemoriesIcon(props: IconProps) { return <IllustratedIcon kind="memories" {...props} />; }
export function DiscoveriesIcon(props: IconProps) { return <IllustratedIcon kind="discoveries" {...props} />; }
export function ProfileIcon(props: IconProps) { return <IllustratedIcon kind="you" {...props} />; }
