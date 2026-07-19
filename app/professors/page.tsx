import { ProfessorHeader, ProfessorList } from "@/components/professors";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Преподаватели магистерской программы",
    description:
        "Магистерская программа УрФУ «Всемирная история в глобальном и региональном измерении». Подготовка специалистов по мировой истории, историческому переводу и межкультурному взаимодействию",

    openGraph: {
        title: "Преподаватели магистерской программы",
        url: "http://worldhist-urfu.ru/professors",
        description: "Преподаватели магистратуры &quot;Всеобщая история&quot;",
        type: "website",
    },
};

const Professors = () => {
    return (
        <div className="flex flex-col gap-6">
            <ProfessorHeader />
            <ProfessorList />
        </div>
    );
};

export default Professors;
