import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceReportForm = (props) => {
  const [attendance, setAttendance] = useState("");
  const [firsttimers, setfirsttimers] = useState("");
  const [soulsSaved, setSoulsSaved] = useState("");
  const [serviceReview, setServiceReview] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceType, setServiceType] = useState("");

  const attendanceHandler = (e) => {
    setAttendance(e.target.value);
  };

  const firsttimerssHandler = (e) => {
    setfirsttimers(e.target.value);
  };

  const soulsSavedHandler = (e) => {
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
      firsttimers: firsttimers,
      soulsSaved: soulsSaved,
      serviceDate: new Date(serviceDate),
      serviceType: serviceType,
      serviceReview: serviceReview,
    };

    props.onSaveServiceReport(serviceReportData);

    setAttendance("");
    setfirsttimers("");
    setSoulsSaved("");
    setServiceDate("");
    setServiceType("");
    setServiceReview("");

    navigate("/serviceReports");
  };
  return (
    <form onSubmit={submitHandler} className="flex w-full flex-col">
      <div className="flex flex-col content-center justify-center w-full">
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="attendance">
            Attendance
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="number"
            name="attendance"
            value={attendance}
            onChange={attendanceHandler}
            min="0"
            step="1"
            required
          />
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="firsttimers">
            First Timers
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="number"
            name="firsttimers"
            value={firsttimers}
            min="0"
            step="1"
            onChange={firsttimerssHandler}
            required
          />
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="soulsSaved">
            Souls Saved
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="number"
            name="soulsSaved"
            value={soulsSaved}
            min="0"
            step="1"
            onChange={soulsSavedHandler}
            required
          />
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceDate">
            Service Date
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="date"
            name="serviceDate"
            value={serviceDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={serviceDateHandler}
            required
          />
        </div>

        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceType">
            Service Type
          </label>
          <select
            value={serviceType}
            onChange={serviceTypeHandler}
            className="rounded-md border-2 border-black"
          >
            <option value="">Select...</option>
            <option value="Sunday">Sunday</option>
            <option value="Wednesday">Wednesday</option>
          </select>
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceReview">
            Service Review
          </label>
          <textarea
            className="rounded-md border-2 border-black"
            name="serviceReview"
            value={serviceReview}
            onChange={serviceReviewHandler}
            id="review"
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div className="flex-none inline-block pt-2">
          <button
            type="submit"
            className="bg-green-700 rounded-lg p-1 text-white font-bold"
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded-lg p-1 border-2 text-black font-bold m-1"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceReportForm;
