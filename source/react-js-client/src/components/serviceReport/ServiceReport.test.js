import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceReport from "./ServiceReport";

describe("Service Report Tests", () => {
  it("render the attendance element", () => {
    render(
      <Router>
        <ServiceReport />
      </Router>
    );
    const attendanceEl = screen.getByText(/ATTENDANCE/i);
    expect(attendanceEl).toBeInTheDocument();
  });

  it("render the service type element", () => {
    render(
      <Router>
        <ServiceReport />
      </Router>
    );
    const serviceTypeEl = screen.getByText(/SERVICE TYPE/i);
    expect(serviceTypeEl).toBeInTheDocument();
  });
});
