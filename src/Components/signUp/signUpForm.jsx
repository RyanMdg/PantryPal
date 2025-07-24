import { useEffect, useState } from "react";
import Form from "./Form";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassInput, setConfirmPass] = useState("");
  const [value, setValue] = useState("password");
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [confimPassValue, setConfirmPassValue] = useState("password");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  const togglePasswIcon = () => {
    setValue((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleConfirmPasswIcon = () => {
    setConfirmPassValue((prev) => (prev === "password" ? "text" : "password"));
  };

  useEffect(() => {
    if (confirmPassInput != password) {
      setPasswordMatch(false);
    }
  }, [confirmPassInput, password]);
  return (
    <>
      <Form
        OnEmailInput={handleEmailInput}
        OnPasswordInput={handlePasswordInput}
        OnClickPassword={togglePasswIcon}
        OnclickConfirm={toggleConfirmPasswIcon}
        setConfimValue={confimPassValue}
        OnConfirmPassInput={handleConfirmPass}
        setValue={value}
        IsPassMatch={isPasswordMatch}
      />
    </>
  );
};

export default SignUpForm;
