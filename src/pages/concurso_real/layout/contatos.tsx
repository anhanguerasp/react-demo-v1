import React from "react";

interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  ref: HTMLDivElement;
}

type Ref = props;

export const divRef = { current: null };

export const ContactsCurso = React.forwardRef<HTMLDivElement, Ref>(
  ({ ...props }, ref) => {
    return (
      <section className="relative block py-24 lg:pt-0 bg-gray-900" ref={ref}>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Valter Teófilo
            </h5>
            <p className="mt-2 mb-4 text-gray-300 font-semibold">
              DIRETOR APOSENTADO PMSP
            </p>
            <div className="flex justify-center align-center content-center items-center">
              <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-phone text-md"></i>
              </div>
              <p className="mt-2 mb-4 text-gray-300 ml-2">(11) 98164-4181</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Edison Robson
            </h5>
            <p className="mt-2 mb-4 text-gray-300 font-semibold">
              PROFESSOR DE LEGISLAÇÃO - ADVOGADO
            </p>
            <div className="flex justify-center align-center content-center items-center">
              <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-phone text-md"></i>
              </div>
              <p className="mt-2 mb-4 text-gray-300 ml-2">(11) 99143-0410</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-user text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Tânea Maranesi
            </h5>
            <p className="mt-2 mb-4 text-gray-300 font-semibold">
              DIRETORA APOSENTADA PMSP
            </p>
            <div className="flex justify-center align-center content-center items-center">
              <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-phone text-md"></i>
              </div>
              <p className="mt-2 mb-4 text-gray-300 ml-2">(11) 97634-3854</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
