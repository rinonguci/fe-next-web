import Link from "@designs/Link";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const DirectlinksContainer = styled.div`
  ${tw`grid grid-cols-4 lg:grid-cols-2 gap-10`}
`;

const CardBox = styled.div`
  ${tw``}
  &:hover {
    filter: opacity(0.9);
  }
`;

interface IDirectlinks {}

const Directlinks: FC<IDirectlinks> = () => {
  return (
    <DirectlinksContainer>
      <Link href={"/category/174/girl"}>
        <CardBox className="col-3">
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
          <h2 className="text-center mt-4 font-medium text-xl">SHOP GIRL</h2>
        </CardBox>
      </Link>
      <Link href={"/category/343/boy"}>
        <CardBox className="col-3">
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
        </CardBox>
      </Link>
      <Link href={"/category/1/baby"}>
        <CardBox className="col-3">
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
          <h2 className="text-center mt-4 font-medium text-xl">SHOP BABY</h2>
        </CardBox>
      </Link>
      <Link href={"/category/8836/designers"}>
        <CardBox className="col-3">
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
          <h2 className="text-center mt-4 font-medium text-xl">DESIGN</h2>
        </CardBox>
      </Link>
    </DirectlinksContainer>
  );
};

export default Directlinks;
