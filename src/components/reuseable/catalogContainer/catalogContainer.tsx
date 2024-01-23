import styles from "./catalogContainer.module.scss";

interface props {
  img: string;
}
export const CatalogContainer = ({ img }: props) => {
  return (
    <div className={styles.catalogContainer}>
      <img src={img} />
    </div>
  );
};
