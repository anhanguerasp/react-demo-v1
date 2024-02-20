import { useState } from "react";
import { TabContainer } from "./tabs";
import { ButtonSelectTab } from "./tabsSelect";
import { tabsList } from "../../../utils/listas/tabList";

const Container = () => {
  const [type, setType] = useState("Graduação");

  console.log(type);

  return (
    <div className="md:flex p-5 dark:bg-gray-900">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <div>
          <h2 className="text-4xl font-bold text-gray-600">
            Explore nossos cursos
          </h2>
        </div>
        {tabsList.map((tab) => (
          <ButtonSelectTab
            type={tab.type}
            onClick={setType}
            img={tab.img}
            description={tab.typeDescription}
          />
        ))}
      </ul>
      {tabsList
        .filter((tab) => tab.type === type)
        .map((tab) => (
          <TabContainer {...tab} />
        ))}
    </div>
  );
};

export default Container;
