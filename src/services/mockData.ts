/* src/services/mockData.ts */

export interface Article {
  id: string;
  title: string;
  date: string;
  author: string;
  tag: string;
  excerpt: string;
  image?: string;
  href: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Current State of Styling Selects in 2019',
    date: 'October 28, 2019',
    author: 'Chris Coyier',
    tag: 'GUIDES',
    excerpt:
      'Styling form controls in general, and the <select> element specifically, has been a long-standing struggle on the web. It feels like every year we get a little closer, but browser inconsistencies keep us from fully solving it. Let\'s take a look at where we are now.',
    href: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Another Stab at the Perfect CSS Pie Chart… Sans JavaScript!',
    date: 'Jun 4, 2026',
    author: 'Antoine Villepreux',
    tag: 'CHARTS DATA VISUALIZATION',
    excerpt:
      'Can we create a perfect pie chart with pure CSS? Let\'s explore the latest techniques using conic-gradient and custom properties.',
    href: '#',
  },
  {
    id: '3',
    title: 'Astro Markdown Component Utility for Any Framework',
    date: 'Jun 1, 2026',
    author: 'Zell Liew',
    tag: 'ASTRO MARKDOWN',
    excerpt:
      'A utility to render Astro Markdown components seamlessly in React, Vue, and Svelte — bridging the gap between static content and interactive frameworks.',
    href: '#',
  },
];

export const getFeaturedArticle = (): Article | undefined =>
  articles.find((a) => a.featured);

export const getLatestArticles = (): Article[] =>
  articles.filter((a) => !a.featured);
