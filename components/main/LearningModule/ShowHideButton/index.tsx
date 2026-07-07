"use client";

import { Icons } from "@/shared/Icons";
import { useId, useState } from "react";
import styles from '../styles.module.css'
import clsx from "clsx";

const ShowHideButton = () => {
    const [isShowed, setIsShowed] = useState<boolean>(false);
    const id = useId();

    return (
        <>
            <input
                type="checkbox"
                className={clsx("hidden", styles.list)}
                onChange={() => setIsShowed((prev) => !prev)}
                id={id}
            />
            <label htmlFor={id}>
                {isShowed ? (
                    <Icons.EyeOff size={24} color={"black"} />
                ) : (
                    <Icons.Eye size={24} color={"black"} />
                )}
            </label>
        </>
    );
};

export default ShowHideButton;
