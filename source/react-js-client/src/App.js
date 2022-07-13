import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import PageNotFound from "./components/PageNotFound";
import api from "./api/serviceReports";
import { Edit, Home, List, New } from "./pages/index";

function App() {
  const [serviceReports, setServiceReports] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onAddServiceReportHandler = async (report) => {
    const request = {
      ...report,
      id: Math.floor(Math.random() * 10).toString(),
    };

    const response = await api.post("/serviceReports", request);

    const serviceReport = response.data;
    serviceReport.serviceDate = new Date(serviceReport.serviceDate);

    setServiceReports((prevReports) => {
      return [serviceReport, ...prevReports];
    });
  };

  const removeServiceReportHandler = async (id) => {
    await api.delete(`/serviceReports/${id}`);
    const newserviceReportList = serviceReports.filter((report) => {
      return report.id !== id;
    });
    setServiceReports(newserviceReportList);
  };

  const onEditServiceReportHandler = async (updatedReport) => {
    const res = await api.put(`/serviceReports/${updatedReport.id}`, updatedReport);
    res.data.serviceDate = new Date(res.data.serviceDate);
    setServiceReports(
      serviceReports.map((report) =>{
      return report.id === res.data.id ? {...res.data} : report;
    }));
  };

  const keys = ["serviceReview", "attendance", "serviceType"];

  const getSearchKeyword = (query) => {
    setQuery(query);
  };

  const getAllServiceReports = async () => {
    const response = await api.get("/serviceReports");
    return response.data;
  };

  useLayoutEffect(() => {
    const getServiceReports = async () => {
      setIsLoading(true);
      const allServiceReports = await getAllServiceReports();
      if (allServiceReports) {
        allServiceReports.map((report) => {
          return (report.serviceDate = new Date(report.serviceDate));
        });
        setServiceReports(allServiceReports);
        setIsLoading(false);
      }
    };

    getServiceReports();
  }, []);

  useEffect(() => {
    const search = async () => {
      const res = await api.get(`/serviceReports?q=${query}`);
      
      const filteredServiceReports = res.data.filter((report) =>
        keys.some((key) => report[key].toLowerCase().includes(query))
      );

      filteredServiceReports.map((report) => {
        return (report.serviceDate = new Date(report.serviceDate));
      });
      setServiceReports(filteredServiceReports);
      return serviceReports;
    };
    search();
  }, [query]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="serviceReports">
            <Route
              index
              element={
                <List
                  serviceReports={serviceReports}
                  onDeleteHandler={removeServiceReportHandler}
                  searchTerm={getSearchKeyword}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="new"
              element={<New onAddServiceReport={onAddServiceReportHandler} />}
            />
            <Route
              path="edit/:id"
              element={
                <Edit onEditServiceReportHandler={onEditServiceReportHandler}/>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
