import { type FC, type PropsWithChildren } from "react";

const Badge: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="rounded-xl bg-secondary text-primary py-2 px-4 text-center leading-none w-fit">
            {children}
        </div>
    );
};

export default Badge;
