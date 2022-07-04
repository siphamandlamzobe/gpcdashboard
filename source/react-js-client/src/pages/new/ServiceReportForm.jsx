import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./serviceReportForm.css";

const ServiceReportForm = (props) => {
  const [attendance, setAttendance] = useState("");
  const [firsttimer, setFirsttimer] = useState("");
  const [soulsSaved, setSoulsSaved] = useState("");
  const [serviceReview, setServiceReview] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceType, setServiceType] = useState("");

  const attendanceHandler = (e) => {
    setAttendance(e.target.value);
  };

  const firsttimersHandler = (e) => {
    setFirsttimer(e.target.value);
  };

  const soulsSavedhandler = (e) => {
    setSoulsSaved(e.target.value);
  };

  const serviceTypeHandler = (e) => {
    setServiceType(e.target.value);
  };

  const serviceDateHandler = (e) => {
    setServiceDate(e.target.value);
  };

  const serviceReviewHandler = (e) => {
    setServiceReview(e.target.value);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceReportData = {
      attendance: attendance,
      firsttimer: firsttimer,
      soulsSaved: soulsSaved,
      serviceDate: new Date(serviceDate),
      serviceType: serviceType,
      serviceReview: serviceReview,
    };

    props.onSaveServiceReport(serviceReportData);

    setAttendance("");
    setFirsttimer("");
    setSoulsSaved("");
    setServiceDate("");
    setServiceType("");
    setServiceReview("");

    navigate("/serviceReports");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-field">
          <label htmlFor="attendance">Attendance</label>
          <input
            type="number"
            name="attendance"
            value={attendance}
            onChange={attendanceHandler}
            min="0"
            step="1"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="firsttimer">First Timers</label>
          <input
            type="number"
            name="firsttimer"
            value={firsttimer}
            min="0"
            step="1"
            onChange={firsttimersHandler}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="soulsSaved">Souls Saved</label>
          <input
            type="number"
            name="soulsSaved"
            value={soulsSaved}
            min="0"
            step="1"
            onChange={soulsSavedhandler}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="serviceDate">Service Date</label>
          <input
            type="date"
            name="serviceDate"
            value={serviceDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={serviceDateHandler}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="serviceType">Service Type</label>
          <select value={serviceType} onChange={serviceTypeHandler}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="serviceReview">Service Review</label>
          <textarea
            name="serviceReview"
            value={serviceReview}
            onChange={serviceReviewHandler}
            id="review"
            cols="30"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="form-actions">
        <button type="button">Cancel</button>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ServiceReportForm;
