import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarChild} />
      <div className={styles.navbarOptions}>
        <b className={styles.home}>HOME</b>
        <b className={styles.about}>ABOUT</b>
        <b className={styles.about}>CONTACT US</b>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.navbarSymbols}>
        <div className={styles.search}>
          <div className={styles.search1}>
            <b className={styles.about}>Search...</b>
          </div>
          <div className={styles.object}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.like}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
        <div className={styles.basket}>
          <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
