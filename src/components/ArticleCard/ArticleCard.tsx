/* src/components/ArticleCard/ArticleCard.tsx */
import styles from './ArticleCard.module.css';

export interface ArticleCardProps {
  id: string;
  title: string;
  date: string;
  author: string;
  tag: string;
  excerpt?: string;
  href?: string;
  featured?: boolean;
}

export const ArticleCard = ({
  title,
  date,
  author,
  tag,
  excerpt,
  href = '#',
  featured = false,
}: ArticleCardProps) => {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <a href={href} className={styles.link}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.title}>{title}</h2>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.separator}>·</span>
          <time className={styles.date}>{date}</time>
        </div>
      </a>
    </article>
  );
};
