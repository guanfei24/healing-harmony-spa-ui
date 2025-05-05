import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter/counter";
import GoalForm from "./components/goal/GoalForm";
import GoalList from "./components/goal/GoalList";
import PaginationTest from "./components/reusebleComponents/index";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/management/Login";
import DashBoard from "./components/management/DashBoard";
import WithAuth from "./components/hoc/withAuth";

const ProtectedDashBoard = WithAuth(DashBoard);

function App() {
  return (
    <BrowserRouter>
      {/* <GoalForm />
      <GoalList /> */}
      {/* <PaginationTest /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedDashBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
