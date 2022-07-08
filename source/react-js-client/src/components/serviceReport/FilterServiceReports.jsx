import React from "react";
import { useState } from "react";

const FilterServiceReports = () => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedDay, setSelectedDay] = useState("01");
  const [selectedSerrviceType, seSelectedSerrviceType] = useState("");

  return (
    <div className="w-1/5 rounded-2xl my-3 h-60 shadow-3xl">
      <div className="flex justify-center align-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute top-0 align-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <h1 className="flex text-xl font-bold m-2 justify-center items-center text-gray-400">
          Filter Service Reports
        </h1>
      </div>

      <div className="flex items-center mx-auto justify-center">
        <div className="flex flex-col mx-auto justify-center items-center">
          <span className="flex text-[10px] text-slate-600 mb-0">
            FILTER BY DATE
          </span>
          <div className="flex">
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
              }}
              className="flex mx-2 text-lg font-bold"
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
              }}
              className="flex mr-2 text-lg font-bold"
            >
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select
              value={selectedDay}
              onChange={(e) => {
                setSelectedDay(e.target.value);
              }}
              className="flex mr-2 text-lg font-bold"
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="02">08</option>
              <option value="03">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>

          <span className="flex text-[10px] text-slate-600 mt-4">
            FILTER BY SERVICE TYPE
          </span>
          <div className="flex">
            <select
              value={selectedSerrviceType}
              onChange={(e) => {
                seSelectedSerrviceType(e.target.value);
              }}
              className="m-0 text-lg font-bold items-center"
            >
              <option value="">Service Type</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-auto justify-center"></div>
    </div>
  );
};

export default FilterServiceReports;
