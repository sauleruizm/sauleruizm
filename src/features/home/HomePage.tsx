/* src/features/home/HomePage.tsx */
import { getFeaturedArticle, getLatestArticles } from '../../services/mockData';
import { FeaturedArticle } from './components/FeaturedArticle';
import { LatestArticles } from './components/LatestArticles';

export const HomePage = () => {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles();

  return (
    <>
      {featured && <FeaturedArticle article={featured} />}
      <LatestArticles articles={latest} />
    </>
  );
};
