import { FC, Fragment, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { getProductFeatures } from "@redux/slices/product";
import Item from "./components/Item";
import IconSVG from "@designs/IconSVG";
const HotProductContainer = styled.div`
  ${tw`mx-auto`}
  width: calc(100% - 80px);
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
  const dispatch = useAppDispatch();
  const { productFeatures } = useAppSelector((state) => state.productReducers);

  useEffect(() => {
    handleGetProductFeatureApi();
  }, []);

  const handleGetProductFeatureApi = () => {
    dispatch(getProductFeatures());
  };

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
    <HotProductContainer>
      <div className="mb-10">
        <IconSVG
          style={{ width: "220px", height: "50px", color: "#008132" }}
          className="mx-auto"
          iconHref="/icon.svg#svgs-sticker--stars"
        />
      </div>
      <h2 className="text-center lp-title text-3xl font-bold mb-16">
        Product Featured
      </h2>
      <Slider {...settings}>
        {productFeatures?.map((value) => (
          <Item data={value} key={value.id} />
        ))}
        {productFeatures?.length === 0 &&
          arraySkeleton.split("").map((value) => <Item key={value} />)}
      </Slider>
    </HotProductContainer>
  );
};

export default HotProduct;

const arraySkeleton = "12345";
