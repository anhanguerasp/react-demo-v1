import { CatalogContainer } from "../../reuseable/catalogContainer/catalogContainer";
import styles from "./catalog.module.scss";
import "./catalog-sec.scss";

const catalogs = [
  "/img/catalogos 1.png",
  "/img/catalogos 2.png",
  "/img/catalogos 3.png",
];
export const Catalog = () => {
  return (
    <section className="catalogo">
      <div className="botoes-catalogo">
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1GgOZEOUEfdY0an6dT091yqR1RDFeio-4/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/catalogos 1.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/catalogos 2.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1SjpGTaSu7RvBDiMAAXoahBXsUDTd0zbP/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/catalogos 3.png" alt="catalogo" />
        </a>
      </div>
      <div className="botoes-catalogo-mobile">
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1GgOZEOUEfdY0an6dT091yqR1RDFeio-4/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/Catalogos mobile 1.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/Catalogos mobile 2.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1SjpGTaSu7RvBDiMAAXoahBXsUDTd0zbP/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src="/img/Catalogos mobile 3.png" alt="catalogo" />
        </a>
      </div>
    </section>
  );
};

{
  /*<div className={styles.catalog}>
      {catalogs.map((c) => (
        <CatalogContainer img={c} />
      ))}
      </div>*/
}
