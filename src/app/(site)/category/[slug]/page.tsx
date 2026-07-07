import { categories } from "@/data/mock";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CoverStory } from "@/components/ui/CoverStory";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import Link from "next/link";
import { getArticlesByCategory } from "@/sanity/fetch";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export const revalidate = 60;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-deep-plum mb-4">
            404 — Not on the Menu
          </h1>
          <p className="text-muted mb-6">
            This dish doesn&apos;t exist yet. Maybe the chef is still cooking it up.
          </p>
          <Link
            href="/"
            className="bg-golden text-deep-plum font-bold px-6 py-3 rounded-full hover:bg-coral transition-colors"
          >
            Back to the kitchen →
          </Link>
        </div>
      </div>
    );
  }

  const displayArticles = await getArticlesByCategory(category.name);
  const [lead, ...rest] = displayArticles;

  const marqueeWords = [
    category.name,
    category.tagline,
    "Id Eat That",
    "Psychology, plated",
  ].map((w) => w.toUpperCase());

  return (
    <>
      {/* ── Magazine masthead ─────────────────────────────── */}
      <section
        className={`relative ${category.color} border-b-2 border-deep-plum overflow-hidden`}
      >
        {/* decorative accents (hidden on small screens) */}
        <span
          className="hidden sm:block absolute top-10 left-8 text-3xl rotate-[-12deg] opacity-70 select-none pointer-events-none"
          aria-hidden
        >
          ✶
        </span>
        <span
          className="hidden sm:block sticker bg-golden absolute top-14 right-8 rotate-[8deg] select-none pointer-events-none"
          aria-hidden
        >
          fresh daily
        </span>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          {/* issue rule */}
          <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-deep-plum border-y-2 border-deep-plum py-2 mb-10">
            <span>Id Eat That</span>
            <span className="hidden sm:inline">The {category.name} Edition</span>
            <span>No. 01</span>
          </div>

          <div className="text-center">
            <span className="text-5xl sm:text-6xl block mb-4">{category.icon}</span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-deep-plum tracking-tight leading-none">
              {category.name}
            </h1>
            <p className="font-handwritten text-2xl sm:text-3xl text-primary mt-4">
              {category.tagline}
            </p>
            <p className="text-muted max-w-xl mx-auto mt-4 leading-relaxed">
              {category.description}
            </p>
            <div className="mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-deep-plum">
              <span className="h-px w-8 bg-deep-plum" />
              {displayArticles.length} dish
              {displayArticles.length === 1 ? "" : "es"} plated
              <span className="h-px w-8 bg-deep-plum" />
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip
        words={marqueeWords}
        bgColor="bg-deep-plum"
        textColor="text-golden"
        separator="•"
      />

      {/* ── The spread ────────────────────────────────────── */}
      {displayArticles.length > 0 ? (
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Lead / cover story */}
            {lead && (
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-handwritten text-2xl text-primary rotate-[-2deg]">
                    the feature
                  </span>
                  <span className="h-px flex-1 bg-deep-plum/20" />
                </div>
                <CoverStory {...lead} />
              </div>
            )}

            {/* The rest of the spread */}
            {rest.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-handwritten text-2xl text-primary rotate-[-2deg]">
                    more on the menu
                  </span>
                  <span className="h-px flex-1 bg-deep-plum/20" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((article, index) => (
                    <div
                      key={article.slug}
                      className="relative"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? "-0.6" : "0.6"}deg)`,
                      }}
                    >
                      {/* editorial page number */}
                      <span
                        className="absolute -top-3 -left-3 z-10 bg-deep-plum text-golden text-[11px] font-bold px-2.5 py-1 rounded-full border-2 border-golden rotate-[-8deg] pointer-events-none select-none"
                        aria-hidden
                      >
                        No. {String(index + 2).padStart(2, "0")}
                      </span>
                      <ArticleCard {...article} index={index} layout="grid" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-24">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="bg-white border-2 border-deep-plum rounded-3xl p-10 shadow-[6px_6px_0_#1A1A1A]">
              <div className="text-5xl mb-3">🍽️</div>
              <p className="font-handwritten text-2xl text-primary mb-2">
                Nothing plated on this course yet
              </p>
              <p className="text-muted">
                Chef Pari hasn&apos;t served anything here yet. Check back soon —
                or peek at the full menu below.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 text-center">
        <Link
          href="/#menu"
          className="inline-block border-2 border-deep-plum text-deep-plum font-bold px-6 py-3 rounded-full hover:bg-deep-plum hover:text-cream transition-colors"
        >
          ← Back to the full menu
        </Link>
      </section>
    </>
  );
}
