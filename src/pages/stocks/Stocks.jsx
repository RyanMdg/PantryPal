import Nav from "../../Components/Navigation/NavBar";
import StatCard from "../../Components/dashboard/StatCard";
import ButtonAdd from "../../Components/dashboard/ButtonShowModal";
import Modal from "../../Components/dashboard/Modal";
import Form from "../../Components/dashboard/Form";
import { useState } from "react";
const Stocks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ModalHandler = () => {
    setIsVisible(true);
  };
  const ModalCancelHandler = () => {
    setIsVisible(false);
  };
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1 className=" uppercase ps-5 pt-3 font-semibold">Inventory</h1>
        <StatCard />
        {isVisible ? (
          <Modal>
            <Form cancelModal={ModalCancelHandler} />
          </Modal>
        ) : null}

        <ButtonAdd showModal={ModalHandler} />
      </main>
    </>
  );
};

export default Stocks;
