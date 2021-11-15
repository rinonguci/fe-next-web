import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ImageContainer = styled.div`
  ${tw`sm:gap-10 gap-20 mx-auto flex items-center`}
`;
const ImageMainBox = styled.div`
  ${tw``}
`;

const ListImageBox = styled.div`
  ${tw`w-[90px] lg:w-[70px] flex-shrink-0`}
`;

const ListImage = styled.ul`
  ${tw`grid gap-5`}
`;

const ImageItem = styled.li<{ isActive?: boolean }>`
  ${tw``}
  ${({ isActive }) => isActive && tw`border border-black`};
`;

interface IImage {}

const Image: FC<IImage> = () => {
  return (
    <ImageContainer>
      <ListImageBox>
        <ListImage>
          <ImageItem isActive={true}>
            <img
              alt="Foque - Boys Ivory &amp; Grey Shorts Set | Childrensalon"
              data-src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              className=" lazyloaded"
            />
          </ImageItem>
          <ImageItem>
            <img
              alt="Foque - Boys Ivory &amp; Grey Shorts Set | Childrensalon"
              data-src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              className=" lazyloaded"
            />
          </ImageItem>
          <ImageItem>
            <img
              alt="Foque - Boys Ivory &amp; Grey Shorts Set | Childrensalon"
              data-src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              className=" lazyloaded"
            />
          </ImageItem>
          <ImageItem>
            <img
              alt="Foque - Boys Ivory &amp; Grey Shorts Set | Childrensalon"
              data-src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              src="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
              className=" lazyloaded"
            />
          </ImageItem>
        </ListImage>
      </ListImageBox>
      <ImageMainBox>
        <img
          alt="Foque - Boys Ivory &amp; Grey Shorts Set | Childrensalon"
          data-src="https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
          src="https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/foque-boys-ivory-grey-shorts-set-399358-a3fd91f0e9d56d46da9e9b41c1b7c273319e6bec.jpg"
          className="j-zoom-image lazyloaded"
        />
      </ImageMainBox>
    </ImageContainer>
  );
};

export default Image;
