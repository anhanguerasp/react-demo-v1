import "./style.scss";
export const Section = () => {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24 bg-gray-50 ">
      <div className="hidden lg:grid relative lg:grid-cols-2">
        <div className="pt-24">
          <div className="relative w-full h-full">
            <img
              src="/img/mes-con-1.jpg"
              className="imgab absolute inset-0  object-cover -mt-6 z-10"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="/img/mes-con-2.jpg"
            className="imgab absolute inset-0 object-cover -ml-12"
          />
        </div>
      </div>
      <div className="lg:px-32 lg:py-32 flex items-center justify-center">
        <div>
          <h2 className="text-5xl mb-6 font-bold uppercase italic text-orange-500">
            Mês do Consumidor
          </h2>
          <p className="text-lg">
            Não perca a promoção especial que a Anhanguera preparou para você
            neste mês do consumidor, com parcelas a partir de{" "}
            <span className="text-orange-500 font-bold">R$ 99,99 </span>para
            cursos de Pós-Graduação.
          </p>
          <a
            href="/cursos"
            className="text-white mt-8 inline-block rounded-full border-2
            bg-orange-500 text-lg px-8 py-3 hover:bg-white hover:text-black font-semibold"
          >
            Confira nossos cursos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
