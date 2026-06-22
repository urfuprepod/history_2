import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

type Props = {
    className?: string;
};

const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "bg-white rounded-lg p-7 shadow-xs flex flex-col transition-all hover:shadow-lg",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Card;
