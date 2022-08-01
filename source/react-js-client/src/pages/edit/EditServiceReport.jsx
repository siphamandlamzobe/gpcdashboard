import React from "react";
import ServiceReportEditForm from "../../components/serviceReport/ServiceReportEditForm";
import api from "../../api/serviceReports";
import { useNavigate } from "react-router-dom";

const EditServiceReport = () => {
  const navigate = useNavigate();
  const onEditServiceReportHandler = async (updatedReport) => {
    await api
      .put(`/api/serviceReports/${updatedReport.id}`, updatedReport)
      .then(() => {
        navigate("/serviceReports");
      });
  };
  return (
    <div>
      <div className="flex p-4 items-center m-8 max-w-[70%] mx-[20%] w-full shadow-3xl">
        <div className="flex w-full text-2xl m-2 justify-between bg-white text-gray-500">
          Edit Service Report
        </div>
      </div>

      <div className="flex p-4 items-center m-8 mx-[20%] w-full max-w-[70%] shadow-3xl">
        <ServiceReportEditForm
          onEditServiceReportHandler={onEditServiceReportHandler}
        />
      </div>
    </div>
  );
};

export default EditServiceReport;
