import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = Array.from(
  { length: 10 },
  (_, i) => `/images/reviews/review${i + 1}.png`
);

const ReviewSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-slider-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
            <Image
              src={review}
              alt={`Review ${index + 1}`}
              width={800}
              height={600}
              objectFit="contain"
              className="review-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
