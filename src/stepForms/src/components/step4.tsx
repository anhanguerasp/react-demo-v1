import checkedIcon from "../assets/images/icon-thank-you.svg";
export const Step4 = () => {
  return (
    <div className="text-center lg:flex lg:h-full lg:flex-col lg:justify-center">
      <img className="mx-auto mb-2 h-12 w-12" src={checkedIcon} alt="" />
      <div>
        <li
          className="mx-auto mb-2 h-12 w-12 fab fa-whatsapp text-orange-700"
          style={{ height: "24px", width: "26px" }}
        ></li>
      </div>

      <h3 className="text-2xl font-bold text-blue-900">Obrigado!</h3>
      <p className="mt-4 text-base text-gray-500">
        Obrigado pela sua Inscrição. Por favor, aguarde enquanto nós te
        redirecionamos para o nosso WhatsApp!
      </p>
    </div>
  );
};
