import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceReportForm from "./ServiceReportForm";

describe("Service Report Form", () => {
  beforeAll(() => {});
  it("render the attandance input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const attendanceEl = screen.getByLabelText(/Attendance/i);
    expect(attendanceEl).toBeInTheDocument();
  });
});
