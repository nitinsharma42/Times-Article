import { render, screen } from '@testing-library/react';
import PopularArticles from '../components/MostPopularArticle/PopularArticles';
import '@testing-library/jest-dom';

//Mocking useFetchArticle hook
jest.mock('../hooks/useFetchArticle', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: { results: [{ id: 1, title: 'Article 1' }] },
    error: null,
    loading: false
  }))
}));

describe('PopularArticles', () => {
  it('renders loader when loading is true', () => {
    require('../hooks/useFetchArticle').default.mockImplementation(() => ({
      data: { results: [] },
      error: null,
      loading: true
    }));
    render(<PopularArticles />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    // Mock useFetchArticle hook to return an error message
    require('../hooks/useFetchArticle').default.mockImplementation(() => ({
      data: { results: [] },
      error: 'Error message',
      loading: false
    }));
    render(<PopularArticles />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('renders article list when data is fetched successfully', () => {
    // Mock useFetchArticle hook to return article data
    require('../hooks/useFetchArticle').default.mockImplementation(() => ({
      data: { results: [{ id: 1, title: 'Test Title 1' }] },
      error: null,
      loading: false
    }));
    render(<PopularArticles />);
    expect(screen.getAllByText('Test Title 1')).toHaveLength(2);
  });
});
