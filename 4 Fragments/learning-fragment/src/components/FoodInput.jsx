import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
  // Handling Events:
  
  return  (
    <input
      type="text"
      placeholder="Enter Food Item here.."
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
    
  );
  
};


export default FoodInput;
