import { HeroSection } from "@/components/ui/HeroSection";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { PollWidget } from "@/components/ui/PollWidget";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrendingHeader } from "@/components/ui/TrendingHeader";
import { categories, weeklyPoll, marqueeWords } from "@/data/mock";
import { getAllArticles, getFeaturedArticle } from "@/sanity/fetch";

export const revalidate = 30;

export default async function Home() {
  const [featured, allArticles] = await Promise.all([
    getFeaturedArticle(),
    getAllArticles(),
  ]);

  const trendingArticles = allArticles
    .filter((a) => !featured || a.slug !== featured.slug)
    .slice(0, 6);

  const countsByCategory = allArticles.reduce<Record<string, number>>(
    (acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <>
      <HeroSection />

      <MarqueeStrip
        words={marqueeWords}
        bgColor="bg-golden"
        textColor="text-deep-plum"
      />

      {/* The Menu — Categories */}
      <section id="menu" className="py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="something for every taste"
            title="The Menu"
            size="lg"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <CategoryCard
                key={cat.slug}
                {...cat}
                articleCount={countsByCategory[cat.name] || 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Today's Special — Featured Article */}
      {featured ? (
        <section className="py-12 sm:py-16 bg-soft-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="chef's recommendation"
              title="Today's Special"
              size="md"
            />
            <ArticleCard {...featured} variant="featured" />
          </div>
        </section>
      ) : (
        <section className="py-12 sm:py-16 bg-soft-yellow">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              eyebrow="chef's recommendation"
              title="Today's Special"
              size="md"
            />
            <div className="bg-white border-2 border-deep-plum rounded-3xl p-8 shadow-[6px_6px_0_#1A1A1A]">
              <div className="text-5xl mb-3">🍳</div>
              <p className="font-handwritten text-2xl text-primary mb-1">
                Chef Pari&apos;s still cooking
              </p>
              <p className="text-muted text-sm">
                The first dish hasn&apos;t left the kitchen yet. Check back
                soon — or follow along while she writes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Trending Dishes */}
      {trendingArticles.length > 0 && (
        <section
          id="trending"
          className="py-16 sm:py-24 overflow-hidden scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TrendingHeader />
            <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {trendingArticles.map((article, index) => (
                <div key={article.slug} className="snap-start">
                  <ArticleCard {...article} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <MarqueeStrip
        words={[
          "FREUD",
          "JUNG",
          "PAVLOV",
          "MASLOW",
          "ERIKSON",
          "PIAGET",
          "BANDURA",
          "SKINNER",
        ]}
        bgColor="bg-deep-plum"
        textColor="text-golden"
        separator="•"
      />

      {/* Poll of the Week */}
      <section id="poll" className="py-16 sm:py-24 bg-soft-lavender scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="your turn to weigh in"
            title="Weekly Poll"
            size="md"
          />
          <PollWidget {...weeklyPoll} />
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
