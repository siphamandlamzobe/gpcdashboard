import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";

function App() {
  const DUMMY_REPORTS = [
    {
      id: "e1",
      attendance: "10",
      serviceType: "Sunday",
      serviceDate: new Date(2022, 5, 3),
      serviceReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: "e2",
      attendance: "13",
      serviceType: "Wednesday",
      serviceDate: new Date(2022, 5, 4),
      serviceReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: "e3",
      attendance: "100",
      serviceType: "Wednesday",
      serviceDate: new Date(2022, 6, 4),
      serviceReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const [serviceReports, setServiceReports] = useState(DUMMY_REPORTS);
  const onAddServiceReportHandler = (report) => {
    setServiceReports((prevReports) => {
      return [report, ...prevReports];
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="serviceReports">
            <Route index element={<List serviceReports={serviceReports} />} />
            <Route
              path="new"
              element={<New onAddServiceReport={onAddServiceReportHandler} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
