import { useNavigate } from "react-router-dom";
import api from "../../api/serviceReports";
import ServiceReportForm from "../../components/serviceReport/ServiceReportForm";

const NewServiceReport = () => {
  const navigate = useNavigate();

  const onSaveServiceReportHandler = (report) => {
    api.post("/api/serviceReports", report).then(() => {
      navigate("/serviceReports");
    });
  };

  const cancelHandler = () => {
    navigate("/serviceReports");
  };

  return (
    <div>
      <div className="flex p-4 items-center m-8 max-w-[70%] mx-[20%] w-full shadow-3xl">
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

      <div className="flex p-4 items-center m-8 mx-[20%] w-full max-w-[70%] shadow-3xl">
        <ServiceReportForm
          onSaveServiceReport={onSaveServiceReportHandler}
          onCancel={cancelHandler}
        />
      </div>
    </div>
  );
};

export default NewServiceReport;
