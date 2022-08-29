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
