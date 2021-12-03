import H1 from "@designs/H1";
import { FC } from "react";
import tw from "twin.macro";

const BannerTitle = tw.h2`mb-3`;

interface IBanner {}

const Banner: FC<IBanner> = () => {
  return (
    <BannerContainer>
      <div className="relative flex ">
        <picture className="cs-picture mx-auto">
          <source
            media="(min-width: 1367px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1920x600/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 1920w, https://cdn.childrensalon.com/media/cms/cache/3840x1200/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 3840w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/1920x600/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 1920w, https://cdn.childrensalon.com/media/cms/cache/3840x1200/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 3840w"
          />
          <source
            media="(min-width: 1367px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1920x600/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 1920w, https://cdn.childrensalon.com/media/cms/cache/3840x1200/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 3840w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/1920x600/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 1920w, https://cdn.childrensalon.com/media/cms/cache/3840x1200/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 3840w"
          />
          <source
            media="(min-width: 1024px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1366x428/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 1366w, https://cdn.childrensalon.com/media/cms/cache/2732x856/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 2732w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/1366x428/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 1366w, https://cdn.childrensalon.com/media/cms/cache/2732x856/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.webp 2732w"
          />
          <source
            media="(min-width: 1024px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/1366x428/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 1366w, https://cdn.childrensalon.com/media/cms/cache/2732x856/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 2732w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/1366x428/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 1366w, https://cdn.childrensalon.com/media/cms/cache/2732x856/c/h/christmas-desktop-new-5uif08kei3wo4goko48kwc0k0.jpg 2732w"
          />
          <source
            media="(min-width: 768px)"
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/2048x1466/c/h/christmas-tablet-alsnj1ff66g4ks8o8c8c88csw.webp 2048w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/2048x1466/c/h/christmas-tablet-alsnj1ff66g4ks8o8c8c88csw.webp 2048w"
          />
          <source
            media="(min-width: 768px)"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/2048x1466/c/h/christmas-tablet-alsnj1ff66g4ks8o8c8c88csw.jpg 2048w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/2048x1466/c/h/christmas-tablet-alsnj1ff66g4ks8o8c8c88csw.jpg 2048w"
          />
          <source
            type="image/webp"
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/750x750/c/h/christmas-mobile-3mn7ujx9x1mo80g4okg0kgcog.webp 750w"
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/750x750/c/h/christmas-mobile-3mn7ujx9x1mo80g4okg0kgcog.webp 750w"
          />
          <img
            data-srcset="https://cdn.childrensalon.com/media/cms/cache/750x750/c/h/christmas-mobile-3mn7ujx9x1mo80g4okg0kgcog.jpg 750w"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            className="lazyautosizes ls-is-cached lazyloaded"
            alt=""
            data-sizes="auto"
            width={1841}
            height={575}
            sizes="1841px"
            srcSet="https://cdn.childrensalon.com/media/cms/cache/750x750/c/h/christmas-mobile-3mn7ujx9x1mo80g4okg0kgcog.jpg 750w"
          />
        </picture>
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <div
            className="
                info-block-inner
                h-full
                w-full
                flex flex-col
                justify-center
                items-center
              "
          >
            <H1>Spotlight on Spain</H1>
            <div className="font-light text-center text-base mb-10">
              <p className="text-white">
                This season, we’re shining the spotlight on our Spanish
                designers!
                <br />
                From family-run labels to artisan makers, discover
                <br />
                the brands bringing a little Mediterranean craftsmanship to
                yourdoor.
                <br />
              </p>
            </div>
            <div className="btn-wrap">
              <span className="btn">
                <span>Discover the Collections</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = tw.div``;
