import React from "react";
import { useDispatch } from "react-redux";

export default function Goal({ goal }) {
  const { id, description, category, amount } = goal;
  const dispatch = useDispatch();
  const handleCompelet = (id) => {
    dispatch({ type: "REMOVE_GOAL", payload: { id } });
    alert("Goal achived successfully");
  };
  return (
    <div key={id} className="goal-item">
      <span>
        {description} - {category} ({amount})
      </span>
      <button onClick={() => handleCompelet(id)} className="item-button">
        Mark as achived
      </button>
    </div>
  );
}
