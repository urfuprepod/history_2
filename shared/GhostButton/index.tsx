"use client";

import clsx from "clsx";
import { FC } from "react";
import { ComponentPropsWithoutRef } from "react";

const GhostButton: FC<ComponentPropsWithoutRef<"button">> = (props) => {
    const { children, className, ...rest } = props;

    return (
        <button
            {...rest}
            className={clsx(
                "p-0 m-0 no-underline bg-transparent cursor-pointer",
                className,
            )}
        >
            {children}
        </button>
    );
};

export default GhostButton;
