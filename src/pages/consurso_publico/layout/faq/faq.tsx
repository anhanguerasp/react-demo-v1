import Item from "./faqItem/item";
import "./styles.scss";
export const Faq = () => {
  return (
    <div className="w-full">
      <div
        className="flex bg-orange-500 justify-center content-center items-center py-6"
        style={{ flexDirection: "column" }}
      >
        <p className="h2 mb-4 text-gray-100 font-bold">FAQ</p>
        <h1 className=" mb-4 text-gray-100 lg:text-6xl md:text-5xl sm:text-4xl">
          Encontre as respostas que você procura
        </h1>
      </div>
      {/*<div className="wave h-full w-full ">
        <div className="faq-list relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border w-full mt-5">
          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <Item />
          </nav>
        </div>
  </div>*/}
      <div className="wave"></div>
      <div className="faq-list relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border w-full mt-5 mb-12">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <Item />
        </nav>
      </div>
    </div>
  );
};
