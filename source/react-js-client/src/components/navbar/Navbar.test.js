import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Tests", () => {
  it("renders gpc logo link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const linkElement = screen.getByText(/GPC/i);
    expect(linkElement).toBeInTheDocument();
  });
});
