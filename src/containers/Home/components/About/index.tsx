import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AboutContainer = styled.div`
  ${tw`relative w-full h-full block`}
`;

interface IAbout {}

const About: FC<IAbout> = () => {
  return (
    <AboutContainer>
      <div
        className="img-container"
        data-note="Molo, Boy Hat NA / Snowsuit NA // Girl, Hat 389340 / Snowsuit 389326 / Mittens 389324"
      >
        <picture className="cs-picture lazyload-block">
          <source
            media="(min-width: 1367px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1536x494/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 1536w, https://cdn.childrensalon.com/media/cms/cache/3072x988/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 3072w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/1536x494/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 1536w,
                  https://cdn.childrensalon.com/media/cms/cache/3072x988/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 3072w
                "
          />
          <source
            media="(min-width: 1367px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1536x494/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 1536w, https://cdn.childrensalon.com/media/cms/cache/3072x988/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 3072w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/1536x494/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 1536w,
                  https://cdn.childrensalon.com/media/cms/cache/3072x988/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 3072w
                "
          />
          <source
            media="(min-width: 1024px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1302x403/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 1302w, https://cdn.childrensalon.com/media/cms/cache/2604x806/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 2604w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/1302x403/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 1302w,
                  https://cdn.childrensalon.com/media/cms/cache/2604x806/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.webp 2604w
                "
          />
          <source
            media="(min-width: 1024px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1302x403/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 1302w, https://cdn.childrensalon.com/media/cms/cache/2604x806/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 2604w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/1302x403/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 1302w,
                  https://cdn.childrensalon.com/media/cms/cache/2604x806/t/r/trend-desktop-1uv1m6cla2ysccosckso0cgg8.jpg 2604w
                "
          />
          <source
            media="(min-width: 768px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/960x390/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.webp 960w, https://cdn.childrensalon.com/media/cms/cache/1920x780/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.webp 1920w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/960x390/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.webp   960w,
                  https://cdn.childrensalon.com/media/cms/cache/1920x780/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.webp 1920w
                "
          />
          <source
            media="(min-width: 768px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/960x390/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.jpg 960w, https://cdn.childrensalon.com/media/cms/cache/1920x780/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.jpg 1920w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/960x390/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.jpg   960w,
                  https://cdn.childrensalon.com/media/cms/cache/1920x780/t/r/trend-tablet-32lbppf77zqc80gos0ccc8wos.jpg 1920w
                "
          />
          <source
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/750x800/t/r/trend-mobile-94swb3uk7f8ccgockc88gck0g.webp 750w"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/750x800/t/r/trend-mobile-94swb3uk7f8ccgockc88gck0g.webp 750w
                "
          />
          <img
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/750x800/t/r/trend-mobile-94swb3uk7f8ccgockc88gck0g.jpg 750w"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            className="lazyautosizes ls-is-cached lazyloaded"
            alt=""
            data-sizes="auto"
            width="1536"
            height="493"
            sizes="1536px"
            srcSet="
                  https://cdn.childrensalon.com/media/cms/cache/750x800/t/r/trend-mobile-94swb3uk7f8ccgockc88gck0g.jpg 750w
                "
          />
        </picture>
      </div>
      {/* <div className="absolute top-0 bottom-0 right-0 left-0">
              <div
                className="
                absolute
                top-1/2
                left-1/2
                transform
                translate-x-1/2
                -translate-y-1/2
                bg-white
                py-14
                px-16
                w-3/10
              "
              >
                <h2 className="text-4xl font-medium mb-4">The Snow Shop</h2>
                <div className="text-2xl font-light mb-4">
                  <p>
                    Explore all things warm, wintry and weatherproof. And when
                    the cold weather arrives, all that’s left to do is layer up
                    and have fun!
                  </p>
                </div>
                <span
                  className="
                  text-2xl
                  font-light
                  uppercase
                  pb-2
                  border-b-2 border-black
                "
                >
                  SHOP SNOW
                </span>
              </div>
            </div> */}
    </AboutContainer>
  );
};

export default About;
