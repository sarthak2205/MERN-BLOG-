import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/* Importing all the photos here */
import { category } from "../assets/data/data";
import { Link } from "react-router-dom";



const Banner = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div 
      name="Home"
      className='flex w-full pt-10'
    >
      <div className="bg-white w-full py-5 shadow-xl">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {category.map((item) => (
            <div 
              key={item.id}
              className="flex justify-center items-center hover:scale-105 duration-300 cursor-pointer"
            > 
              <img src={item.source} alt="cover" className="h-60 w-full object-cover"/>
              <Link className="absolute z-10 text-white text-3xl font-extrabold" to={`/?cat=${item.title}`}>{item.title}</Link>
              <p className="absolute z-10 text-white mt-16 text-xl font-bold">{item.subtitle}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;