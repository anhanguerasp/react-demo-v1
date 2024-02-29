const Btn = () => {
  const handleOnClick = () => {
    window.open(
      `https://wa.me/5511969510032/?text="Olá, gostaria de conversar com algum dos seus atendentes"`
    );
  };
  return (
    <div
      className="flex flex-wrap text-orange-400  mr-3 justify-center"
      style={{ alignItems: "center" }}
      onClick={handleOnClick}
    >
      <i className="fab fa-whatsapp text-gray-700 dark:text-orange-100 mr-2"></i>
      <p className="text-gray-700 dark:text-orange-100">WhatsApp</p>
    </div>
  );
};

export default Btn;
