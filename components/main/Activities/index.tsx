import ActivityCard from "./ActivityCard";

const ACTIVITIES = [
    {
        icon: "BookMarked",
        title: "Сборники",
        preview: "На наших кафедрах издаются следующие журналы:",
        items: [
            'Античная древность и средние века ("АДСВ")',
            "Imagines mundi: Альманах исследований всеобщей истории XVI–XX вв.",
        ],
    },

    {
        icon: "MessagesSquare",
        title: "Конференции",
        preview:
            "Молодежные конференции, ориентированные на магистрантов нашей программы:",
        items: ["Clio Moderna", "Scholia Studiorum"],
    },

    {
        icon: "Mic",
        title: "Подкаст",
        preview:
            "В рамках нашей магистерской программы с осени 2022 года был запущен аудиоподкаст «Всеобщая Live», в котором преподаватели наших кафедр обсуждают интересные и важные события, явления и эпохи",
        items: [],
    },
];

const Activities = () => {
    return (
        <section className="flex flex-col gap-6 mt-12">
            <div className="flex justify-between gap-5 [&>*]:flex-[1_1_50%]">
                <h2 className="text-sub-heading">Наша деятельность</h2>

                <p className="text-paragraph">
                    Поддерживаем академические исследования и популяризируем
                    историческое знание через научные публикации, мероприятия и
                    просветительские проекты
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {ACTIVITIES.map((activity, id) => (
                    <ActivityCard key={id} {...activity} />
                ))}
            </div>
        </section>
    );
};

export default Activities;
