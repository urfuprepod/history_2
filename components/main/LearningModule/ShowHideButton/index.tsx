"use client";

import { Icons } from "@/shared/Icons";
import { useState } from "react";

const ShowHideButton = () => {
    const [isShowed, setIsShowed] = useState<boolean>(false);

    return (
        <>
            <input
                type="checkbox"
                onChange={() => setIsShowed((prev) => !prev)}
                id="list"
            />
            <label htmlFor="list">
                {isShowed ? (
                    <Icons.Eye size={16} color={"var(--color-primary-light)"} />
                ) : (
                    <Icons.EyeOff
                        size={16}
                        color={"var(--color-primary-light)"}
                    />
                )}
            </label>
        </>
    );
};

export default ShowHideButton;
