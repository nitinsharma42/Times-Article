import { render, screen } from "@testing-library/react";
import ArticleDetail from "../components/MostPopularArticle/ArticleDetail";
import { Article } from "../types/PopularArticle";
//import { useFetchArticle } from "../hooks/useFetchArticle";
import '@testing-library/jest-dom';

describe("ArticleDetail", () => {
  it("renders article details correctly", () => {
    const mockArticle: Partial<Article> = {
      title: "Test Title",
      byline: "Test Byline",
      published_date: "2022-01-01",
      abstract: "Test abstract",
    };

    render(<ArticleDetail selectedArticle={mockArticle} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Byline")).toBeInTheDocument();
    expect(screen.getByText("Test abstract")).toBeInTheDocument();
  });
});
