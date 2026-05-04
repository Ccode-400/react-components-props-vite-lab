import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
  render(<App />);
  const title = screen.getByText(/Tanskie's Blog/i);
  expect(title).toBeInTheDocument();
});

test("renders article titles", () => {
  render(<App />);
  const article = screen.getByText(/My First Post/i);
  expect(article).toBeInTheDocument();
});