import Sidebar from "../../components/sidebar/Sidebar";
import "./new.css";
import ServiceReportForm from "./ServiceReportForm";

const New = (props) => {
  const onSaveServiceReportHandler = (enteredServiceReportData) => {
    const serviceReportData = {
      ...enteredServiceReportData,
      id: Math.random().toString(),
    };

    // alert(`Report Created!
    //     ID: ${serviceReportData.id}
    //     Attendance: ${serviceReportData.attendance}
    //     FF: ${serviceReportData.firsttimer}
    //     SS: ${serviceReportData.soulsSaved}
    //     SS: ${serviceReportData.serviceDate}
    //     SS: ${serviceReportData.serviceReview}
    //     ServiceType: ${serviceReportData.serviceType}`);

    props.onAddServiceReport(serviceReportData);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <div className="reportTitle">
          <h1>This is the title</h1>
        </div> */}

        <ServiceReportForm onSaveServiceReport={onSaveServiceReportHandler} />
      </div>
    </div>
  );
};

export default New;
