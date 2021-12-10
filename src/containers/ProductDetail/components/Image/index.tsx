import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import InnerImageZoom from "react-inner-image-zoom";

const ImageContainer = styled.div`
  ${tw`sm:gap-10 lg:gap-20 xl:gap-2 gap-10 flex items-center`}
`;
const ImageMainBox = styled.div`
  ${tw`flex-grow max-h-[500px] max-w-[500px] mx-auto`}

  & figure {
    cursor: zoom;
  }
`;

const ListImageBox = styled.div`
  ${tw`w-[100px] lg:w-[90px] md:w-[80px] flex-shrink-0 `}
`;

const ListImage = styled.ul`
  ${tw`grid gap-5`}
`;

const ImageItem = styled.li<{ isActive?: boolean }>`
  ${tw`shadow`}
  ${({ isActive }) => isActive && tw`border border-black`};
`;

interface IImage {
  images: string[];
  imageCover: string[];
  name?: string;
}

const Image: FC<IImage> = ({ images, imageCover, name = "" }) => {
  const [arrImages, setArrImages] = useState<
    Array<{ id: number; urlSmall: string; urlBig: string }>
  >([]);

  const [selected, setSelected] =
    useState<{ id: number; urlSmall: string; urlBig: string }>();

  useEffect(() => {
    let imagesNew = images.map((value, index) => ({
      id: index,
      urlSmall: imageCover[index] ? imageCover[index] : value,
      urlBig: value ? value : imageCover[index],
    }));
    setSelected(imagesNew[0]);
    setArrImages(imagesNew);
  }, [images, imageCover]);

  const handeleSelect = (value: {
    id: number;
    urlSmall: string;
    urlBig: string;
  }) => {
    setSelected(value);
  };

  return (
    <ImageContainer>
      <ListImageBox>
        <ListImage>
          {arrImages &&
            arrImages.map((value) => (
              <ImageItem
                onClick={() => handeleSelect(value)}
                isActive={value.id === selected?.id}
                key={value.id}
              >
                <img alt={name + value.id} src={value.urlSmall} />
              </ImageItem>
            ))}
        </ListImage>
      </ListImageBox>
      <ImageMainBox>
        <InnerImageZoom
          className="shadow"
          src={selected?.urlSmall || ""}
          zoomSrc={selected?.urlBig}
          alt={name}
        />
      </ImageMainBox>
    </ImageContainer>
  );
};

export default Image;
