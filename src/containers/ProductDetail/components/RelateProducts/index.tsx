import { FC, Fragment, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./components/Item";
import { IProduct } from "@redux/types/product";
const RelateProductsContainer = styled.div`
  ${tw`mx-auto`}
  width: calc(100% - 80px);

  & .slick-track {
    margin: 0;
  }
`;

const PrevArrow = styled.div`
  ${tw`h-6 w-6 absolute cursor-pointer`}
  border-top: 2px solid #333;
  border-right: 2px solid #333;

  top: 50%;
  transform: translate(0, -50%) rotate(-135deg);
  left: -20px;
`;

const NextArrow = styled.div`
  ${tw`h-6 w-6 absolute cursor-pointer`}
  border-top: 2px solid #333;
  border-right: 2px solid #333;

  top: 50%;
  transform: translate(0, -50%) rotate(45deg);
  right: -20px;
`;

interface IRelateProducts {
  data?: IProduct[];
}

const RelateProducts: FC<IRelateProducts> = ({ data }) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <RelateProductsContainer>
      {/* <ul className="slider-list grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-5 gap-20 lg:px-20 px-20"> */}
      <Slider {...settings}>
        {data?.map((value) => (
          <Item data={value} key={value.id} />
        ))}
        {data?.length === 0 &&
          arraySkeleton.split("").map((value) => <Item key={value} />)}
      </Slider>
      {/* </ul> */}
    </RelateProductsContainer>
  );
};

export default RelateProducts;

const arraySkeleton = "12345";

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return <PrevArrow onClick={onClick} />;
};

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return <NextArrow onClick={onClick} />;
};
