
import SplashCursor from "../../SplashCursor";
import { Badge } from "@/shared";

const ProfessrosHeader = () => {
    return (
        <section className="relative h-[700px] overflow-hidden">
            <div className="flex flex-col gap-3">
                <Badge>Преподаватели</Badge>
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-heading uppercase">
                            Наши преподаватели
                        </h1>
                        <p className="text-paragraph text-text-secondary">
                            Преподаватели магистерской программы — ведущие
                            научно-педагогические работники университета,
                            доктора и кандидаты наук с международным
                            академическим опытом. Преподавательский состав
                            проходил научные стажировки и реализовывал
                            исследовательские проекты в Австрии, Великобритании,
                            Германии, Китае, Франции, Сербии и США
                        </p>

                        <p className="text-paragraph text-text-secondary">
                            К образовательному процессу ежегодно привлекаются
                            представители работодателей и специалисты профильных
                            организаций, деятельность которых соответствует
                            направлению подготовки и современным требованиям
                            профессиональной среды
                        </p>

                        <p className="text-paragraph text-text-secondary">
                            Обучение в магистратуре строится на сочетании
                            фундаментальной академической подготовки и
                            практико-ориентированного подхода. Каждый
                            преподаватель программы осуществляет научное
                            руководство магистрантами и сопровождает подготовку
                            диссертационного исследования на всех этапах
                            обучения
                        </p>
                    </div>

                    <div className="bg-[url('/hero.png')] bg-no-repeat bg-top bg-cover" />
                </div>
            </div>

            <SplashCursor
                DENSITY_DISSIPATION={3.5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={3}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={false}
                COLOR="#4361ee"
            />
        </section>
    );
};

export default ProfessrosHeader;
