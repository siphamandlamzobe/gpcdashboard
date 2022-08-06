import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceReportEditForm from "./ServiceReportEditForm";

describe("Service Report Edit Form", () => {
  it("render the attandance input", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const attendanceEl = screen.getByLabelText(/attendance/i);
    expect(attendanceEl).toBeInTheDocument();
  });

  it("render the firsttimers input", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const firsttimersEl = screen.getByLabelText(/First Timers/i);
    expect(firsttimersEl).toBeInTheDocument();
  });

  it("render the soulsSaved input", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const soulsSavedEl = screen.getByLabelText(/Souls Saved/i);
    expect(soulsSavedEl).toBeInTheDocument();
  });

  it("render the serviceDate input", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const serviceDateEl = screen.getByLabelText(/Service Date/i);
    expect(serviceDateEl).toBeInTheDocument();
  });

  it("render the serviceReview input", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const serviceReviewEl = screen.getByLabelText(/Service Review/i);
    expect(serviceReviewEl).toBeInTheDocument();
  });

  it("render the submit button", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const submitButtonEl = screen.getByRole("button", { name: /update/i });
    expect(submitButtonEl).toBeInTheDocument();
  });

  it("render the cancel button", () => {
    render(
      <Router>
        <ServiceReportEditForm />
      </Router>
    );

    const cancelButtonEl = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButtonEl).toBeInTheDocument();
  });
});
