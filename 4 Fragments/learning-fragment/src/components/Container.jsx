import styles from "./Container.module.css";
// Passing children to a component by using props.children:
const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
