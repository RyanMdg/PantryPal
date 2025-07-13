const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60 z-10"></div>

      <main
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-white rounded-md shadow-lg z-20 overflow-hidden p-0"
      >
        {children}
      </main>
    </>
  );
};

export default Modal;
