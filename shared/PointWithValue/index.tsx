import React, { FC } from "react";

type Props = {
    title: string;
    value: string;
};

const PointWithValue: FC<Props> = ({ title, value }) => {
    return (
        <div className="flex gap-2 items-center">
            <strong className="text-strong text-primary">{title}</strong>
            <span className="text-paragraph">{value}</span>
        </div>
    );
};

export default PointWithValue;
