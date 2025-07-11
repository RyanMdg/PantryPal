import { useEffect, useState } from "react";
import NewUser from "./Welcome/WelcomeGate";
import Login from "../../pages/EntryPoint/login/LoginPage";

const isVisited = localStorage.getItem("hasVisited");

const CheckNewVisitor = () => {
  const [newUser, setNewUser] = useState(null); // null = loading

  useEffect(() => {
    if (!isVisited) {
      localStorage.setItem("hasVisited", "true");
      setNewUser(true);
    } else {
      setNewUser(false);
    }
  }, []);

  return newUser ? <NewUser /> : <Login />;
};

export default CheckNewVisitor;
