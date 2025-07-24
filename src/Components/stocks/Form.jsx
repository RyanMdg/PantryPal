import { useState } from "react";

const Form = ({ cancelModal, NewInventory, onClose, onSum }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const sumbitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      price: Number(price),
      quantity: quantity,
    };
    NewInventory(data);
    onClose();
    onSum(Number(price));
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <form
        action=""
        className=" flex flex-col gap-2 px-5 py-6"
        onSubmit={sumbitHandler}
      >
        <div>
          <label htmlFor="name" className=" text-gray-500 text-sm">
            Product Name
          </label>
          <input
            className=" w-full rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="text"
            onChange={nameHandler}
            name="name"
            required
            id="name"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="price" className=" text-gray-500 text-sm">
            Price
          </label>
          <input
            className=" w-full rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="number"
            onChange={priceHandler}
            name="price"
            required
            id="price"
          />
        </div>
        <div>
          <label htmlFor="quantity" className=" text-gray-500 text-sm">
            Quantity
          </label>
          <input
            className=" w-full rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="number"
            required
            onChange={quantityHandler}
            name="quantity"
            id="quantity"
          />
        </div>
        <div className=" flex gap-5 justify-center mx-5 my-3">
          <button
            onClick={cancelModal}
            type="button"
            className=" px-5 py-1 bg-[#151414] rounded-3xl text-sm text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" px-5 py-1  bg-green-500 rounded-3xl text-sm text-white"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
