import supabase from "../../utils/supabase";
const LoginAuth = async (email, password, navigate) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log("login authication failed", error);
  }

  if (data.session) {
    console.log("login authentication successful", data);
    navigate("/dashboard");
  } else {
    console.log("login failed", error);
    alert("not registered");
  }
};
export default LoginAuth;
