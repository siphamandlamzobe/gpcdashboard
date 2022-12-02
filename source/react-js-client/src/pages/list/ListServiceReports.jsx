import React, { useEffect, useLayoutEffect, useState } from "react";
import ServiceReports from "../../components/serviceReport/ServiceReports";
import { Link, useSearchParams } from "react-router-dom";
import Search from "../../components/search/Search";
import {
  getAllServiceReports,
  getSearchParams,
  deleteServiceReportHandler,
  searchHandler,
} from "../../utils/utils.js";

const ListServiceReports = () => {
  const [serviceReports, setServiceReports] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [serviceReportsForSearch, setServiceReportsForSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(getSearchParams(searchParams.get("q")));

  const getQuery = (query) => {
    setQuery(query);
  };

  const onDeleteServiceReportHandler = async (id) => {
    const newServiceReportList = await deleteServiceReportHandler(
      id,
      serviceReports
    );
    setServiceReports(newServiceReportList);
  };

  useLayoutEffect(() => {
    const getServiceReports = async () => {
      const allServiceReports = await getAllServiceReports();
      if (allServiceReports) {
        allServiceReports.map((report) => {
          return (report.serviceDate = new Date(report.serviceDate));
        });
        setServiceReports(allServiceReports);
        setServiceReportsForSearch(allServiceReports);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    setTimeout(() => {
      getServiceReports();
    }, 1000);
  }, [setServiceReports]);

  useEffect(() => {
    const search = () => {
      const filteredServiceReports = searchHandler(
        query,
        serviceReportsForSearch
      );
      setServiceReports(filteredServiceReports);
      return serviceReports;
    };
    search();
    // eslint-disable-next-line
  }, [setQuery, query]);

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
