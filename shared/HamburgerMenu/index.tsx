import clsx from "clsx";
import styles from "./style.module.css";

const HamburgerMenu = () => {
    return (
        <>
            <input
                id="toggle"
                className={clsx(styles.toggle)}
                type="checkbox"
            />

            <label htmlFor="toggle" className={styles.hamburger}>
                <div className={styles["top-bun"]} />
                <div className={styles["meat"]} />
                <div className={styles["bottom-bun"]} />
            </label>

            <nav className={styles.nav}>
                {/* {LINKS.map(({ title, link }) => (
                                    <Link key={link} url={link}>
                                        {title}
                                    </Link>
                                ))} */}
            </nav>
        </>
    );
};

export default HamburgerMenu;
