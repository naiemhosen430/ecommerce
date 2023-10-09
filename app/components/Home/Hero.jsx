"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const [slides, setSlides] = useState([
    {
      header: "Heading one",
      des: "Here will be description one",
      image: "",
    },
    {
      header: "Heading two",
      des: "Here will be description two",
      image: "",
    },
    {
      header: "Heading three",
      des: "Here will be description three",
      image: "",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 1000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-screen bg-slate-500">
            <div className="lg:flex lg:justify-end lg:p-20 p-10">
              <div className="lg:w-4/12 hidden lg:inline-block"></div>
              <div className="lg:w-6/12 w-12/12">
                <h1 className="lg:p-4 px-0 lg:text-8xl text-4xl">{slide.header}</h1>
                <p className="p-4">{slide.des}</p>
                <div className="flex justify-center items-center space-x-4">
                  <button className="text-center rounded-lg text-slate-800 font-bold py-2 px-4 hover:bg-slate-400 bg-white">
                    View All
                  </button>
                  <button className="text-center rounded-lg text-slate-800 font-bold py-2 px-4 hover:bg-slate-400">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
