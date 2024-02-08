import { Article } from "../../types/PopularArticle";
import styles from "./Detail.module.css";

type ArticleDetailProps = {
    selectedArticle: Partial<Article>
}
export default function Detail({ selectedArticle } : ArticleDetailProps) {
    const src = selectedArticle?.media?.[0]?.["media-metadata"]?.[2]?.url;
    return (
        <article className={styles?.articleDetails}>
        {selectedArticle && (
            <>
            <h3>{selectedArticle.title}</h3>
            <img src={src} alt={selectedArticle.type}/>
            <span className={styles?.articleByline}>
                <p>{selectedArticle.byline}</p>
                {selectedArticle.published_date && (
                    <p>{new Date(selectedArticle.published_date).toDateString()}</p>
                )}
            </span>
            <p>{selectedArticle.abstract}</p>
            </>
        )}
    </article>
    )
}