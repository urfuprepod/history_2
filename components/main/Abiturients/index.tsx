
'use client'

import { Icons } from "@/shared/Icons";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Abiturients = () => {
    return (
        <section className="flex flex-col gap-6 bg-white m-[-20px] p-4 rounded-md w-full">
            <h2 className="text-sub-heading">
                Информация для будущих выпускников
            </h2>

            <Accordion className="flex gap-4 [&>*]:flex-[1_1_33.3%] items-start">
                <AccordionItem
                    header={({ state }) => (
                        <div className="flex items-center justify-between w-full">
                            <span className="text-strong text-primary">
                                Дополнительные преимущества
                            </span>

                            <Icons.ChevronDown
                                className={`transition duration-300 ${state.isEnter ? "rotate-180" : ""}`}
                            />
                        </div>
                    )}
                    className=" overflow-hidden rounded-[32px] border border-border bg-white transition hover:-translate-y-[2px]"
                    buttonProps={{
                        className: `w-full px-8 py-6 flex items-center justify-between text-left  cursor-pointer`,
                    }}
                    contentProps={{
                        className: `px-8 pb-8 text-paragraph text-text-secondary`,
                    }}
                >
                    <ul className="text-small list-disc list-inside space-y-2">
                        <li>
                            участие в грантах и научно-исследовательских
                            проектах (УрФУ, РНФ, Благотворительный фонд В.
                            Потанина)
                        </li>

                        <li>
                            возможность получать повышенные стипендии за учебную
                            и научную деятельность
                        </li>

                        <li>
                            наличие собственных научных изданий и возможность
                            публикации в них результатов исследований
                            магистрантов
                        </li>

                        <li>участие в ежегодных молодежных конференциях</li>

                        <li>высокие шансы для поступления в аспирантуру</li>

                        <li>
                            возможность обучения и построения карьеры в столице
                            Урала, входящей в топ мировых городов, комфортных
                            для бизнеса
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    className=" overflow-hidden rounded-[32px] border border-border bg-white transition hover:-translate-y-[2px]"
                    buttonProps={{
                        className: `w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer`,
                    }}
                    contentProps={{
                        className: `px-8 pb-8 text-paragraph text-text-secondary`,
                    }}
                    header={({ state }) => (
                        <div className="flex items-center justify-between w-full">
                            <span className="text-strong text-primary">
                                Сферы профессиональной деятельности выпускника
                            </span>

                            <Icons.ChevronDown
                                className={`transition duration-300 ${state.isEnter ? "rotate-180" : ""}`}
                            />
                        </div>
                    )}
                >
                    <ul className="text-small list-disc list-inside space-y-2">
                        <li>
                            Анализ современных миграционных, этнополитических и
                            этноконфессиональных процессов
                        </li>

                        <li>
                            Экспертная деятельность в области сохранения и
                            актуализации историко-культурного наследия стран
                            Запада и Востока
                        </li>

                        <li>
                            Консалтинг органов государственной власти и местного
                            самоуправления в сфере этноконфессиональных
                            взаимоотношений
                        </li>

                        <li>
                            Научные организации, архивы, музеи, учреждения
                            культуры
                        </li>

                        <li>Образовательные организации высшего образования</li>

                        <li>
                            Издательские проекты по публикации иноязычных
                            исторических текстов
                        </li>

                        <li>
                            Мониторинг и менеджмент процессов межкультурной
                            коммуникации в условиях деглобализации современного
                            мира
                        </li>

                        <li>Туристическо-экскурсионные организации</li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    className=" overflow-hidden rounded-[32px] border border-border bg-white transition hover:-translate-y-[2px]"
                    buttonProps={{
                        className: `w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer`,
                    }}
                    contentProps={{
                        className: `px-8 pb-8 text-paragraph text-text-secondary`,
                    }}
                    header={({ state }) => (
                        <div className="flex items-center justify-between w-full">
                            <span className="text-strong text-primary">
                                Где могут работать наши выпускники
                            </span>

                            <Icons.ChevronDown
                                className={`transition duration-300 ${state.isEnter ? "rotate-180" : ""}`}
                            />
                        </div>
                    )}
                >
                    <ul className="text-small list-disc list-inside space-y-2">
                        <li>
                            научные работники исследовательских институтов и
                            лабораторий
                        </li>

                        <li>
                            комментаторы, переводчики и научные редакторы
                            исторических иноязычных текстов
                        </li>

                        <li>
                            сотрудники государственных органов в сфере
                            межкультурной коммуникации
                        </li>

                        <li>
                            организаторы музейно-выставочной деятельности по
                            актуальным направлениям кросс-культурного
                            взаимодействия
                        </li>

                        <li>
                            эксперты в области создания баз данных исторических
                            кейсов межкультурного диалога
                        </li>

                        <li>
                            преподаватели истории и общественно-политических
                            дисциплин средних и высших учебных заведениях
                        </li>

                        <li>
                            разработчики информационных ресурсов в сфере
                            межкультурной коммуникации
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
            <div className="flex gap-4 items-center justify-between"></div>
        </section>
    );
};

export default Abiturients;
