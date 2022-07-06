import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ServiceReportForm from "./ServiceReportForm";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const New = (props) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const onSaveServiceReportHandler = (enteredServiceReportData) => {
    const serviceReportData = {
      ...enteredServiceReportData,
      id: Math.random().toString(),
    };

    props.onAddServiceReport(serviceReportData);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
    navigate("/serviceReports");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />
        <div className="flex flex-col w-full justify-center content-center">
          <div className="flex p-4 items-center m-8 mb-1 max-w-[95%] w-auto shadow-3xl">
            <div className="text-2xl m-2 justify-between bg-white text-gray-500">
              Add New Service Report
            </div>
          </div>

          <div className="flex p-4 items-center m-8 max-w-[95%] shadow-3xl">
            <ServiceReportForm
              onSaveServiceReport={onSaveServiceReportHandler}
              onCancel={stopEditingHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
