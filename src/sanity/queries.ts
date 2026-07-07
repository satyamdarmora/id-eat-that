import { defineQuery } from "next-sanity";

export const allArticlesQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    category,
    mood,
    readTime,
    publishedAt,
    heroImage,
    featured
  }
`);

export const featuredArticleQuery = defineQuery(`
  *[_type == "article" && defined(slug.current) && featured == true]
    | order(publishedAt desc)[0] {
      "slug": slug.current,
      title,
      excerpt,
      category,
      mood,
      readTime,
      publishedAt,
      heroImage
    }
`);

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    excerpt,
    category,
    mood,
    readTime,
    publishedAt,
    heroImage,
    body
  }
`);

export const articlesByCategoryQuery = defineQuery(`
  *[_type == "article" && category == $category && defined(slug.current)]
    | order(publishedAt desc) {
      "slug": slug.current,
      title,
      excerpt,
      category,
      mood,
      readTime,
      publishedAt,
      heroImage,
      featured
    }
`);

export const allSlugsQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)][].slug.current
`);
