import ServiceReportList from "./ServiceReportList";

const ServiceReports = (props) => {
  return (
    <div className="w-full">
      <ServiceReportList
        serviceReports={props.serviceReports}
        onDeleteHandler={props.onDeleteHandler}
        searchTerm={props.searchTerm}
        isLoading={props.isLoading}
      />
    </div>
  );
};

export default ServiceReports;
