"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          des: "Welcome to our online shopping paradise! Explore a world of fashion, beauty, and lifestyle products that cater to your unique style. Discover the latest trends, unbeatable deals, and an endless array of options. It's time to elevate your shopping experience.",
          header: "Shop the Latest Trends in Fashion and Lifestyl",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXinS-s6m4UvX6gCp3HfwWfoIM6SAwrXanQ&usqp=CAU",
        },
        {
          des: "Get ready for a tech-savvy shopping adventure! Dive into a sea of cutting-edge electronics and gadgets that redefine innovation. From smartphones to smart home devices, we've got it all. Shop with confidence and stay ahead of the tech curve.",
          header: "Discover Unbeatable Deals on Electronics and Gadgets",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xqvl02UvNUHOCgwhbaRIbp2StPIAzgS9eQ&usqp=CAU",
        },
        {
          des: "Transform your living spaces with our exquisite home and decor collection. Our handpicked range of furniture, decor, and essentials will turn your house into a dream home. It's time to create an environment that reflects your personal style and comfort.",
          header: "Upgrade Your Home with Top-Quality Furniture and Decor",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyv0Tkmb7dxppz9NmDvG8OIF49_oUwBGP_Q&usqp=CAU",
        },
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.goToNextSlide, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.slides.length,
    }));
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => (
            <div key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="lg:flex lg:justify-end lg:p-20 lg:pt-10 p-10"
              >
                <div className="lg:w-7/12 w-12/12">
                  <h1 className="lg:p-4 px-0 text-white font-bold lg:text-6xl text-4xl">
                    {slide.header}
                  </h1>
                  <p className="p-4 py-10 lg:block hidden text-slate-500">
                    {slide.des}
                  </p>
                  <div className="flex justify-center items-center space-x-4">
                    <button className="text-center rounded-lg text-slate-800 font-bold py-2 px-4 hover:bg-slate-400 bg-white">
                      View All
                    </button>
                    <button className="text-center rounded-lg text-slate-400 font-bold py-2 px-4 hover:bg-slate-400">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:w-5/12 hidden lg:inline-block"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
