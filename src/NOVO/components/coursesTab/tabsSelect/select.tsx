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
