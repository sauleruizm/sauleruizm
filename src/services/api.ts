/* src/services/api.ts — API client */
import { articles, type Article } from './mockData';

export type { Article };

/** Simula fetch de todos los artículos */
export async function fetchArticles(): Promise<Article[]> {
  // En el futuro reemplazar con fetch real
  return articles;
}

/** Simula fetch del artículo destacado */
export async function fetchFeaturedArticle(): Promise<Article | undefined> {
  return articles.find((a) => a.featured);
}
