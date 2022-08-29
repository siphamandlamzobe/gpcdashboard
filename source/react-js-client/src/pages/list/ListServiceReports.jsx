import React, { useEffect, useLayoutEffect, useState } from "react";
import ServiceReports from "../../components/serviceReport/ServiceReports";
import { Link, useSearchParams } from "react-router-dom";
import Search from "../../components/search/Search";
import api from "../../api/serviceReports";

const ListServiceReports = () => {
  const [serviceReports, setServiceReports] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchParams = () => {
    var searchParamsx = searchParams.get("q");
    if (searchParamsx == null) {
      return (searchParamsx = "");
    }
  };

  const [query, setQuery] = useState(getSearchParams());
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
  }, [setServiceReports]);

  const getQuery = (query) => {
    setQuery(query);
  };

  const keys = ["serviceReview", "attendance", "serviceType"];

  useEffect(() => {
    const search = async () => {
      if (query.length >= 1 || query === "") {
        const res = await getAllServiceReports();

        const filteredServiceReports = res.filter((report) =>
          keys.some((key) =>
            report[key].toString().toLowerCase().includes(query.toLowerCase())
          )
        );

        filteredServiceReports.map((report) => {
          return (report.serviceDate = new Date(report.serviceDate));
        });
        setServiceReports(filteredServiceReports);
        return serviceReports;
      }
    };
    search();
    // eslint-disable-next-line
  }, [setQuery, searchParams, query, serviceReports]);

  const getSearchKeyword = (query) => {
    getQuery(query);
    setSearchParams({ q: query });
  };

  return (
    <div>
      <div className="flex p-4 m-8 max-w-[70%]  mx-[20%] w-full shadow-3xl">
        <div className="flex w-full text-2xl m-2 justify-between text-gray-500">
          <Search getSearchKeyword={getSearchKeyword} query={query} />
          <Link
            to="/serviceReports/new"
            style={{ textDecoration: "none" }}
            className="text-lg font-[400] border-2 border-green-600 rounded-md p-1 no-underline cursor-pointer"
          >
            Add New Report
          </Link>
        </div>
      </div>

      <div className="flex mx-[20%] w-full max-w-[70%]">
        <ServiceReports
          serviceReports={serviceReports}
          onDeleteHandler={onDeleteServiceReportHandler}
          searchTerm={query}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ListServiceReports;
