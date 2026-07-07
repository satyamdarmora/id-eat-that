import { sanityClient } from "./client";
import { isSanityConfigured } from "./env";
import {
  allArticlesQuery,
  featuredArticleQuery,
  articleBySlugQuery,
  articlesByCategoryQuery,
  allSlugsQuery,
} from "./queries";
import {
  trendingArticles as mockArticles,
  featuredArticle as mockFeatured,
} from "@/data/mock";
import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  asset?: { _ref: string; _type: string };
  hotspot?: { x: number; y: number };
  alt?: string;
}

export interface ArticleListItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  mood: "fun" | "serious" | "spicy";
  readTime: string;
  publishedAt?: string;
  date?: string;
  heroImage?: SanityImage | null;
  featured?: boolean;
  reactions: {
    mindblown: number;
    lightbulb: number;
    felt: number;
    thinking: number;
  };
}

export interface FullArticle extends ArticleListItem {
  body?: PortableTextBlock[];
}

const ZERO_REACTIONS = { mindblown: 0, lightbulb: 0, felt: 0, thinking: 0 };

function withDefaults<T extends Partial<ArticleListItem>>(
  article: T,
): ArticleListItem {
  return {
    slug: article.slug || "",
    title: article.title || "",
    excerpt: article.excerpt || "",
    category: article.category || "Main Course",
    mood: (article.mood || "serious") as "fun" | "serious" | "spicy",
    readTime: article.readTime || "5 min read",
    publishedAt: article.publishedAt,
    date:
      article.date ||
      (article.publishedAt
        ? new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : ""),
    heroImage: article.heroImage || null,
    featured: article.featured || false,
    reactions: ZERO_REACTIONS,
  };
}

export async function getAllArticles(): Promise<ArticleListItem[]> {
  if (!sanityClient || !isSanityConfigured) {
    return mockArticles.map((a) => withDefaults(a));
  }
  try {
    const results = await sanityClient.fetch(allArticlesQuery);
    if (!results) return [];
    return (results as Partial<ArticleListItem>[]).map((r) => withDefaults(r));
  } catch {
    return [];
  }
}

export async function getFeaturedArticle(): Promise<ArticleListItem | null> {
  if (!sanityClient || !isSanityConfigured) {
    return withDefaults(mockFeatured);
  }
  try {
    const result = await sanityClient.fetch(featuredArticleQuery);
    if (!result) {
      const list = (await sanityClient.fetch(
        allArticlesQuery,
      )) as Partial<ArticleListItem>[];
      if (list && list.length > 0) return withDefaults(list[0]);
      return null;
    }
    return withDefaults(result as Partial<ArticleListItem>);
  } catch {
    return null;
  }
}

function mockBodyFor(slug: string): PortableTextBlock[] | null {
  const mock = [...mockArticles, mockFeatured].find((a) => a.slug === slug);
  if (!mock) return null;
  const paragraphs = [
    `This is a placeholder version of "${mock.title}" so you can see how an article looks on Id Eat That. Once Chef Pari publishes the real version from the Studio, this stub disappears automatically.`,
    "The site is wired up to a CMS — articles are written from a visual dashboard at /studio. No code, no Markdown, just type and publish.",
    "Until then, you're looking at sample content. Walk around. Click into a category. Tap the reactions at the bottom. The site already works — it just needs Chef Pari to start cooking.",
  ];
  return paragraphs.map(
    (text, i) =>
      ({
        _type: "block",
        _key: `mock-${i}`,
        style: "normal",
        children: [
          { _type: "span", _key: `mock-s-${i}`, text, marks: [] },
        ],
        markDefs: [],
      }) as unknown as PortableTextBlock,
  );
}

export async function getArticleBySlug(
  slug: string,
): Promise<FullArticle | null> {
  if (!sanityClient || !isSanityConfigured) {
    const mock = [...mockArticles, mockFeatured].find((a) => a.slug === slug);
    if (!mock) return null;
    return {
      ...withDefaults(mock),
      body: mockBodyFor(slug) || [],
    };
  }
  try {
    const result = (await sanityClient.fetch(articleBySlugQuery, {
      slug,
    })) as (Partial<ArticleListItem> & { body?: PortableTextBlock[] }) | null;
    if (!result) return null;
    return {
      ...withDefaults(result),
      body: result.body || [],
    };
  } catch {
    return null;
  }
}

export async function getArticlesByCategory(
  category: string,
): Promise<ArticleListItem[]> {
  if (!sanityClient || !isSanityConfigured) {
    return mockArticles
      .filter((a) => a.category === category)
      .map((a) => withDefaults(a));
  }
  try {
    const results = await sanityClient.fetch(articlesByCategoryQuery, {
      category,
    });
    return ((results as Partial<ArticleListItem>[]) || []).map((r) =>
      withDefaults(r),
    );
  } catch {
    return [];
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!sanityClient || !isSanityConfigured) {
    return [...mockArticles, mockFeatured]
      .map((a) => a.slug)
      .filter((v, i, arr) => arr.indexOf(v) === i);
  }
  try {
    const result = await sanityClient.fetch(allSlugsQuery);
    return result || [];
  } catch {
    return [];
  }
}
