import { Badge } from "@/shared";
import LearningModule from "../LearningModule";
import { MODULES } from "./constants";

const Learning = () => {
    return (
        <section className="flex flex-col gap-6 bg-white m-0 p-4 rounded-md ">
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
