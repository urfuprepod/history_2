import { Badge } from "@/shared";
import { type FC } from "react";
import DisciplineCard from "./DisciplineCard";
import { Icons } from "@/shared/Icons";

type Props = {
    title: string;
    disciplines: {
        title: string;
        icon: keyof typeof Icons;
    }[];
};

const LearningModule: FC<Props> = (props) => {
    const { title, disciplines } = props;

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <h3 className="text-strong">{title}</h3>
                <Badge>Модулей: {disciplines.length}</Badge>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                {disciplines.map((discipline, id) => (
                    <DisciplineCard key={id} {...discipline} />
                ))}
            </div>
        </div>
    );
};

export default LearningModule;
