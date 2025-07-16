import { useState } from "react";
import Nav from "../../Components/Navigation/NavBar";
import StatCard from "../../Components/dashboard/StatCard";
import ButtonAdd from "../../Components/dashboard/ButtonShowModal";
import Modal from "../../Components/dashboard/Modal";
import Form from "../../Components/dashboard/Form";
import NewInventory from "../../Components/dashboard/NewInventory";

const Stocks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [newStocks, setNewStocks] = useState([]);
  const [totalInventory, setTotalInventory] = useState(0);

  const ModalHandler = () => setIsVisible(true);
  const ModalCancelHandler = () => setIsVisible(false);

  const NewStocksHandler = (stockSData) => {
    setNewStocks((existingStocks) => {
      const updated = [stockSData, ...existingStocks];
      return updated;
    });
  };

  const addTotalValue = (value) => {
    setTotalInventory((existingValue) => existingValue + value);
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1 className="uppercase ps-5 pt-3 font-semibold">Inventory</h1>
        <StatCard total={totalInventory} />
        <section>
          {newStocks.map((item, index) => (
            <NewInventory
              key={index}
              StocksName={item.name}
              StockPrice={item.price}
              StockQuantity={item.quantity}
            />
          ))}
        </section>

        {isVisible && (
          <Modal>
            <Form
              cancelModal={ModalCancelHandler}
              NewInventory={NewStocksHandler}
              onClose={ModalCancelHandler}
              onSum={addTotalValue}
            />
          </Modal>
        )}

        <ButtonAdd showModal={ModalHandler} />
      </main>
    </>
  );
};

export default Stocks;
