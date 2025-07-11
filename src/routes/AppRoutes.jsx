import { Routes, Route } from "react-router-dom";
import CheckNewVisitor from "../pages/EntryPoint/CheckNewVisitor.jsx";
import Login from "../pages/EntryPoint/login/LoginPage.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Stocks from "../pages/stocks/Stocks.jsx";
import Cookwithme from "../pages/cook-with-me/CookWithMe.jsx";
import Account from "../pages/account/Acount.jsx";
import BudgetTracking from "../pages/budget-tracking/BudgetTracking.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CheckNewVisitor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Stocks" element={<Stocks />} />
        <Route path="/CookWithMe" element={<Cookwithme />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/BudgetTracking" element={<BudgetTracking />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
