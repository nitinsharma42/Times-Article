import { useEffect, useState } from "react";
import { ArticleResponse } from "../types/PopularArticle";

export default function useFetchArticle() {
  const [data, setData] = useState<Partial<ArticleResponse>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "OK") {
            setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}
