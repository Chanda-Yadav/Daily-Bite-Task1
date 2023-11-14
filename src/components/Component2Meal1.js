import styles from "./Component2Meal1.module.css";

const Component2Meal1 = () => {
  return (
    <div className={styles.component2meal1}>
      <div className={styles.component2meal1Child} />
      <div className={styles.basket}>
        <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      </div>
      <div className={styles.like}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.privilegeVegMeal}>Privilege Veg Meal</div>
      <div className={styles.riceDal}>
        Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad + Sweet + Curd +
        Papad
      </div>
      <img className={styles.meal101Icon} alt="" src="/meal10-1@2x.png" />
    </div>
  );
};

export default Component2Meal1;
