import { useState } from "react";
import { Article } from "../../types/PopularArticle";
import styles from "./TitleList.module.css";
import ArticleDetail from "../detail/Detail";
import Hamburger from "../../Icons/HamburgerIcon";

type ArticleListProps = {
  articles: Article[];
};

export default function TitleList({ articles }: ArticleListProps) {
  const [selectedArticle, setSelectedArticle] = useState<Partial<Article>>(
    articles[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };
  const handleArticleClick = (article: Article) => {
    setIsOpen(!isOpen)
    setSelectedArticle(article);
  };
  return (
    <>
      <span
        className={styles?.iconWrapper}
        onClick={handleIconClick}
      >
        <Hamburger />
      </span>
      <aside className={`${styles?.articleListContainer} ${isOpen ? styles?.isOpen : styles?.isHidden}`}>
        <ul className={styles?.articleList}>
          {articles.map((article) => (
            <li
              key={article.id}
              className={`${styles?.articleListItem} ${
                article.id === selectedArticle?.id && styles?.activeListItem
              }`}
              onClick={() => handleArticleClick(article)}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </aside>
      {selectedArticle && <ArticleDetail selectedArticle={selectedArticle} />}
    </>
  );
}
