import React, { useEffect, useLayoutEffect, useState } from "react";
import ServiceReports from "../../components/serviceReport/ServiceReports";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import api from "../../api/serviceReports";

const ListServiceReports = () => {
  const [serviceReports, setServiceReports] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onDeleteServiceReportHandler = async (id) => {
    await api.delete(`/api/serviceReports/${id}`);
    const newServiceReportList = serviceReports.filter((report) => {
      return report.id !== id;
    });
    setServiceReports(newServiceReportList);
  };

  const getAllServiceReports = async () => {
    const response = await api.get("/api/serviceReports");
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

  const getQuery = (query) => {
    setQuery(query);
  };

  const keys = ["serviceReview", "attendance", "serviceType"];

  useEffect(() => {
    const search = async () => {
      const res = await api.get(`/api/serviceReports?q=${query}`);
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
    <div className="flex w-full">
      <div className="flex-auto">
        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-between text-gray-500">
            <Search getSearchKeyword={getQuery} />
            <Link
              to="/serviceReports/new"
              style={{ textDecoration: "none" }}
              className="text-lg font-[400] border-2 border-green-600 rounded-md p-1 no-underline cursor-pointer"
            >
              Add New Report
            </Link>
          </div>
        </div>

        <ServiceReports
          serviceReports={serviceReports}
          onDeleteHandler={onDeleteServiceReportHandler}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ListServiceReports;
