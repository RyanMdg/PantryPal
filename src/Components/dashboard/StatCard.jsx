import { IoMdAlert } from "react-icons/io";
import { SiCashapp } from "react-icons/si";
import NewInventory from "./NewInventory";

const StatCard = ({ total }) => {
  return (
    <>
      <main className=" flex justify-center gap-5 mx-2 mt-5">
        <div className=" bg-white rounded-md px-3 py-5 w-full  shadow-sm ">
          <IoMdAlert />
          <p className=" text-[.8rem]">Alert for low stocks</p>
        </div>
        <div className=" bg-white rounded-md px-3 py-5 w-full  shadow-sm">
          <SiCashapp />
          {total}
          <p className=" text-[.8rem] w-full">Total Inventory Value</p>
        </div>
      </main>
    </>
  );
};

export default StatCard;
