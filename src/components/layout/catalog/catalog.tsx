import { useNavigate } from "react-router-dom";
import "./catalog-sec.scss";
import { useEffect } from "react";

export const Catalog = () => {
  const navigte = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigte("../cursos");
  };

  return (
    <section className="catalogo">
      <div className="botoes-catalogo">
        <a onClick={() => handleNavigate()}>
          <img src="/img/catalogos 1.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            /*window.open(
              "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
              "_blank"
            )*/
            handleNavigate()
          }
        >
          <img src="/img/catalogos 2.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            /*window.open(
                "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
                "_blank"
              )*/
            handleNavigate()
          }
        >
          <img src="/img/novo-catalogo-3.png" alt="catalogo" />
        </a>
      </div>
      <div className="botoes-catalogo-mobile">
        <a onClick={() => handleNavigate()}>
          <img src="/img/Catalogos mobile 1.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            /*window.open(
                "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
                "_blank"
              )*/
            handleNavigate()
          }
        >
          <img src="/img/Catalogos mobile 2.png" alt="catalogo" />
        </a>
        <a
          onClick={() =>
            /*window.open(
            "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
            "_blank"
          )*/
            handleNavigate()
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

export const PosCatalog = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("../cursos");
  };

  return (
    <section className="catalogo">
      <div className="botoes-catalogo">
        <a onClick={() => handleNavigate()}>
          <img src="/img/catalogo-p.png" alt="catalogo" />
        </a>
      </div>
      <div className="botoes-catalogo-mobile">
        <a onClick={() => handleNavigate()}>
          <img src="/img/catalogo-p-mobile.png" alt="catalogo" />
        </a>
      </div>
    </section>
  );
};
