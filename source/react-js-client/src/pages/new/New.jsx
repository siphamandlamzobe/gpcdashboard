import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ServiceReportForm from "./ServiceReportForm";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const New = (props) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const onSaveServiceReportHandler = (enteredServiceReportData) => {
    props.onAddServiceReport(enteredServiceReportData);
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

        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-between bg-white text-gray-500">
            Add New Service Report
            
          </div>
        </div>

        <div className="flex p-4 items-center m-8 mx-auto w-auto max-w-[80%] shadow-3xl">
            <ServiceReportForm
              onSaveServiceReport={onSaveServiceReportHandler}
              onCancel={stopEditingHandler}
            />
          </div>
      </div>
    </div>
  );
};

export default New;
