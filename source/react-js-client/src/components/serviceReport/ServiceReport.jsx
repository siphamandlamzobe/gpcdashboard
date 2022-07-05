import ReportDate from "./ReportDate";

const ServiceReport = (props) => {
  return (
    <div className="flex items-center p-2 m-4 justify-between shadow-3xl">
      <ReportDate serviceDate={props.serviceDate} />
      <div className="flex text-black justify-between items-center p-5 w-full">
        {props.serviceReview}
      </div>
      <div className="flex flex-col-reverse justify-center flex-1 items-end">
        <h2 className="text-base flex-1 mx-0 my-1 text-black font-bold">
          {props.serviceType}
          <span className="flex flex-col text-xs font-normal">
            SERVICE TYPE
          </span>
        </h2>
        <div className="text-sm px-2 py-6 text-black font-bold">
          {props.attendance}
          <span className="flex flex-col text-xs font-normal">ATTENDANCE</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceReport;
