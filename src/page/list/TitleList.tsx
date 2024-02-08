import { useState } from "react";
import { Article } from "../../types/PopularArticle"
import styles from "./TitleList.module.css";
import ArticleDetail from "../detail/Detail";

type ArticleListProps = {
    articles : Article[]
}

export default function TitleList({ articles } : ArticleListProps) {
    const [selectedArticle, setSelectedArticle] = useState<Partial<Article>>(articles[0]);
    const handleArticleClick = (article : Article) => {
        setSelectedArticle(article);
    }
    return (
        <>
        <aside className={styles?.articleListContainer}>
            <ul className={styles?.articleList}>
                {articles.map((article) => (
                    <li key={article.id} className={`${styles?.articleListItem} ${article.id === selectedArticle?.id && styles?.activeListItem}`} 
                        onClick={() => handleArticleClick(article)}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </aside>
       {selectedArticle && <ArticleDetail selectedArticle={selectedArticle}/>}
        </>
    )
}