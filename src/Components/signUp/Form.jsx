import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = ({
  OnEmailInput,
  OnPasswordInput,
  OnConfirmPassInput,
  OnSignUp,
  OnClickPassword,
  OnclickConfirm,
  setValue,
  setConfimValue,
  IsPassMatch,
}) => {
  return (
    <>
      <form onSubmit={OnSignUp} className=" w-full flex flex-col">
        <div className="flex flex-col w-full px-5 gap-2">
          {/* EMAIL SECTION */}
          <label htmlFor="email" className="text-[.8rem]">
            Email
          </label>
          <section className="relative">
            <MdOutlineEmail className="absolute top-2 left-5 text-gray-500" />
            <input
              type="text"
              id="email"
              onChange={OnEmailInput}
              name="email"
              className="bg-white w-full outline-0 focus:outline-green-500 focus:outline-1 border-1 border-[#9d9a9a6c] px-2 ps-10 h-8 text-gray-700 rounded-xl"
              placeholder="you@example.com"
            />
          </section>

          {/* PASSWORD SECTION */}
          <label htmlFor="password" className="text-[.8rem]">
            Password
          </label>
          <section className="relative">
            <TbLockPassword className="absolute top-2 left-5 text-gray-500" />
            <input
              type={setValue}
              name="password"
              onChange={OnPasswordInput}
              className="bg-white w-full outline-0 border-1 border-[#9d9a9a6c] px-2 ps-10 h-8 text-gray-700 rounded-xl"
              placeholder="••••••••"
            />
            {setValue === "password" ? (
              <FaRegEyeSlash
                onClick={OnClickPassword}
                className="absolute top-2 right-5 cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={OnClickPassword}
                className="absolute top-2 right-5 cursor-pointer"
              />
            )}
          </section>

          {/* Confirm Pass */}
          <label htmlFor="password" className="text-[.8rem]">
            Confirm Password
          </label>
          <section className="relative">
            <TbLockPassword className="absolute top-2 left-5 text-gray-500" />
            <input
              type={setConfimValue}
              name="password"
              onChange={OnConfirmPassInput}
              className="bg-white w-full outline-0 border-1 border-[#9d9a9a6c]  px-2 ps-10 h-8 text-gray-700 rounded-xl"
              placeholder="••••••••"
            />
            {!IsPassMatch && (
              <p
                aria-live="polite"
                className=" text-[.8rem] text-center bg-[#f3eeee] mt-5 text py-2 px-3"
              >
                password don't match!
              </p>
            )}

            {setConfimValue === "password" ? (
              <FaRegEyeSlash
                onClick={OnclickConfirm}
                className="absolute top-2 right-5 cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={OnclickConfirm}
                className="absolute top-2 right-5 cursor-pointer"
              />
            )}
          </section>
        </div>

        <div className=" flex justify-center mt-5">
          <button
            type="submit"
            className="w-[50%] bg-green-500 text-white py-2 rounded-xl mt-4 transition hover:bg-green-600"
          >
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
