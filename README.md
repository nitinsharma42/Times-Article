# Times Article

Times Article is a React application for viewing popular articles. It fetches data from an API and displays a list of articles along with their details.

## Installation

To run the Times Article application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nitinsharma42/Times-Article.git
    ```

2. Navigate to the project directory:

    ```bash
    cd times-article
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and define environment variables as needed. You can copy the `.env.example` file and customize it.

5. Start the development server:

    ```bash
    npm run dev
    ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Starts the preview server.
- `npm test`: Runs tests using Jest.
- `npm run coverage`: Runs tests with coverage analysis.
- `npm run sonar`: Runs sonarscanner and generate the report.

## Technologies Used

- React
- TypeScript
- Vite
- Jest
- ESLint
- React Testing Library

## Architecture Design

- Use PageUI React architecture to implement the feature to show the most popular articles from the NY Times. The folder structure we have used:

    - components - contain the common components such as Loader and Header
    - hooks - contain custom hook useFetchArticle to fetch the article's data
    - page - contains the View to display the article list and details
    - types - contain the interface and type for type-checking
    - icons - contain the icons used in the application.
Mobile Screenshot:
<img width="600" alt="Screenshot 2024-02-09 at 3 18 33 PM" src="https://github.com/nitinsharma42/Times-Article/assets/83276693/15b2ba59-33b9-406f-abd0-ebe07532afb2">

Desktop Screenshot:
<img width="1440" alt="Screenshot 2024-02-09 at 3 18 13 PM" src="https://github.com/nitinsharma42/Times-Article/assets/83276693/35878fa4-2c89-4d46-a3a7-77bf09bbb005">


