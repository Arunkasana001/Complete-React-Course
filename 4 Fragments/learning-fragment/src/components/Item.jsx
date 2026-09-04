import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  const handleBuyButton = (event) =>{
    console.log(event);
    
console.log(`${foodItems} being bought.`)
  }
  return (
    <>
      <li className={`${styles["ak-item"]} list-group-item`}>
        <span className={styles["ak-span"]}>{foodItems}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => handleBuyButton(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
