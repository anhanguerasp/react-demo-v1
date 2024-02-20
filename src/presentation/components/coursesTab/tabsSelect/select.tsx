interface props {
  type: string;
  onClick: (e: any) => void;
  img?: string;
  description: string;
}

const Select = ({ type, onClick, img, description }: props) => {
  return (
    <li className="">
      <div
        /*className="flex  items-center px-20 py-4 text-white bg-orange-500 rounded-lg w-full dark:bg-blue-600 focus:outline-none focus:ring focus:ring-orange-700"*/
        className="inline-flex items-center px-17 py-3 text-white bg-orange-500 rounded-lg active w-full border-transparent focus:border-transparent focus:ring-0 flex px-20 py-4 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-600 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg cursor-pointer"
        aria-current="page"
        onClick={() => onClick(type)}
      >
        {/*<svg
          className="justify-start w-4 h-4 me-2 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
  </svg>*/}
        <img src={img} className="w-7 h-8" />
        <div className="flex flex-wrap ml-3">
          <p className="w-full text-xl font-bold">{type}</p>
          <p className="text-xs" style={{ width: "100%" }}>
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Select;
