import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "../../Pages/Books";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
// @ts-ignore
import Login from "../../Pages/Login";
import Orders from "../../Pages/Orders";
import Register from "../../Pages/Register";
import ResultComponent from "../../Pages/Result";
import StepsComponent from "../../Pages/Steps";
import Timeline from "../../Pages/Timeline";
import DescriptionsComponent from "../Commons/Description";
import TabComponent from "../../Pages/Tabs";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/description" element={<DescriptionsComponent />}></Route>
      <Route path="/tabs" element={<TabComponent />}></Route>
      <Route path="/steps" element={<StepsComponent />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/timeline" element={<Timeline />}></Route>
      <Route path="/result" element={<ResultComponent />}></Route>



    </Routes>
  );
}
export default AppRoutes;
