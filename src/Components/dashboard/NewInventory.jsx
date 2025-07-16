const NewInventory = ({ StocksName, StockPrice, StockQuantity }) => {
  return (
    <>
      <div className=" overflow-y-scroll shadow-sm my-5 mx-2">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50 transition duration-150">
              <td className="px-6 py-4 text-gray-800">{StocksName}</td>
              <td className="px-6 py-4 text-gray-800">{StockPrice}</td>
              <td className="px-6 py-4 text-gray-800">{StockQuantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewInventory;
