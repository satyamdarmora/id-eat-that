"use client";

interface MarqueeStripProps {
  words: string[];
  bgColor?: string;
  textColor?: string;
  separator?: string;
}

export function MarqueeStrip({
  words,
  bgColor = "bg-deep-plum",
  textColor = "text-cream",
  separator = "✦",
}: MarqueeStripProps) {
  const content = words.map((w) => `${w} ${separator} `).join("");
  const repeatedContent = content.repeat(4);

  return (
    <div className={`${bgColor} ${textColor} overflow-hidden py-3 border-y-2 border-deep-plum select-none`}>
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-sm font-bold tracking-widest uppercase">
          {repeatedContent}
        </span>
        <span className="text-sm font-bold tracking-widest uppercase">
          {repeatedContent}
        </span>
      </div>
    </div>
  );
}
