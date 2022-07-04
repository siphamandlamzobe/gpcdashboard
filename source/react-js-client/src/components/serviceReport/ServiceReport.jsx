import ReportDate from "./ReportDate";
import "./serviceReport.css";

const ServiceReport = (props) => {
  return (
    <div className="report-item">
      <ReportDate serviceDate={props.serviceDate} />
      <div className="report-item__review">{props.serviceReview}</div>
      <div className="report-item__description">
        <h2>
          {props.serviceType}
          <span>SERVICE TYPE</span>
        </h2>
        <div className="report-item__attendance">
          {props.attendance}
          <span>ATTENDANCE</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceReport;
