import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter/counter";
import GoalForm from "./components/goal/GoalForm";
import GoalList from "./components/goal/GoalList";
import PaginationTest from "./components/reusebleComponents/index";

function App() {
  return (
    <>
      {/* <GoalForm />
      <GoalList /> */}
      <PaginationTest />
    </>
  );
}

export default App;
