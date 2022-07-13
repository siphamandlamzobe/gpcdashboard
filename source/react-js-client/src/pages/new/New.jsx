import Sidebar from "../../components/sidebar/Sidebar";
import ServiceReportForm from "./ServiceReportForm";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import api from "../../api/serviceReports";

const New = () => {
  const navigate = useNavigate();
  const [serviceReports, setServiceReports] = useState();

  const onSaveServiceReportHandler = async (report) => {
    const request = {
      ...report,
      id: Math.floor(Math.random() * 10).toString(),
    };

    const response = await api.post("/serviceReports", request);

    const serviceReport = response.data;
    serviceReport.serviceDate = new Date(serviceReport.serviceDate);

    // setServiceReports((prevReports) => {
    //   return [serviceReport, ...prevReports];
    // });
  };

  const cancelHandler = () => {
    navigate("/serviceReports");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />

        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-start bg-white text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add New Service Report
          </div>
        </div>

        <div className="flex p-4 items-center m-8 mx-auto w-auto max-w-[80%] shadow-3xl">
          <ServiceReportForm
            onSaveServiceReport={onSaveServiceReportHandler}
            onCancel={cancelHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default New;
