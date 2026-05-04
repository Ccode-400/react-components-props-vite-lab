import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the blog name in the header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Tanskie's Blog/i); // Replace with your actual blog name
  expect(headerElement).toBeInTheDocument();
});
