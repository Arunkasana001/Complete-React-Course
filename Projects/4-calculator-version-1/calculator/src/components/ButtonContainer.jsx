 import styles from "./button.module.css"
 
 const ButtonContainer = () =>{

  return(<>  <div className={styles.buttonContainer}>
        <button className={styles.button}>c</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>+</button>
        <button className={styles.button}>3</button>
      </div></>)
 }

 export default ButtonContainer;