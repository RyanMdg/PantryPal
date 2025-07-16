import { Routes, Route } from "react-router-dom";
import CheckNewVisitor from "../pages/EntryPoint/CheckNewVisitor.jsx";
import Login from "../pages/EntryPoint/login/LoginPage.jsx";
import SignUp from "../pages/signUp/signUp.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Stocks from "../pages/stocks/Stocks.jsx";
import Cookwithme from "../pages/cook-with-me/CookWithMe.jsx";
import Account from "../pages/account/Acount.jsx";
import BudgetTracking from "../pages/budget-tracking/BudgetTracking.jsx";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase.js";
import { useEffect } from "react";
const AppRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isValidUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data.session) {
        console.log("user is login");
      } else {
        console.log(error);
        navigate("/login");
      }
    };

    isValidUser();
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<CheckNewVisitor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Inventory" element={<Stocks />} />
        <Route path="/CookWithMe" element={<Cookwithme />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/BudgetTracking" element={<BudgetTracking />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
