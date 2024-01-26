import { Carousel } from "react-responsive-carousel";
import styles from "./miniStyle.module.scss";
import { CarouselContainer } from "../../reuseable/carousel/carouselContainer";

export const mini = [
  "/img/BANNER LP ADM.png",
  "/img/BANNER LP ENFERMAGEM.png",
  "/img/BANNER LP ENGENHARIAS.png",
  "/img/BANNER LP MARKETING.png",
  "/img/BANNER LP PEDAGOGIA.png",
];

type props = {
  imageList: Array<string>;
};
export const MiniCarouselList = ({ imageList }: props) => {
  return (
    <div className={styles.carousel}>
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
