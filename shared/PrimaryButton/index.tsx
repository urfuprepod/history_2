"use client";

import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type Props = {
    onClick?: () => void;
    className?: string;
};

const PrimaryButton: FC<PropsWithChildren<Props>> = (props) => {
    const { onClick, children, className } = props;

    return (
        <button
            className={clsx(
                "w-full px-3 py-2 cursor-pointer font-semibold rounded-lg border-transparent text-[#467be3] bg-[#dce8fa] transition duration-200 hover:text-[#467be3] hover:bg-[#c6ddfa]",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
