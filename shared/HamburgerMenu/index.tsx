"use client";

import clsx from "clsx";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LINKS } from "@/constants";

const HamburgerMenu = () => {
    const pathname = usePathname();

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

            <div className={styles.nav}>
                <nav className="flex flex-col items-center gap-4">
                    {LINKS.map(({ name, link }) => (
                        <Link
                            key={link}
                            href={link}
                            className={clsx("text-strong text-primary pbe-2", {
                                "border-b-3 border-b-primary":
                                    pathname === link,
                            })}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default HamburgerMenu;
