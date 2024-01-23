import { CatalogContainer } from "../../reuseable/catalogContainer/catalogContainer";
import styles from "./catalog.module.scss";

const catalogs = [
  "/img/catalogos 1.png",
  "/img/catalogos 2.png",
  "/img/catalogos 3.png",
];
export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      {catalogs.map((c) => (
        <CatalogContainer img={c} />
      ))}
    </div>
  );
};
