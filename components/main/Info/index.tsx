import { Divider } from "@/shared";
import StatisticCard from "../StatisticCard";
import clsx from "clsx";
import { HIDDEN_MOBILE_FLEX, STATISTIC } from "@/constants";
import StatisticSlider from "../StatisticSlider";

const Info = () => {
    return (
        <div className="flex flex-col gap-2 mb-12">
            <h1 className="text-heading uppercase">Всемирная история</h1>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_5%_1fr] gap-2 md:place-items-center">
                <div className="flex flex-col gap-3">
                    <h2 className="text-sub-heading">
                        в глобальном и региональном измерении
                    </h2>
                    <p className="text-paragraph text-text-secondary">
                        Новая образовательная программа магистратуры, нацеленная
                        на изучение политических и социокультурных процессов во
                        всемирно-исторической ретроспективе и сосредоточена на
                        особенностях исторического прошлого отдельных макро- и
                        микрорегионов земного шара. В фокусе программы – мировая
                        история в контексте кросс-культурного взаимодействия
                        различных народов и цивилизаций
                    </p>
                </div>

                <Divider isVertical />

                <div className={clsx("gap-3", HIDDEN_MOBILE_FLEX)}>
                    {STATISTIC.map((el, id) => (
                        <StatisticCard key={id} {...el} />
                    ))}
                </div>

                <StatisticSlider />
            </div>
        </div>
    );
};

export default Info;
