import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ReactionBar } from "@/components/article/ReactionBar";
import { PortableArticleBody } from "@/components/article/PortableArticleBody";
import {
  getArticleBySlug,
  getAllArticles,
  getAllSlugs,
} from "@/sanity/fetch";
import { urlFor } from "@/sanity/image";

const moodStyles: Record<string, string> = {
  fun: "bg-golden/10 border-golden",
  serious: "bg-primary/5 border-primary",
  spicy: "bg-coral/10 border-coral",
};

const moodLabel: Record<string, string> = {
  fun: "🎉 Fun Read",
  serious: "📖 Deep Dive",
  spicy: "🌶️ Spicy",
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const heroImageSrc = article.heroImage
    ? urlFor(article.heroImage)?.width(1600).fit("max").auto("format").url()
    : null;

  const categorySlug = article.category.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="pb-16">
      <header className="bg-gradient-to-br from-soft-yellow to-cream py-12 sm:py-20 border-b-2 border-deep-plum">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">→</span>
            <Link
              href={`/category/${categorySlug}`}
              className="hover:text-primary transition-colors"
            >
              {article.category}
            </Link>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-golden/20 text-deep-plum px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${
                moodStyles[article.mood] || ""
              }`}
            >
              {moodLabel[article.mood] || article.mood}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-plum leading-tight mb-4">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-lg text-muted leading-relaxed mb-6">
              {article.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-golden flex items-center justify-center text-lg border-2 border-deep-plum">
              👩‍🍳
            </div>
            <div>
              <p className="text-sm font-bold text-deep-plum">Chef Pari</p>
              <p className="text-xs text-muted">
                {article.date} · {article.readTime}
              </p>
            </div>
          </div>
        </div>
      </header>

      {heroImageSrc && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-3xl overflow-hidden border-2 border-deep-plum shadow-[6px_6px_0_#1A1A1A]">
            <Image
              src={heroImageSrc}
              alt={article.title}
              width={1600}
              height={900}
              priority
              className="w-full h-auto block"
            />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {article.body && article.body.length > 0 ? (
          <PortableArticleBody body={article.body} />
        ) : (
          <p className="text-muted italic">
            This article doesn&apos;t have a body yet — Chef Pari is still
            cooking.
          </p>
        )}
      </div>

      <ReactionBar initialReactions={article.reactions} />

      {related.length > 0 && (
        <section className="py-12 bg-soft-yellow mt-8 border-t-2 border-deep-plum">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-deep-plum mb-6">
              You Might Also Like
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {related.map((a, i) => (
                <div key={a.slug} className="snap-start">
                  <ArticleCard {...a} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
