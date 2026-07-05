import { Card } from "@/shared";
import { Icons } from "@/shared/Icons";
import { type FC } from "react";

type Props = {
    icon: keyof typeof Icons;
    title: string;
};

const DisciplineCard: FC<Props> = (props) => {
    const { icon, title } = props;
    const Component = Icons[icon];

    return (
        <Card className="gap-6 border border-border">
            <div className="flex flex-col gap-3">
                <div className="rounded-[50%] bg-secondary flex justify-center items-center w-[48px] h-[48px]">
                    <Component size={24} color="#4361ee" />
                </div>

                <span className="text-strong">{title}</span>
            </div>
        </Card>
    );
};

export default DisciplineCard;
