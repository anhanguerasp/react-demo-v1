export const ConcursoFormulary = () => {
  return (
    <form>
      <div className="relative w-full mb-3 mt-8">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="full-name"
        >
          Nome completo
        </label>
        <input
          type="text"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Nome Completo"
          style={{ transition: "all .15s ease" }}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Email"
          style={{ transition: "all .15s ease" }}
        />
      </div>

      <div className="flex flex-wrap relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          CPF
        </label>
        <input
          type="email"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="CPF"
          style={{ transition: "all .15s ease" }}
        />
      </div>

      <div className="flex flex-wrap relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Telefone
        </label>
        <input
          type="text"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Telefone"
          style={{ transition: "all .15s ease" }}
        />
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
          style={{ transition: "all .15s ease" }}
        >
          Inscreva-se
        </button>
      </div>
    </form>
  );
};
