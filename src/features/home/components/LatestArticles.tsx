/* src/features/home/components/LatestArticles.tsx */
import { ArticleCard } from '../../../components/ArticleCard/ArticleCard';
import type { ArticleCardProps } from '../../../components/ArticleCard/ArticleCard';
import styles from './LatestArticles.module.css';

interface LatestArticlesProps {
  articles: Array<ArticleCardProps & { id: string }>;
}

export const LatestArticles = ({ articles }: LatestArticlesProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Latest Articles</h2>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};
