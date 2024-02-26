import { useState } from "react";

const desc = [
  {
    titulo: "desc 1",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat",
  },

  {
    titulo: "desc 1",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat",
  },

  {
    titulo: "desc 1",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat",
  },

  {
    titulo: "desc 1",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat",
  },
];
const Item = () => {
  const [desc1, setDesc1] = useState(false);

  return (
    <div>
      {desc.map((item) => (
        <div className="w-full">
          <div
            role="button"
            className="flex items-center w-1/2 p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold"
            key={item.titulo}
            //onClick={partner.handleShow}
          >
            {item.titulo}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
          <span
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              item.titulo ? "" : "hidden"
            }`}
          >
            {item.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Item;
