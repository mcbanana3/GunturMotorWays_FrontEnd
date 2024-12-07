import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    const getBike = async () => {
      try {
        const res = await axios.get(
          "https://mswd-2300030049-y23-backend.onrender.com/bike"
        );

        const data = res.data.filter(
          (data) => data.discountApplicable === true
        );
        console.log(data);
        setBike(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBike();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">
            Currently Available{" "}
            <span className="text-semibold text-red-800 text-3xl">
              Offers!!!
            </span>
          </h1>
          <p>These are the discounts currently available on the Stock </p>
        </div>

        <div>
          <Slider {...settings}>
            {bike.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
