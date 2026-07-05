import { Card } from "@/shared";
import { Icons } from "@/shared/Icons";
import { type FC } from "react";

type Props = {
    icon: keyof typeof Icons;
    title: string;
    preview: string;
    items: string[];
};

const ActivityCard: FC<Props> = (props) => {
    const { icon, title, preview, items } = props;

    const Component = Icons[icon];

    return (
        <Card className="gap-5 cursor-pointer transition-all hover:-translate-y-[10px] relative overflow-hidden before:content-[''] before:block before:absolute before:w-[240px] before:h-[240px] before:right-[-30px] before:top-[-30px] before:bg-[url('/assets/blob.svg')] before:bg-no-repeat before:bg-contain hover:before:animate-rotating-cloud">
            <Component size={48} color="#4361ee" />

            <p className="text-strong">{title}</p>
            <span className="text-paragraph">{preview}</span>
            <ul className="text-small list-disc list-inside space-y-2">
                {items.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </Card>
    );
};

export default ActivityCard;
