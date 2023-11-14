import styles from "./Component2Meal4.module.css";

const Component2Meal4 = () => {
  return (
    <div className={styles.component2meal4}>
      <div className={styles.component2meal4Child} />
      <div className={styles.basket}>
        <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      </div>
      <div className={styles.like}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.standardVegMeal}>Standard Veg Meal</div>
      <div className={styles.riceDal}>
        Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad
      </div>
      <img className={styles.meal81Icon} alt="" src="/meal8-1@2x.png" />
    </div>
  );
};

export default Component2Meal4;
