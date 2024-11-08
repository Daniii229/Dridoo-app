import React from "react";
import JobsHead from "../component/JobsHead";
import "../pages/Jobs.css";
import "../pages/Kanban.css";
const Kanban = () => {
  return (
    <>
      <div className="Todayjobcontent">
        <JobsHead title="Kanban" />
        <div className="KanbanTable">
          <table>
            <thead>
              <tr>
                <th>To Do</th>
                <th>Accepted</th>
                <th>In Progress</th>
                <th>Over Due</th>
                <th>Completed</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default Kanban;
