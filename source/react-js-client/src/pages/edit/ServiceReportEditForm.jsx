import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceReportEditForm = (props) => {
  const [serviceReport, setServiceReport] = useState({
    id: null,
    attendance: "",
    firsttimer: "",
    soulsSaved: "",
    serviceDate: "",
    serviceType: "",
    serviceReview: "",
  });

  const [attendance2, setAttendance] = useState("");
  const [firsttimer2, setFirsttimer] = useState("");
  const [soulsSaved2, setSoulsSaved] = useState("");
  const [serviceReview2, setServiceReview] = useState("");
  const [serviceDate2, setServiceDate] = useState("");
  const [serviceType2, setServiceType] = useState("");

  const { state } = useLocation();
  const {
    id,
    attendance,
    firsttimer,
    soulsSaved,
    serviceReview,
    serviceDate,
    serviceType,
  } = state;
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

    // const serviceReportData = {
    //   attendance: attendance,
    //   firsttimer: firsttimer,
    //   soulsSaved: soulsSaved,
    //   serviceDate: new Date(serviceDate),
    //   serviceType: serviceType,
    //   serviceReview: serviceReview,
    // };

    // console.log(state);
    // props.onEditServiceReportHandler(state);

    // setAttendance("");
    // setFirsttimer("");
    // setSoulsSaved("");
    // setServiceDate("");
    // setServiceType("");
    // setServiceReview("");

    // navigate("/serviceReports");
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
            value={state.attendance}
            onChange={attendanceHandler}
            min="0"
            step="1"
            required
          />
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="firsttimer">
            First Timers
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="number"
            name="firsttimer"
            value={state.firsttimer}
            min="0"
            step="1"
            onChange={firsttimersHandler}
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
            value={state.soulsSaved}
            min="0"
            step="1"
            onChange={soulsSavedhandler}
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
            value={state.serviceDate}
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
            value={state.serviceType}
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
            value={state.serviceReview}
            onChange={serviceReviewHandler}
            id="review"
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div className="flex-none inline-block pt-2">
          <button
            type="submit"
            className="bg-orange-600 rounded-lg p-1 text-white font-bold"
          >
            Update
          </button>
          <button
            type="button"
            className="border-2 rounded-lg p-1 text-black font-bold m-1"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceReportEditForm;
