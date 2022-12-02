import api from "../api/serviceReports";

export function getAllServiceReports() {
  return api.get("/api/serviceReports/getall").then((response) => {
    return response.data;
  });
}

export function getSearchParams(searchParams) {
  var newSearchParams = searchParams;

  if (newSearchParams == null) {
    return (newSearchParams = "");
  }

  return newSearchParams;
}

export async function getServiceReportById(id) {
  return api.get(`/api/serviceReports/${id}`).then((response) => {
    return response.data;
  });
}

export function deleteServiceReportHandler(id, serviceReports) {
  api.delete(`/api/serviceReports/${id}`);
  const newServiceReportList = serviceReports.filter((report) => {
    return report.id !== id;
  });

  return newServiceReportList;
}

export function searchHandler(query, serviceReportsForSearch) {
  const keys = ["serviceReview", "attendance", "serviceType"];

  if (query.length >= 1 || query === "") {
    const filteredServiceReports = serviceReportsForSearch.filter((report) =>
      keys.some((key) =>
        report[key].toString().toLowerCase().includes(query.toLowerCase())
      )
    );

    filteredServiceReports.map((report) => {
      return (report.serviceDate = new Date(report.serviceDate));
    });

    return filteredServiceReports;
  }
}

export function saveServiceReportHandler(report, navigator) {
  return api.post("/api/serviceReports", report);
  // .then(() => {
  //   console.log("nav: ", navigator);
  //   return navigator;
  // });
}

export function editServiceReportHandler(updatedReport, navigator) {
  return api
    .put(`/api/serviceReports/${updatedReport.id}`, updatedReport)
    .then(() => {
      return navigator;
    });
}

export function getServiceTypes() {
  return api.get("/api/serviceReports/serviceTypes").then((response) => {
    return response.data;
  });
}
