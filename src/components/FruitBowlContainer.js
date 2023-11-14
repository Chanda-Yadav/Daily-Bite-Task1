import styles from "./FruitBowlContainer.module.css";

const FruitBowlContainer = () => {
  return (
    <div className={styles.component2meal10}>
      <div className={styles.component2meal10Child} />
      <div className={styles.basket}>
        <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      </div>
      <div className={styles.like}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.fruitBowl}>Fruit Bowl</div>
      <div className={styles.varietyRangingFrom}>
        Variety Ranging from Banana, Apple, Orange, Grapes, Watermelon, Papaya
        and many seasonal fruits
      </div>
      <img
        className={styles.mixedFruitBowl1}
        alt=""
        src="/mixed-fruit-bowl-1@2x.png"
      />
    </div>
  );
};

export default FruitBowlContainer;
