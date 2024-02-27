import styles from "./carousel.module.scss";

interface props {
  img: string;
}
export const CarouselContainer = ({ img }: props) => {
  return (
    <div className={`${styles.carouselContainer} `}>
      <img src={img} className="" style={{ height: "100%" }} />
    </div>
  );
};

/*<div className={styles.carouselContainer}>
      <img src={img} />
      
    </div>
  */

/*

/*style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}*/
