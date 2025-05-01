import React, { useState } from "react";
import { useDispatch } from "react-redux";

const categories = [
  { name: "Strength", unit: "repetitions" },
  { name: "Cardio", unit: "minutes" },
];

export default function GoalForm() {
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);
  const { name, unit } = categories[index];
  const [unitValue, setUnitValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSelectChange = (e) => {
    console.log(index);

    setIndex(e.target.selectedIndex);
  };
  const handleUnitChange = (e) => {
    setUnitValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === "" || unitValue === "") {
      alert("Please fill in all fields");
      return;
    }
    const goal = {
      id: Math.floor(Math.random() * 1000),
      description,
      name,
      amount: unitValue + " " + unit,
    };
    dispatch({ type: "ADD_GOAL", payload: goal });
    setDescription("");
    setUnitValue("");
    alert("Goal added successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="form-style">
      <h3>Goal Form</h3>
      <div className="row">
        <span>fitness Goal</span>
        <input
          type="text"
          placeholder="type the goal"
          value={description}
          onChange={handleInputChange}
        />
      </div>

      <div className="row">
        <span>Category</span>
        <select value={name} onChange={handleSelectChange}>
          {categories.map((cat) => {
            return (
              <option value={cat.name} key={cat.name}>
                {cat.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="row">
        <span>{unit}</span>
        <input
          type="text"
          placeholder={`Enter ${unit}`}
          value={unitValue}
          onChange={handleUnitChange}
        />
      </div>
      <div className="row">
        <button type="submit"> Add Goal</button>
      </div>
    </form>
  );
}
