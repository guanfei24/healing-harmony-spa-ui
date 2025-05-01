import React, { use } from "react";
import Goal from "./Goal";
import { useSelector } from "react-redux";

export default function GoalList() {
  const goals = useSelector((state) => state.goals);
  console.log(goals);

  return (
    <div className="list-style">
      <h3>Goal List</h3>
      {goals.map((goal) => {
        return <Goal goal={goal} />;
      })}
    </div>
  );
}
