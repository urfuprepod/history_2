import { FC } from "react";

type Props = {
    title: string;
    items: string[];
};

const LearningList: FC<Props> = (props) => {
    const { title, items } = props;

    return (
        <ul className="list-disc list-inside space-y-4">
            <strong className="text-strong text-primary inline-block mb-4">
                {title}
            </strong>
            {items.map((el, id) => (
                <li className="text-paragraph" key={id}>
                    {el}
                </li>
            ))}
        </ul>
    );
};

export default LearningList;
