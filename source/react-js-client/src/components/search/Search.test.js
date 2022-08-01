import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("renders service report search placeholder text", () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(/Search Service Reports/i);
  expect(inputElement).toBeInTheDocument();
});
