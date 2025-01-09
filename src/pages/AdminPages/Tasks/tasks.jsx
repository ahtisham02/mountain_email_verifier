import React from "react";
import Tasks from "../../../ui-components/Dashboard/Tasks/Tasks";

const TasksPage = () => {
  return (
    <>
      <div className="flex-grow bg-gray-50">
        <Tasks />
      </div>
    </>
  );
};

export default TasksPage;