import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe("Page Not Found Test", () => {
  it("renders the page not found heading", () => {
    render(<PageNotFound />);

    const headingEl = screen.getByText(/404 Page Not Found/i);
    expect(headingEl).toBeInTheDocument();
  });

  it("renders the page not found paragraph", () => {
    render(<PageNotFound />);

    const paragraphEl = screen.getByText(
      /Oop! The page you're looking for doesn't exist/i
    );
    expect(paragraphEl).toBeInTheDocument();
  });
});
