import { FC } from "react";

type Props = {
    title?: string;
    value: string;
};

const PointWithValue: FC<Props> = ({ title, value }) => {
    return (
        <div>
            {title && (
                <strong className="text-strong text-primary leading-[1.5] float-left mr-2 inline-block">
                    {title}:
                </strong>
            )}
            <span className="text-paragraph">{value}</span>
        </div>
    );
};

export default PointWithValue;
