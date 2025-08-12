import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.active}`}>Home</li>
            <li className={styles.navItem}>news</li>
            <li className={styles.navItem}>about</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
