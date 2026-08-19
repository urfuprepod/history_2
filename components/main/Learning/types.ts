import { Icons } from "@/shared/Icons";

export type LearninModule = {
    title: string;
    disciplines: Discipline[];
};

export type Discipline = {
    title: string;
    icon: keyof typeof Icons;
    content?: React.ReactNode;
    contents?: { title: string; config: React.ReactNode }[];
};
