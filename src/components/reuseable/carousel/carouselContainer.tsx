import styles from "./carousel.module.scss";

interface props {
  img: string;
}
export const CarouselContainer = ({ img }: props) => {
  return (
    <div className={styles.carouselContainer}>
      <img src={img} />
    </div>
  );
};

/*<div className={styles.carouselContainer}>
      <img src={img} />
      
    </div>
  */
