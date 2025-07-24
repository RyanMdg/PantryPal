import SignUpForm from "../../Components/signUp/signUpForm";

const signUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" flex justify-center">
        <img className=" w-32" src="/Pantrypal.png" alt="Logo-img" />
      </header>
      <main className="flex flex-col flex-grow items-center py-7 bg-white border-t border-[#524e4e8e] shadow-2xl rounded-t-4xl ">
        <h1 className="font-bold text-[#38406b] text-[1.5rem]">Sign Up</h1>
        <span className=" pb-5 pt-3 text-[.7rem] italic font-light text-[#38406b]">
          Sign up to manage, track, and never run out again.
        </span>
        <SignUpForm />
        <footer className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </footer>
      </main>
    </div>
  );
};

export default signUp;
