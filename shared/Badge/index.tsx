import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

const Badge: FC<PropsWithChildren<{ className?: string }>> = ({
    children,
    className,
}) => {
    return (
        <div className={clsx("rounded-xl bg-secondary text-primary py-2 px-4 text-center leading-none w-fit", className)}>
            {children}
        </div>
    );
};

export default Badge;
