import { FC } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Layout from "@components/Layout";

const ErrorContainer = styled.div`
  ${tw`relative`}
`;
const ImageBox = styled.div`
  ${tw`h-[70vh] overflow-hidden`}
  filter: brightness(0.5);
`;
const Message = styled.p`
  ${tw`absolute text-[50px] font-semibold z-10 text-white text-center`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
`;
interface IError {}

const Error: FC<IError> = () => {
  return (
    <Layout>
      <ErrorContainer>
        <Message>
          We couldn’t find what you <br />
          are looking for... try again
        </Message>
        <ImageBox>
          <picture className="cs-picture lazyload-block">
            <source
              media="(min-width: 768px)"
              type="image/webp"
              data-srcset="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01@1x.webp 1920w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01.webp 3840w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l@1x.webp 1366w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l.webp 2732w"
              srcSet="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01@1x.webp 1920w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01.webp 3840w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l@1x.webp 1366w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l.webp 2732w"
            />
            <source
              media="(min-width: 768px)"
              data-srcset="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01@1x.jpg 1920w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01.jpg 3840w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l@1x.jpg 1366w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l.jpg 2732w"
              srcSet="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01@1x.jpg 1920w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01.jpg 3840w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l@1x.jpg 1366w, https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-l.jpg 2732w"
            />
            <source
              type="image/webp"
              data-srcset="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-m.webp 750w"
              srcSet="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-m.webp 750w"
            />
            <img
              data-srcset="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-m.jpg 750w"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              className=" lazyloaded"
              alt=""
              srcSet="https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2021_aw/main/01-m.jpg 750w"
            />
          </picture>
        </ImageBox>
      </ErrorContainer>
    </Layout>
  );
};

export default Error;
