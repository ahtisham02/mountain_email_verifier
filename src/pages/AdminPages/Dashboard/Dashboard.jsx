import React from "react";
import Dashboard from "../../../ui-components/Dashboard/Dashboard/Dashboard";
import Chart from "../../../ui-components/Dashboard/Dashboard/Chart";

const DashboardPage = () => {
  return (
    <>
      <div className="flex-grow bg-gray-50">
        <Dashboard />
        <Chart />
      </div>
    </>
  );
};

export default DashboardPage;