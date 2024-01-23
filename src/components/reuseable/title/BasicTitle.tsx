import styles from "./basicTitle.module.scss";

interface props {
  content: string;
}
export const BasicTitle = ({ content }: props) => {
  return <h2 className={styles.basicTitle}>{content}</h2>;
};
