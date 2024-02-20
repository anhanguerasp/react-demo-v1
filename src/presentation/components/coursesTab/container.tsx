import { useState } from "react";
import { tabsList } from "../../constants/tabs/tabsList";
import { TabContainer } from "./tabs";
import { ButtonSelectTab } from "./tabsSelect";

const Container = () => {
  const [type, setType] = useState("Graduação");

  console.log(type);

  return (
    <div className="md:flex p-5">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <div>
          <h1 className="text-4xl font-bold text-gray-600">
            Explore nossos cursos
          </h1>
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
