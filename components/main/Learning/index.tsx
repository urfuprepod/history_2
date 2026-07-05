import { Badge } from "@/shared";
import LearningModule from "../LearningModule";

const MODULES = [
    {
        title: "Обязательная часть",
        disciplines: [
            {
                title: "Теория и методология научного познания",
                icon: "BookOpen",
            },

            {
                title: "Современные методы анализа данных в социогуманитарных исследованиях",
                icon: "ChartColumnDecreasing",
            },

            {
                title: "Мультикультурализм и кросс-культурная коммуникация",
                icon: "Users",
            },

            {
                title: "Основы аналитической и экспертной деятельности в профессиональной области",
                icon: "FileChartLine",
            },

            {
                title: "Практика преподавания профильных дисциплин в высшей школе",
                icon: "GraduationCap",
            },
        ],
    },

    {
        title: "Вариативная часть",
        disciplines: [
            {
                title: "Технологии научной и проектной деятельности",
                icon: "Rocket",
            },

            {
                title: "Методология всемирной истории",
                icon: "Globe",
            },

            {
                title: "Всемирная история: проблемы и методы",
                icon: "NotepadText",
            },

            {
                title: "Всемирная история: основы практического исследования",
                icon: "FileChartLine",
            },

            {
                title: "Практика перевода: история и метод",
                icon: "SearchSlash",
            },

            {
                title: "Практики",
                icon: "BookA",
            },

            {
                title: "Факультативные дисциплины",
                icon: "Palette",
            },
        ],
    },

    {
        title: "По выбору студента",
        disciplines: [
            {
                title: "Мир в региональном аспекте",
                icon: "ChessBishop",
            },

            {
                title: "Конфликты и их преодоление во всемирной истории",
                icon: "Swords",
            },

            {
                title: "Мир и Россия: опыт исторического взаимодействия",
                icon: "Landmark",
            },

            {
                title: "Кросс-культурные коммуникации во всемирной истории",
                icon: "Theater",
            },

            {
                title: "Идеи и ценности цивилизации",
                icon: "Cpu",
            },

            {
                title: "Россия между Западом и Востоком",
                icon: "SignpostBig",
            },
        ],
    },
];

const Learning = () => {
    return (
        <section className="flex flex-col gap-6 bg-white m-0 md:m-[-20px] p-4 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between gap-5 [&>*]:flex-[1_1_50%]">
                <div className="flex flex-col gap-3 items-start">
                    <Badge>Учебные модули</Badge>
                    <h2 className="text-sub-heading">Содержание программы</h2>
                </div>

                <p className="text-paragraph">
                    Уникальность программы определяется освоением методики
                    исторического перевода с языка оригинала на русский язык.
                    Программа ориентирована на подготовку специалистов,
                    способных к эффективной международной профессиональной
                    деятельности в сфере межкультурного взаимодействия стран
                    Запада и Востока
                </p>
            </div>

            <div className="flex flex-col gap-5">
                {MODULES.map((md, id) => (
                    <LearningModule key={id} {...md} />
                ))}
            </div>
        </section>
    );
};

export default Learning;
