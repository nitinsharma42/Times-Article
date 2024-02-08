import useFetchArticle from "../../hooks/useFetchArticle";
import { ArticleResponse } from "../../types/PopularArticle";
import Loader from "../Loader/Loader";
import ArticleTitleList from "./ArticleTitleList";
import styles from "./PopularArticles.module.css";

export default function PopularArticles() {
    const { data, error, loading} : {
        data: Partial<ArticleResponse>,
        error: string | null,
        loading: boolean
    } = useFetchArticle();

    if(error) {
        return <p>{error}</p>
    }

    return (
        <section className={styles?.articleSection}>
            {<Loader loading={loading}/>}
            {data?.results?.length && <ArticleTitleList articles={data.results}/>}
        </section>
    )
}