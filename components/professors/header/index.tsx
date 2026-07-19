import { HIDDEN_MOBILE_BLOCK } from "@/constants";
import SplashCursor from "../../SplashCursor";
import { Badge } from "@/shared";
import clsx from "clsx";

const ProfessrosHeader = () => {
    return (
        <section className="relative md:h-[700px] overflow-hidden">
            <div className="flex flex-col gap-3">
                <Badge>Преподаватели</Badge>
                <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-heading uppercase">
                            Преподаватели магистерской программы
                        </h1>
                        <p className="text-paragraph text-text-secondary">
                            Преподавательский состав магистерской программы
                            включает докторов и кандидатов наук, ведущих
                            научно-педагогических работников университета с
                            опытом международной исследовательской деятельности.
                            Преподаватели проходят научные стажировки, участвуют
                            в международных проектах и обеспечивают высокий
                            уровень академической подготовки магистрантов
                        </p>

                        <p className="text-paragraph text-text-secondary">
                            К реализации образовательной программы ежегодно
                            привлекаются представители работодателей и
                            специалисты профильных организаций. Это позволяет
                            сочетать фундаментальную подготовку с практическими
                            знаниями и учитывать современные требования
                            профессиональной среды
                        </p>

                        <p className="text-paragraph text-text-secondary">
                            Каждый преподаватель выступает научным руководителем
                            магистрантов, сопровождая выполнение
                            исследовательской работы и подготовку магистерской
                            диссертации на протяжении всего периода обучения.
                        </p>
                    </div>

                    <div
                        className={clsx(
                            HIDDEN_MOBILE_BLOCK,
                            "bg-[url('/hero.png')] bg-no-repeat bg-top bg-cover",
                        )}
                    />
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
