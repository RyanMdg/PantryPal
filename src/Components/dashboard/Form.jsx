import { useState } from "react";

const Form = ({ cancelModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const sumbitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      price: price,
      quantity: quantity,
    };
    console.log(data);
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
            className=" rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="text"
            onChange={nameHandler}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="price" className=" text-gray-500 text-sm">
            Price
          </label>
          <input
            className=" rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="number"
            onChange={priceHandler}
            name="price"
            id="price"
          />
        </div>
        <div>
          <label htmlFor="quantity" className=" text-gray-500 text-sm">
            Quantity
          </label>
          <input
            className=" rounded-md outline-0 border text-sm p-1 text-gray-500 border-gray-400"
            type="number"
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
