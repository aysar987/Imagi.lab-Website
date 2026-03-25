import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex overflow-hidden rounded-[18px] border border-white/20 bg-black/70 shadow-[0_10px_24px_rgba(64,191,229,0.18)] ${className}`.trim()}
    >
      <Image
        src="/imagilab/logo.svg"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
