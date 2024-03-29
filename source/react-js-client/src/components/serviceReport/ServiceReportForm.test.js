import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceReportForm from "./ServiceReportForm";

describe("Service Report Form", () => {
  it("render the attandance input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const attendanceEl = screen.getByLabelText(/attendance/i);
    expect(attendanceEl).toBeInTheDocument();
  });

  it("render the firsttimers input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const firsttimersEl = screen.getByLabelText(/First Timers/i);
    expect(firsttimersEl).toBeInTheDocument();
  });

  it("render the soulsSaved input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const soulsSavedEl = screen.getByLabelText(/Souls Saved/i);
    expect(soulsSavedEl).toBeInTheDocument();
  });

  it("render the serviceDate input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const serviceDateEl = screen.getByLabelText(/Service Date/i);
    expect(serviceDateEl).toBeInTheDocument();
  });

  it("render the serviceReview input", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const serviceReviewEl = screen.getByLabelText(/Service Review/i);
    expect(serviceReviewEl).toBeInTheDocument();
  });

  it("render the submit button", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const submitButtonEl = screen.getByRole('button', {name: /submit/i});
    expect(submitButtonEl).toBeInTheDocument();
  });

  it("render the cancel button", () => {
    render(
      <Router>
        <ServiceReportForm />
      </Router>
    );

    const cancelButtonEl = screen.getByRole('button', {name: /cancel/i});
    expect(cancelButtonEl).toBeInTheDocument();
  });
});
