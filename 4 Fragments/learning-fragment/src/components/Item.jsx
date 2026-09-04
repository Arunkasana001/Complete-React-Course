import styles  from "./Item.module.css";

const Item = ({foodItems}) =>{
return (
  <>
  <li  className={ `${styles['ak-item']} list-group-item`} ><span className={styles['ak-span']} >{foodItems}</span>
  <button className={`${styles.button} btn btn-info`}>Buy</button>
  </li>
  </>  
)

}
export default Item; 