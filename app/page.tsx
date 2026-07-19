import { Abiturients, Activities, Info, Learning } from "@/components/main";
import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Всемирная история в глобальном и региональном измерениях",
//     description:
//         "Магистерская программа УрФУ Всемирная история в глобальном и региональном измерениях",
//     keywords: [
//         "магистерская программа",
//         "УрФУ",
//         "Всемирная история",
//         "Всемирная история в глобальном и региональном измерениях",
//     ],
//     openGraph: {
//         title: "Всемирная история",
//         url: "http://worldhist-urfu.ru",
//         description: "Магистерская программа исторического факультета УГИ УрФУ",
//     },
// };

export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <Info />
            <Learning />
            <Activities />
            <Abiturients />
        </div>
    );
}
