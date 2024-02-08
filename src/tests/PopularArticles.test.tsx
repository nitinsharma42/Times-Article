import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node';
import PopularArticles from '../components/MostPopularArticle/PopularArticles';
import useFetchArticle from "../hooks/useFetchArticle";
import '@testing-library/jest-dom';

const server = setupServer(
  http.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json', () => {
    return HttpResponse.json({
      results : [ { title: "Test Title 1", byline: "Test Byline 1", published_date: "2022-01-01", abstract: "Test abstract 1" } ]
    })
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("PopularArticles", () => {
    it('renders PopularArticles with article data', async () => {
      jest.mock('../hooks/useFetchArticle', () => {
        return {
          __esModule: true,
          default: jest.fn(() => 'mocked')
        }
      });  
        render(<PopularArticles />);
      
        await waitFor(() => screen.getByText("Test Title 1"));
        expect(useFetchArticle).toHaveBeenCalled()
        //expect(screen.getAllByText("Test Title 1")[0]).toBeInTheDocument();
      });
      
      // it('renders loading state initially', () => {
      //   render(<PopularArticles/>);
      
      //   expect(screen.getByTestId("loader")).toBeInTheDocument();
      // });
      
      // it('renders error message on failure', async () => {
      //   server.use(
      //     http.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json', () => {
      //       HttpResponse.json({
      //         error: "Unauthorized"
      //       }, {status: 401})
      //     })
      //   );
      
      //   render(<PopularArticles/>);
      
      //   await waitFor(() => screen.getByText("Error"));
      
      //   expect(screen.getByText("Error")).toBeInTheDocument();
      // });
});
