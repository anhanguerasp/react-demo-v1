import { CarouselContainer } from "../../reuseable/carousel/carouselContainer";
import styles from "./carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const imagesList = [
  "/img/dominosdescount.png",
  "/img/DOMINO`S 1.png",
  "/img/COMEÇE SUA FACUL POR APENAS 59.png",
  "/img/pos-graduacao-banner-preco.jpeg",

  "/img/BANNER DE CHAMADO PARA CURSOS TECNICOS.png",
  "/img/Banner LP Qualificação.png",
  "/img/ESTUDE FORMA FLEXIVEL_.png",
  "/img/BANNER LP DIREITO.png",
  "/img/BANNER LP PSICOLOGIA 2.png",
];

type props = {
  imageList: Array<string>;
};

export const CarouselList = ({ imageList }: props) => {
  return (
    <div className={`${styles.carousel}`}>
      <Carousel
        interval={4000}
        autoPlay={true}
        infiniteLoop={true}
        axis="horizontal"
        showThumbs={false}
      >
        {imageList.map((img) => (
          <CarouselContainer img={img} />
        ))}
      </Carousel>
    </div>
  );
};
