import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getServiceReportById, getServiceTypes } from "../../utils/utils.js";

const ServiceReportEditForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const stateData = location.state;

  const [data, setData] = useState({ ...stateData });

  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    const getServiceTypesForEdit = async () => {
      const data = await getServiceTypes();
      setServiceTypes(data);
    };

    getServiceTypesForEdit();
  }, []);

  const getServiceTypeOptions = () => {
    return serviceTypes.map((serviceType, index) => {
      return (
        <option value={serviceType.id} key={index}>
          {serviceType.serviceType}
        </option>
      );
    });
  };

  useLayoutEffect(() => {
    const edit = async () => {
      await getServiceReportById(stateData.id).then((report) => {
        report.serviceDate = report.serviceDate.slice(0, 10);
        setData(report);
      });
    };
    edit();
  }, [stateData.id]);

  useEffect(() => {
    reset(data);
  }, [data]);

  const submitHandler = (data) => {
    props.onEditServiceReportHandler(data);
  };

  const cancelHandler = () => {
    navigate("/serviceReports");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-col"
      onReset={reset}
    >
      <div className="flex flex-col content-center justify-center w-full">
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="attendance">
            Attendance
          </label>
          <input
            className="rounded-md border-2 border-black"
            type="number"
            {...register("attendance", { required: true, min: 0 })}
          />
          {errors.attendance && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="firsttimers">
            First Timers
          </label>
          <input
            id="firsttimers"
            className="rounded-md border-2 border-black"
            type="number"
            {...register("firsttimers", { required: true, min: 0 })}
          />
          {errors.firsttimers && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="soulsSaved">
            Souls Saved
          </label>
          <input
            className="rounded-md border-2 border-black"
            id="soulsSaved"
            type="number"
            {...register("soulsSaved", { required: true, min: 0 })}
          />
          {errors.soulsSaved && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceDate">
            Service Date
          </label>
          <input
            className="rounded-md border-2 border-black"
            id="serviceDate"
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            {...register("serviceDate", { required: true })}
          />
          {errors.serviceDate && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceType">
            Service Type
          </label>
          <select
            {...register("serviceTypeId", { required: true })}
            className="rounded-md border-2 border-black"
          >
            <option value="">Select...</option>
            {getServiceTypeOptions()}
          </select>
          {errors.serviceType && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="serviceReview">
            Service Review
          </label>
          <textarea
            className="rounded-md border-2 border-black"
            {...register("serviceReview", { required: true })}
            id="serviceReview"
            cols="30"
            rows="4"
          />
          {errors.serviceReview && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex-none inline-block pt-2">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 rounded-lg p-1 text-white font-bold"
          >
            Update
          </button>
          <button
            type="button"
            className="border-2 hover:bg-slate-100 rounded-lg p-1 text-black font-bold m-1"
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
