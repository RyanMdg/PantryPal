const ButtonAdd = ({ showModal }) => {
  return (
    <>
      <div className=" flex justify-center my-5">
        <button
          onClick={showModal}
          type="button"
          className=" px-5 py-2 bg-[#151414] rounded-3xl text-white"
        >
          Add Stock
        </button>
      </div>
    </>
  );
};

export default ButtonAdd;
