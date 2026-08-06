import { Badge } from "@/shared";
import { type FC } from "react";
import DisciplineCard from "./DisciplineCard";
import { Icons } from "@/shared/Icons";
import ShowHideButton from "./ShowHideButton";
import clsx from "clsx";
import styles from "./styles.module.css";
import { LearninModule } from "../Learning/types";

type Props = LearninModule;

const LearningModule: FC<Props> = (props) => {
    const { title, disciplines } = props;

    return (
        <div className="flex flex-col gap-4">
            <div className={clsx("flex gap-2 items-center", styles.header)}>
                <h3 className="text-strong">{title}</h3>
                <Badge className="hidden md:block">
                    Модулей: {disciplines.length}
                </Badge>
                <ShowHideButton />
            </div>

            <div
                className={clsx(
                    "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4",
                    styles.cards,
                )}
            >
                {disciplines.map((discipline, id) => (
                    <DisciplineCard key={id} {...discipline} />
                ))}
            </div>
        </div>
    );
};

export default LearningModule;
