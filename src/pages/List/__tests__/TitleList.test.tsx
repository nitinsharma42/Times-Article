import { render, screen, fireEvent } from "@testing-library/react";
import ArticleTitleList from "../TitleList";
import { Article } from "../../../types/PopularArticle";
import '@testing-library/jest-dom';

describe("ArticleTitleList", () => {
    const articles: Partial<Article>[] = [
        {
            id: 1,
            title: "Test Title 1",
            byline: "Test Byline 1",
            published_date: "2022-01-01",
            abstract: "Test abstract 1",
        },
        {
            id: 2,
            title: "Test Title 2",
            byline: "Test Byline 2",
            published_date: "2022-01-01",
            abstract: "Test abstract 2",
        },
    ];

    it("renders article titles correctly and load first article by default", () => {
        render(<ArticleTitleList articles={articles} />);

        expect(screen.getAllByText("Test Title 1")).toHaveLength(2)
        expect(screen.getAllByText("Test Title 2")).toHaveLength(1)
    });

    it('renders ArticleDetail when an article is clicked', () => {
        render(<ArticleTitleList articles={articles} />);
        
        fireEvent.click(screen.getByText("Test Title 2"));

        expect(screen.getAllByText("Test Title 2")).toHaveLength(2);
        expect(screen.getAllByText("Test Title 1")).toHaveLength(1)
    });

    it('title section is hidden for small devices', () => {
        render(<ArticleTitleList articles={articles} />);
        const hamburger = screen.queryByTestId('hamburger');
        if (hamburger) {
            fireEvent.click(hamburger);
            expect(screen.getAllByText("Test Title 1")).toHaveLength(2);
        } else {
            fail('Hamburger icon not found');
        }
    })
})

