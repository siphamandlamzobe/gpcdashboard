import { Link } from "react-router-dom";
import ReportDate from "./ReportDate";

const ServiceReport = (props) => {
  return (
    <div className="flex items-center p-2 m-4 justify-between shadow-3xl relative">
      <ReportDate serviceDate={props.serviceDate} />
      <div className="flex text-black justify-between items-center p-5 w-full">
        {props.serviceReview}
      </div>
      <div className="absolute flex top-0 right-0 m-1 mr-2 gap-2">
        <Link to={{ pathname: `/serviceReports/serviceReport/${props.id}` }}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </Link>
        <Link
          to={{ pathname: `/serviceReports/edit/${props.id}` }}
          state={{
            id: props.id,
            attendance: props.attendance,
            firsttimer: props.firsttimer,
            soulsSaved: props.soulsSaved,
            serviceReview: props.serviceReview,
            serviceDate: props.serviceDate.toISOString().slice(0, 10),
            serviceType: props.serviceType,
          }}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </Link>

        <Link to={{ pathname: "/serviceReports" }}>
          <button
            onClick={() => {
              props.onDeleteHandler(props.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="flex flex-col-reverse justify-center flex-1 items-center">
        <h2 className="text-sm mx-0 my-1 text-black font-bold">
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
