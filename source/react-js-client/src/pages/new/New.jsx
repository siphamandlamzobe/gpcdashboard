import Sidebar from "../../components/sidebar/Sidebar";
// import "./new.css";
import ServiceReportForm from "./ServiceReportForm";

const New = (props) => {
  const onSaveServiceReportHandler = (enteredServiceReportData) => {
    const serviceReportData = {
      ...enteredServiceReportData,
      id: Math.random().toString(),
    };

    props.onAddServiceReport(serviceReportData);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full justify-center content-center">

        <div className="flex p-4 items-center m-8 max-w-[95%] w-auto shadow-3xl">
          <div className="text-2xl m-2 justify-between bg-white text-gray-500">
            Add New Service Report
          </div>
        </div>

        <div className="flex p-4 items-center m-8 max-w-[95%] shadow-3xl">
          <ServiceReportForm onSaveServiceReport={onSaveServiceReportHandler} />
        </div>
        
      </div>
    </div>
  );
};

export default New;
