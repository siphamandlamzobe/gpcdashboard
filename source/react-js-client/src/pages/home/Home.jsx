import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="flex-auto">
        <Navbar />
        container
      </div>
    </div>
  );
};

export default Home;
