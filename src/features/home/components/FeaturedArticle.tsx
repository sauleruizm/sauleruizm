/* src/features/home/components/FeaturedArticle.tsx */
import { ArticleCard } from '../../../components/ArticleCard/ArticleCard';
import type { ArticleCardProps } from '../../../components/ArticleCard/ArticleCard';
import styles from './FeaturedArticle.module.css';

interface FeaturedArticleProps {
  article: ArticleCardProps;
}

export const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.articleWrap}>
        <ArticleCard {...article} featured />
      </div>
    </section>
  );
};
