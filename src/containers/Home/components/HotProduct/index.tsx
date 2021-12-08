import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotProductContainer = styled.div`
  ${tw``}
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

interface IHotProduct {}

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return <PrevArrow onClick={onClick} />;
};

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return <NextArrow onClick={onClick} />;
};

const HotProduct: FC<IHotProduct> = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    centerPadding: "300px",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const Item = () => (
    <div className="slider-item px-10">
      <div className="image">
        <img
          className="lazyloaded w-full"
          src="https://www.melijoe.com/images/246918/card_medium.jpg"
          alt=""
        />
      </div>
      <div className="name text-center mt-4 text-base font-semibold">
        <span>Boys Grey Leopard Snowsuit</span>
      </div>
      <div className="mt-2 text-center text-lg font-bold">
        <span className="regular-price">
          <span className="price"> $209.00 </span>
        </span>
      </div>
    </div>
  );

  return (
    <HotProductContainer>
      {/* <ul className="slider-list grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-5 gap-20 lg:px-20 px-20"> */}
      <Slider {...settings}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        <Item />
      </Slider>
      {/* </ul> */}
    </HotProductContainer>
  );
};

export default HotProduct;
