import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./components/PageNotFound";
import Sidebar from "./components/sidebar/Sidebar";
import { Edit, Home, List, NewServiceReport } from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-auto">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
              <Route path="serviceReports">
                <Route index element={<List />} />
                <Route path="new" element={<NewServiceReport />} />
                <Route path="edit/:id" element={<Edit />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
