import { Card } from "@/shared";
import { Icons } from "@/shared/Icons";
import { type FC } from "react";
import { Discipline } from "../../Learning/types";
import DisciplineMore from "../DisciplineMore";
import DisciplineSemesters from "../DisciplineSemesters";

type Props = Discipline;

const DisciplineCard: FC<Props> = (props) => {
    const { icon, title, content, contents } = props;
    const Component = Icons[icon];

    return (
        <Card className="gap-6 border border-border relative">
            {contents && <DisciplineSemesters contents={contents} />}

            <div className="flex flex-col gap-3 h-full">
                <div className="rounded-[50%] bg-secondary flex justify-center items-center w-[48px] h-[48px]">
                    <Component size={24} color="#4361ee" />
                </div>

                <span className="text-strong">{title}</span>
                {content && <DisciplineMore title={title} content={content} />}
            </div>
        </Card>
    );
};

export default DisciplineCard;
