import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";
import { useEffect } from "react";
import Edit from "./pages/edit/Edit";
import PageNotFound from "./components/PageNotFound";

function App() {
  const DUMMY_REPORTS = [
    {
      id: "e1",
      attendance: "10",
      serviceType: "Sunday",
      serviceDate: new Date(2020, 5, 2),
      serviceReview:
        "New Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: "e2",
      attendance: "13",
      serviceType: "Wednesday",
      serviceDate: new Date(2021, 7, 4),
      serviceReview:
        "Review Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: "e3",
      attendance: "100",
      serviceType: "Wednesday",
      serviceDate: new Date(2022, 4, 25),
      serviceReview:
        "Service Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: "e4",
      attendance: "10",
      serviceType: "Sunday",
      serviceDate: new Date(2022, 6, 5),
      serviceReview:
        "New Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const [serviceReports, setServiceReports] = useState(DUMMY_REPORTS);
  const [data, setData] = useState([]);
  const [editServiceReport, setEditServiceReport] = useState("");
  const [query, setQuery] = useState("");
  const onAddServiceReportHandler = (report) => {
    setData((prevReports) => {
      return [report, ...prevReports];
    });
  };

  const removeServiceReportHandler = (id) => {
    const newserviceReportList = data.filter((report) => {
      return report.id !== id;
    });
    console.log(newserviceReportList);
    setData(newserviceReportList);
  };

  const onEditServiceReportHandler = (id) => {
    const serviceReport = data.filter((report) => report.id === id);
    setEditServiceReport(serviceReport);
    console.log(editServiceReport);
  };

  const keys = ["serviceReview", "attendance", "serviceType"];

  const getSearchKeyword = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const search = () => {
      const filteredServiceReports = serviceReports.filter((report) =>
        keys.some((key) => report[key].toLowerCase().includes(query))
      );
      setData(filteredServiceReports);
      return data;
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
                  serviceReports={data}
                  onEditHandler={onEditServiceReportHandler}
                  onDeleteHandler={removeServiceReportHandler}
                  searchTerm={getSearchKeyword}
                />
              }
            />
            <Route
              path="new"
              element={<New onAddServiceReport={onAddServiceReportHandler} />}
            />
            <Route
              path="edit/:id"
              element={<Edit onEditServiceReport={editServiceReport} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
