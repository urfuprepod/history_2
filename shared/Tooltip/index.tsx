"use client";

import { FC, useId, useRef } from "react";
import styles from "./styles.module.css";

type Props = {
    content: React.ReactNode;
    children: React.ReactNode;
};

const Tooltip: FC<Props> = ({ children, content }: Props) => {
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <span popoverTarget={id} className={styles.tooltip}>
                {children}
            </span>

            <div
                id={id}
                ref={ref}
                onMouseEnter={() => ref.current?.showPopover()}
                onMouseLeave={() => ref.current?.hidePopover()}
                popover="manual"
                role="tooltip"
            >
                {content}
            </div>
        </>
    );
};

export default Tooltip;
