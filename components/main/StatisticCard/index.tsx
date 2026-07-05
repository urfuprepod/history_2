import { Card } from "@/shared";
import { Icons } from "@/shared/Icons";
import { type FC } from "react";

type Props = {
    icon: keyof typeof Icons;
    title: string;
    description: string;
};

const StatisticCard: FC<Props> = (props) => {
    const { icon, title, description } = props;
    const Icon = Icons[icon];

    return (
        <Card className="gap-5 mr-2 md:mr-0">
            <Icon size={32} color="#4361ee" />

            <h2 className="text-sub-heading text-primary">{title}</h2>

            <span className="text-paragraph">{description}</span>
        </Card>
    );
};

export default StatisticCard;
