import api from "../api/serviceReports";

export async function getAllServiceReports() {
  const response = await api.get("/api/serviceReports");
  return response.data;
}

export function getSearchParams(searchParams) {
  var newSearchParams = searchParams;

  if (newSearchParams == null) {
    return (newSearchParams = "");
  }

  return newSearchParams;
}

export async function getServiceReportById(id) {
  const response = await api
    .get(`/api/serviceReports/${id}`)
    .then((response) => {
      return response.data;
    });

  return response;
}

export async function deleteServiceReportHandler(id, serviceReports) {
  await api.delete(`/api/serviceReports/${id}`);
  const newServiceReportList = serviceReports.filter((report) => {
    return report.id !== id;
  });

  return newServiceReportList;
}

export function searchHandler(query, serviceReportsForSearch){
  const keys = ["serviceReview", "attendance", "serviceType"];

  if (query.length >= 1 || query === "") {
    const filteredServiceReports = serviceReportsForSearch.filter(
      (report) =>
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

export async function saveServiceReportHandler(report, navigator) {
  await api.post("/api/serviceReports", report).then(() => {
    return navigator;
  });
};