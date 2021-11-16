import Banner from "@components/Banner";
import Layout from "@components/Layout";
import IconSVG from "@designs/IconSVG";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`container mx-auto not-first:mt-32`}
`;
const MainContainer = styled.main`
  ${tw``}
`;

const Home: FC = () => {
  return (
    <Layout>
      <MainContainer className="wrapper" id="main" data-click="close-menu">
        {/* <!-- Banner --> */}
        <Banner />
        {/* <!-- Banner --> */}

        {/* <!-- Directlinks --> */}
        <Container>
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-10">
            <div className="col-3">
              <picture className="cs-picture lazyload-block">
                <source
                  type="image/webp"
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 620w"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.webp 620w
                  "
                />
                <img
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 620w"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  className="w-full"
                  alt=""
                  data-sizes="auto"
                  width="366"
                  height="401"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-girl-906x800-aqgtf8s4j6884o8g48oo4ockc.jpg 620w
                  "
                />
              </picture>
              <h2 className="text-center mt-4 font-medium text-xl">
                SHOP GIRL
              </h2>
            </div>
            <div className="col-3">
              <picture className="cs-picture lazyload-block">
                <source
                  type="image/webp"
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 620w"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.webp 620w
                  "
                />
                <img
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 620w"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  className="w-full"
                  alt=""
                  data-sizes="auto"
                  width="366"
                  height="401"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-boy-906x800-7692x1k1z94wwokkgw4c44g4w.jpg 620w
                  "
                />
              </picture>
              <h2 className="text-center mt-4 font-medium text-xl">SHOP BOY</h2>
            </div>
            <div className="col-3">
              <picture className="cs-picture lazyload-block">
                <source
                  type="image/webp"
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 620w"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.webp 620w
                  "
                />
                <img
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 620w"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  className="w-full"
                  alt=""
                  data-sizes="auto"
                  width="366"
                  height="401"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-baby-906x800-6w612msk23k0o84gkggssosk8.jpg 620w
                  "
                />
              </picture>
              <h2 className="text-center mt-4 font-medium text-xl">
                SHOP BABY
              </h2>
            </div>
            <div className="col-3">
              <picture className="cs-picture lazyload-block">
                <source
                  type="image/webp"
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 620w"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.webp 620w
                  "
                />
                <img
                  data-srcset="https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 366w, https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 732w, https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 310w, https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 620w"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  className="w-full"
                  alt=""
                  data-sizes="auto"
                  width="366"
                  height="401"
                  sizes="366px"
                  srcSet="
                    https://cdn.childrensalon.com/media/cms/cache/366x366/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 366w,
                    https://cdn.childrensalon.com/media/cms/cache/732x732/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 732w,
                    https://cdn.childrensalon.com/media/cms/cache/310x310/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 310w,
                    https://cdn.childrensalon.com/media/cms/cache/620x620/s/h/shop-shoes-906x800-103o80uudaa8ckcgsgsoskosc.jpg 620w
                  "
                />
              </picture>
              <h2 className="text-center mt-4 font-medium text-xl">
                SHOP SHOES
              </h2>
            </div>
          </div>
        </Container>
        {/* <!--  --> */}
        <Container>
          <a
            href="https://www.childrensalon.com/snow-shop"
            className="relative w-full h-full block"
          >
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
          </a>
        </Container>
        <Container>
          <ul className="slider-list grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-20 lg:px-20 px-20">
            <li className="slider-item">
              <a
                href="https://www.childrensalon.com/molo-boys-grey-leopard-snowsuit-389326.html"
                data-event-action="W2 - Feature Products"
                data-event-label="389326"
              >
                <div className="image">
                  <img
                    className="lazyloaded w-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-srcset="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x, https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x"
                    alt=""
                    srcSet="
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x,
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x
                  "
                  />
                </div>
                <div className="name text-center mt-4 text-xl">
                  <span>Boys Grey Leopard Snowsuit</span>
                </div>
                <div className="mt-4 text-center text-xl font-bold">
                  <span className="regular-price">
                    <span className="price"> £209.00 </span>
                  </span>
                </div>
              </a>
            </li>
            <li className="slider-item">
              <a
                href="https://www.childrensalon.com/molo-boys-grey-leopard-snowsuit-389326.html"
                data-event-action="W2 - Feature Products"
                data-event-label="389326"
              >
                <div className="image">
                  <img
                    className="lazyloaded w-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-srcset="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x, https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x"
                    alt=""
                    srcSet="
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x,
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x
                  "
                  />
                </div>
                <div className="name text-center mt-4 text-xl">
                  <span>Boys Grey Leopard Snowsuit</span>
                </div>
                <div className="mt-4 text-center text-xl font-bold">
                  <span className="regular-price">
                    <span className="price"> £209.00 </span>
                  </span>
                </div>
              </a>
            </li>
            <li className="slider-item">
              <a
                href="https://www.childrensalon.com/molo-boys-grey-leopard-snowsuit-389326.html"
                data-event-action="W2 - Feature Products"
                data-event-label="389326"
              >
                <div className="image">
                  <img
                    className="lazyloaded w-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-srcset="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x, https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x"
                    alt=""
                    srcSet="
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x,
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x
                  "
                  />
                </div>
                <div className="name text-center mt-4 text-xl">
                  <span>Boys Grey Leopard Snowsuit</span>
                </div>
                <div className="mt-4 text-center text-xl font-bold">
                  <span className="regular-price">
                    <span className="price"> £209.00 </span>
                  </span>
                </div>
              </a>
            </li>
            <li className="slider-item">
              <a
                href="https://www.childrensalon.com/molo-boys-grey-leopard-snowsuit-389326.html"
                data-event-action="W2 - Feature Products"
                data-event-label="389326"
              >
                <div className="image">
                  <img
                    className="lazyloaded w-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-srcset="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x, https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x"
                    alt=""
                    srcSet="
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 1x,
                    https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-boys-grey-leopard-snowsuit-389326-2514fe29ae8ecf2c93548f924286a90a2180cd3f.jpg 2x
                  "
                  />
                </div>
                <div className="name text-center mt-4 text-xl">
                  <span>Boys Grey Leopard Snowsuit</span>
                </div>
                <div className="mt-4 text-center text-xl font-bold">
                  <span className="regular-price">
                    <span className="price"> £209.00 </span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </Container>
        <Container>
          <div className="mb-10">
            <IconSVG
              className="mx-auto h-16"
              iconHref="/icon.svg#svgs-sticker--stars"
            />
          </div>
          <h2 className="text-center lp-title text-3xl font-bold mb-16">
            We love hearing from you...
          </h2>
          <div className="grid md:grid-cols-1 grid-cols-3 md:gap-10 lg:gap-20 xl:gap-40 gap-80 md:px-20">
            <div className="text-center h-full flex flex-col">
              <div className="copy font-light text-base flex-grow">
                <p>
                  “I just received the package thank you so much for tacking
                  time out to reach out to me. And for the candy in the pockage.
                  Your service is beyond my expectations. Thanks for your
                  service.&nbsp;&nbsp;”
                </p>
              </div>
              <div className="box-content flex-shrink-0">
                <div className="name uppercase font-medium mt-4 text-xl ">
                  Tricia
                </div>
                <div className="text-base">United States</div>
              </div>
            </div>
            <div className="text-center h-full flex flex-col">
              <div className="copy font-light text-base flex-grow">
                <p>
                  “I was impressed with your customer service. I recently
                  ordered on Sunday and received my order the next day! Super
                  fast and the haribos were a nice touch.”
                </p>
              </div>
              <div className="box-content flex-shrink-0">
                <div className="name uppercase font-medium mt-4 text-xl ">
                  Stacey
                </div>
                <div className="text-base">United Kingdom</div>
              </div>
            </div>
            <div className="text-center h-full flex flex-col">
              <div className="copy font-light text-base flex-grow">
                <p>
                  “Thank you very much and thanks to your great team of
                  employees, one of the best online shops with communication
                  between customers and employees.&nbsp;”
                </p>
              </div>
              <div className="box-content flex-shrink-0">
                <div className="name uppercase font-medium mt-4 text-xl ">
                  Omar
                </div>
                <div className="text-base">United Arab Emirates</div>
              </div>
            </div>
          </div>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default Home;
