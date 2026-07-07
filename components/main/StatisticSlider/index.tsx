"use client";

import {
    HIDDEN_DESKTOP_BLOCK,
    HIDDEN_MOBILE_BLOCK,
    STATISTIC,
} from "@/constants";
import StatisticCard from "../StatisticCard";
import Slider from "react-slick";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    // Для мобильных
    swipe: true,
    touchMove: true,
    draggable: true,
    swipeToSlide: true,
};

const StatisticSlider = () => {
    return (
        <div className={HIDDEN_DESKTOP_BLOCK}>
            <Slider {...settings}>
                {STATISTIC.map((el, id) => (
                    <StatisticCard key={id} {...el} />
                ))}
            </Slider>
        </div>
    );
};

export default StatisticSlider;
