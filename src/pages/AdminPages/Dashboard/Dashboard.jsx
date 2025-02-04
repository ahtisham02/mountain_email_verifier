import React, { useEffect } from "react";
import Dashboard from "../../../ui-components/Dashboard/Dashboard/Dashboard";
import Chart from "../../../ui-components/Dashboard/Dashboard/Chart";
import Intercom from '@intercom/messenger-js-sdk';
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const Fname = useSelector((state) => state?.auth?.userInfo?.first_name);
  const Name = useSelector((state) => state?.auth?.userInfo?.name);
  const email = useSelector((state) => state?.auth?.userInfo?.email);
  const id = useSelector((state) => state?.auth?.userInfo?.id);

  const user = {
    id: id,
    name: Fname || Name,
    email: email,
    createdAt: Math.floor(Date.now() / 1000),
  };

  useEffect(() => {
    Intercom({
      app_id: process.env.REACT_APP_INTERCOM_APP_ID,
      user_id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.createdAt,
      hide_default_launcher: false,
    });
  }, [user.id, user.name, user.email, user.createdAt]);

  return (
    <div className="flex-grow bg-gray-50">
      <Dashboard />
      <Chart />
    </div>
  );
};

export default DashboardPage;
