import styles from "./CategoryFilterForm.module.css";

const CategoryFilterForm = () => {
  return (
    <div className={styles.categories}>
      <img
        className={styles.mascotCategories1Icon}
        alt=""
        src="/mascotcategories-1@2x.png"
      />
      <b className={styles.categories1}>CATEGORIES</b>
      <div className={styles.component3Parent}>
        <div className={styles.component3}>
          <div className={styles.component3Child} />
          <div className={styles.veg}>Veg</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.component4}>
          <div className={styles.component3Child} />
          <div className={styles.nonVeg}>Non Veg</div>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
        <div className={styles.component5}>
          <div className={styles.component3Child} />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group2@2x.png"
          />
          <div className={styles.egg}>Egg</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterForm;
