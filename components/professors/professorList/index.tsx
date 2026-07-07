"use client";

import Slider from "react-slick";
import Professor from "../professor";
import {
    HIDDEN_DESKTOP_BLOCK,
    HIDDEN_MOBILE_BLOCK,
    PROFESSORS,
} from "@/constants";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 4, // Было 3, стало 4 карточки
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 3000, // Время показа слайда (мс)
    pauseOnHover: true, // Остановить при наведении (по умолчанию true)
};

const settingsMobile = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2, // Было 3, стало 4 карточки
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 10000, // Время показа слайда (мс)
    pauseOnHover: true, // Остановить при наведении (по умолчанию true)
};

const ProfessorList = () => {
    return (
        <section className="w-[90vw] md:w-auto">
            <div className={HIDDEN_MOBILE_BLOCK}>
                {" "}
                <Slider {...settings}>
                    {PROFESSORS.map((professor) => (
                        <Professor key={professor.name} professor={professor} />
                    ))}
                </Slider>
            </div>

            <div className={HIDDEN_DESKTOP_BLOCK}>
                {" "}
                <Slider {...settingsMobile}>
                    {PROFESSORS.map((professor) => (
                        <Professor key={professor.name} professor={professor} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProfessorList;
