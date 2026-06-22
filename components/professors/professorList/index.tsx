"use client";

import Slider from "react-slick";
import Professor from "../professor";
import { PROFESSORS } from "@/constants";

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
    responsive: [
        {
            breakpoint: 768,
            settings: {
                rows: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                rows: 1,
            },
        },
    ],
};

const ProfessorList = () => {
    return (
        <section>
            <Slider {...settings}>
                {PROFESSORS.map((professor) => (
                    <Professor key={professor.name} professor={professor} />
                ))}
            </Slider>
        </section>
    );
};

export default ProfessorList;
