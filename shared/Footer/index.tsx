import Card from "../Card";
import { Icons } from "../Icons";

const Footer = () => {
    return (
        <section className="relative overflow-hidden rounded-[48px] px-5 md:px-10 py-4 bg-gradient-to-b from-[#f6f8ff] to-[#eef2ff]">
            <div className="flex flex-col gap-4 md:gap-8">
                <div className="flex gap-6 flex-col md:flex-row items-center">
                    <h1 className="text-heading uppercase text-center md:text-left">
                        Наши <br />{" "}
                        <span className="text-primary">контакты</span>
                    </h1>

                    <div className="flex font-bold gap-1 text-primary">
                        #фондпотанина
                        #уральскийгуманитарныйинститут
                    </div>
                </div>

                <div className="flex gap-5 overflow-x-auto">
                    <Card className="gap-4 w-full md:w-auto shrink-0">
                        <div className="flex gap-4 items-center">
                            <Icons.MapPinHouse color="#4361ee" />
                            <div className="flex flex-col gap-1">
                                <p className="text-paragraph text-text-secondary">
                                    Адрес
                                </p>
                                <p className="text-small">
                                    Тургенева, 4. Ауд. 470
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.Phone color="#4361ee" />
                            <div className="flex flex-col gap-1">
                                <p className="text-paragraph text-text-secondary">
                                    Телефон
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="tel:+79991234567"
                                >
                                    +7 (343) 389-94-24
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.Mail color="#4361ee" />
                            <div className="flex flex-col gap-1">
                                <p className="text-paragraph text-text-secondary uppercase">
                                    Email
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:urfuhist@gmail.com"
                                >
                                    urfuhist@gmail.com
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card className="gap-4 w-full md:w-auto shrink-0">
                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <div className="flex flex-col">
                                <p className="text-paragraph">
                                    Бут Юлия Евгеньевна
                                </p>
                                <p className="text-small text-text-secondary">
                                    Координатор МП
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:j.e.komleva@urfu.ru"
                                >
                                    j.e.komleva@urfu.ru
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <div className="flex flex-col">
                                <p className="text-paragraph">
                                    Высокова Вероника Витальевна
                                </p>
                                <p className="text-small text-text-secondary">
                                    Научный руководитель
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:Veronika.Vysokova@urfu.ru"
                                >
                                    Veronika.Vysokova@urfu.ru
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <div className="flex flex-col">
                                <p className="text-paragraph">
                                    Чилова Екатерина Платоновна
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:ekaterina.chilova@urfu.ru"
                                >
                                    ekaterina.chilova@urfu.ru
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Footer;
