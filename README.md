# Totality Corp Frontend Assessment

## Tech Stack

This project is built using the following technologies and tools:

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **React Query:** A data-fetching and state management library for React applications.
- **Axios:** A JavaScript library for making HTTP requests.
- **Tailwind CSS:** A utility-first CSS framework for creating responsive web designs.
- **Vite:** A fast, modern, and flexible build tool and development server.
- **ESLint:** A linter tool for identifying and fixing problems in your JavaScript and TypeScript code.

## Approach

### Project Structure

The project is structured into several key components, including:

- **Home Page:** This page serves as the main landing page of our application. Users can view a list of products available in the Totality Corp online store. We've employed  search functionality, and sorting options to provide a seamless shopping experience.

- **Cart Page:** Our cart page displays a summary of products added by the user. Users can view item details, quantities, and total amounts. The cart functionality is managed using React Context and a reducer to maintain a global state.

- **Checkout Page (Optional):** The checkout page allows users to enter their shipping and payment details and complete their purchase. This section features a shipping form, payment form, and a place order feature. The state for checkout is also managed using React Context and a reducer.

### State Management

We've adopted the React Context API along with a reducer to manage the state of the shopping cart and checkout process. This approach ensures that cart and checkout data is available to components across the application without the need for prop drilling.

### Data Fetching

To populate our application with product data, we leverage the power of React Query and Axios. These technologies make it easy to fetch, cache, and manage data from the [Fakestore API](https://fakestoreapi.com/). React Query helps improve the overall user experience by efficiently handling data loading, refetching, and caching.

### Styling

We've embraced Tailwind CSS as our styling framework. Tailwind CSS offers a utility-first approach, enabling us to rapidly create responsive and visually appealing user interfaces. It's a key part of our project's front-end design.
