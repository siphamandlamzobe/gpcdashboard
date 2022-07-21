import React, { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/serviceReports";

const ServiceReportEditForm = (props) => {
  const location = useLocation();
  const stateData = location.state;

  const [data, setData] = useState({ ...stateData });

  const getServiceReportById = async (id) => {
    const response = await api.get(`/api/serviceReports/${id}`);
    return response.data;
  };

  useLayoutEffect(() => {
    const edit = async () => {
      const editReport = await getServiceReportById(stateData.id);

      if (editReport) {
        editReport.serviceDate = editReport.serviceDate.slice(0, 10);
        setData(editReport);
      }
    };
    edit();
  }, [stateData.id]);

  const inputHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;

    setData(newData);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    props.onEditServiceReportHandler(data);

    navigate("/serviceReports");
  };

  const cancelHandler = () => {
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
            value={data.attendance}
            onChange={inputHandler}
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
            value={data.firsttimers}
            min="0"
            step="1"
            onChange={inputHandler}
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
            value={data.soulsSaved}
            min="0"
            step="1"
            onChange={inputHandler}
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
            value={data.serviceDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={inputHandler}
            required
          />
        </div>

        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceType">
            Service Type
          </label>
          <select
            value={data.serviceType}
            name="serviceType"
            onChange={inputHandler}
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
            defaultValue={data.serviceReview}
            onChange={inputHandler}
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
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceReportEditForm;
