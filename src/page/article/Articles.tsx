import useFetchArticle from "../../hooks/useFetchArticle";
import { ArticleResponse } from "../../types/PopularArticle";
import Loader from "../../components/Loader/Loader";
import ArticleTitleList from "../list/TitleList";
import styles from "./Articles.module.css";

export default function Articles() {
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