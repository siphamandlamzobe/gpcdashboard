import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getServiceTypes } from "../../utils/utils";
import { useEffect, useState } from "react";

const ServiceReportForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = (data) => {
    props.onSaveServiceReport(data);
  };

  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    const getServiceTypesForNewReport = async () => {
      const data = await getServiceTypes();
      setServiceTypes(data);
    };

    getServiceTypesForNewReport();
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

  const cancelHandler = () => {
    navigate("/serviceReports");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-col"
    >
      <div className="flex flex-col content-center justify-center w-full">
        <div className="flex flex-col content-center p-1">
          <label className="font-bold" htmlFor="attendance">
            Attendance
          </label>
          <input
            id="attendance"
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
            id="soulsSaved"
            className="rounded-md border-2 border-black"
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
            id="serviceDate"
            className="rounded-md border-2 border-black"
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
            className="bg-green-500 hover:bg-green-600 rounded-lg p-1 text-white font-bold"
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded-lg p-1 border-2 hover:bg-slate-100 text-black font-bold m-1"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceReportForm;
