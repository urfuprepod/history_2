import { Card } from "@/shared";
import { Icons } from "@/shared/Icons";
import { type FC } from "react";
import { Discipline } from "../../Learning/types";
import DisciplineModal from "../DisciplineModal";

type Props = Discipline;

const DisciplineCard: FC<Props> = (props) => {
    const { icon, title, content } = props;
    const Component = Icons[icon];

    return (
        <Card className="gap-6 border border-border relative">
            <div className="flex flex-col gap-3">
                <div className="rounded-[50%] bg-secondary flex justify-center items-center w-[48px] h-[48px]">
                    <Component size={24} color="#4361ee" />
                </div>

                <span className="text-strong">{title}</span>
                {content && (
                    <DisciplineModal discipline={{ title, icon, content }} />
                )}
            </div>
        </Card>
    );
};

export default DisciplineCard;
