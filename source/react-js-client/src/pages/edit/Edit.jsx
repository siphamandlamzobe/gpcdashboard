import React from "react";
import ServiceReportEditForm from "./ServiceReportEditForm";
import api from "../../api/serviceReports";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const onEditServiceReportHandler = async (updatedReport) => {
    await api
      .put(`/api/serviceReports/${updatedReport.id}`, updatedReport)
      .then(() => {
        navigate("/serviceReports");
      });
  };
  return (
    <div className="flex">
      <div className="flex-auto">
        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-between bg-white text-gray-500">
            Edit Service Report
          </div>
        </div>

        <div className="flex p-4 items-center m-8 mx-auto w-auto max-w-[80%] shadow-3xl">
          <ServiceReportEditForm
            onEditServiceReportHandler={onEditServiceReportHandler}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Edit;
