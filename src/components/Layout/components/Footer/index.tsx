import IconSVG from "@designs/IconSVG";
import { FC } from "react";
import styled from "styled-components";

interface IFooter {}

const Footer: FC<IFooter> = () => {
  return (
    <FooterContainer>
      <footer className="footer-container container mx-auto mt-40 lg:hidden">
        <div className="hidden">
          <a className="footer-btn" href="tel:+44 1892 779110">
            <svg data-cs="svgLoader" className="lazyload">
              <use xlinkHref="/icon.svg#svgs-phone"></use>
            </svg>
            <span>Contact Customer Service</span>
          </a>
          <a
            href="/contact-us/#liveChat"
            rel="noopener"
            className="footer-btn"
            data-cs="ZendeskChatLink"
          >
            <svg className="icon-message lazyload" data-cs="svgLoader">
              <use xlinkHref="/icon.svg#svgs-live-chat-double"></use>
            </svg>
            <span>Live Chat</span>
          </a>
        </div>
        <div className="f-cols lg:hidden grid grid-cols-4 gap-36">
          <div className="f-col">
            <h3>Customer service</h3>
            <ul className="f-col-content">
              <li>
                <a href="/contact-us/">Contact Us</a>
              </li>
              <li>
                <a
                  href="https://www.childrensalon.com/delivery-returns"
                  className="delivery-returns"
                >
                  Delivery &amp; Returns
                </a>
              </li>
              <li>
                <a href="/size-guide/">Size Guide</a>
              </li>
              <li>
                <a href="/customer-feedback/">Customer Feedback</a>
              </li>
              <li>
                <a href="/help/">Help</a>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h3>
              <a
                href="https://www.childrensalon.com/contact-us/"
                className="j-contact-us"
              >
                Contact Us
              </a>
            </h3>
            <div className="f-col-content">
              <p>
                <a
                  href="/contact-us/#liveChat"
                  rel="noopener"
                  className="f-col-livechat"
                  data-cs="ZendeskChatLink"
                >
                  <span className="f-col-subtitle">Live Chat</span>
                  <br />
                  Chat to Customer Service
                </a>
              </p>
              <p>
                <span className="f-col-subtitle">Call Us</span>
                <br />
                Need help? Give us a call.
              </p>
              <ul className="phone-list">
                <li>
                  UK:
                  <a className="nobr" href="tel:01892-779-110" dir="ltr">
                    01892 779 110
                  </a>
                </li>
                <li>
                  Australia:
                  <a className="nobr" href="tel:02-8310-9990" dir="ltr">
                    02 8310 9990
                  </a>
                </li>
                <li>
                  France:
                  <a className="nobr" href="tel:01-70-79-13-95" dir="ltr">
                    01 70 79 13 95
                  </a>
                </li>
                <li>
                  USA:
                  <a className="nobr" href="tel:+1-646-400-6655" dir="ltr">
                    +1-646-400-6655
                  </a>
                </li>
                <li>
                  Japan:
                  <a className="nobr" href="tel:03-4579-0677" dir="ltr">
                    03 4579 0677
                  </a>
                </li>
                <li>
                  Overseas:
                  <a className="nobr" href="tel:+44-1892-779110" dir="ltr">
                    +44 1892 779110
                  </a>
                </li>
                <li className="other-enquiries">
                  For all other enquiries:
                  <a className="nobr" href="tel:01892-481-781" dir="ltr">
                    01892 481 781
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="f-col">
            <h3>About Us</h3>
            <ul className="f-col-content">
              <li>
                <a href="https://www.childrensalon.com/the-store">
                  Visiting Our Outlet
                </a>
              </li>
              <li>
                <a href="https://www.childrensalon.com/history">History</a>
              </li>
              <li>
                <a href="/the-team/">Meet The Team</a>
              </li>
              <li>
                <a
                  href="https://www.childrensalon.com/about-us"
                  className="j-about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.childrensalon.com/careers">Careers</a>
              </li>
              <li>
                <a href="https://www.childrensalon.com/affiliates">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="/our-story/">Fashion Fairytale</a>
              </li>
              <li>
                <a href="/gender-pay-gap-report/">Gender Pay Gap Report</a>
              </li>
              <li>
                <a href="/modern-day-slavery-report/">Modern Slavery Report</a>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h3>Get The Newsletter</h3>
            <div className="f-col-content">
              <form
                name="subscription"
                method="post"
                action="https://www.childrensalon.com/newsletter/subscribe"
                className="form-subscribe required-entry j-ajax-form-reset"
                autoComplete="off"
                noValidate={true}
                data-cs="formValidate:ajaxForm"
              >
                <input
                  type="hidden"
                  name="subscription[source]"
                  value="footer_subscription_form"
                />
                <span className="form-label">
                  Find out about the latest offers from Childrensalon
                </span>
                <div className="form-cols">
                  <div className="flex items-end">
                    <div className="input-col">
                      <label className="input-box">
                        <span className="label">
                          Sign up to our newsletter{" "}
                        </span>
                        <input
                          type="email"
                          name="subscription[email]"
                          required={true}
                          className="
                          required-entry
                          input-text
                          validate-email validate-length
                          maximum-length-255
                        "
                          autoComplete="email"
                          placeholder="Your email"
                        />
                      </label>
                    </div>
                    <div className="btn-col">
                      <button type="submit" className="btn btn-full">
                        <span className="text-gray-200">
                          <IconSVG iconHref="/icon.svg#svgs-arrow-right-thin" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer mb-20 hidden">
          <a
            href="https://www.childrensalon.com/rewards/landing"
            className="footer-mobile-info-bar xl:block hidden"
          >
            Join Childrensalon Rewards
          </a>
          <ul className="bottom-footer flex gap-20 justify-between items-center lg:hidden">
            <li className="social">
              <ul className="flex leading-0">
                <li className="">
                  <a
                    rel="noopener"
                    href="https://www.facebook.com/childrensalon"
                    title="Facebook"
                  >
                    <svg className="icon lazyloaded" data-cs="svgLoader">
                      <use xlinkHref="/icon.svg#svgs-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="lg:ml-0 ml-6">
                  <a
                    rel="noopener"
                    href="https://twitter.com/childrensalon"
                    title="Twitter"
                  >
                    <svg className="icon lazyloaded" data-cs="svgLoader">
                      <use xlinkHref="/icon.svg#svgs-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="lg:ml-0 ml-6">
                  <a
                    rel="noopener"
                    href="https://instagram.com/childrensalon"
                    title="Instagram"
                  >
                    <svg className="icon lazyloaded" data-cs="svgLoader">
                      <use xlinkHref="/icon.svg#svgs-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="lg:ml-0 ml-6">
                  <a
                    rel="noopener"
                    href="https://www.pinterest.com/childrensalon"
                    title="Pinterest"
                  >
                    <svg className="icon lazyloaded" data-cs="svgLoader">
                      <use xlinkHref="/icon.svg#svgs-pinterest"></use>
                    </svg>
                  </a>
                </li>
                <li className="lg:ml-0 ml-6">
                  <a
                    rel="noopener"
                    href="https://www.youtube.com/user/childrensalon"
                    title="Youtube"
                  >
                    <svg className="icon lazyloaded" data-cs="svgLoader">
                      <use xlinkHref="/icon.svg#svgs-youtube"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="xl:block hidden">
              <div className="cs-sustainability-desktop-links">
                <h3>
                  <a
                    href="https://www.childrensalon.com/sustainability"
                    className="link"
                  >
                    <svg
                      className="icon icon-footer-sustainability lazyloaded"
                      data-cs="svgLoader"
                    >
                      <use xlinkHref="/icon.svg#svgs-footer-sustainability"></use>
                    </svg>
                    <span>New</span> The Earth Edit
                  </a>
                </h3>
              </div>
            </li>
            <li className="item-bullet">•</li>
            <li className="mobile-links hidden">
              <ul>
                <li>
                  <a href="https://www.childrensalon.com/delivery-returns">
                    Delivery &amp; Returns
                  </a>
                </li>
                <li>
                  <a href="/contact-us/">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.childrensalon.com/our-story">
                    Fashion Fairytale
                  </a>
                </li>
                <li>
                  <a href="https://www.childrensalon.com/size-guide">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="https://www.childrensalon.com/gender-pay-gap-report">
                    Gender Pay Gap Report
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.childrensalon.com/careers">Careers</a>
                </li>
                <li>
                  <a
                    href="https://www.childrensalon.com/privacy"
                    className="privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.childrensalon.com/terms"
                    className="terms"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a href="https://www.childrensalon.com/help">Help</a>
                </li>
                <li>
                  <a href="https://www.childrensalon.com/modern-day-slavery-report">
                    Modern Slavery Report
                  </a>
                </li>
              </ul>
            </li>
            <li className="xl:block hidden">
              <div className="footer-badges mobileapp-hide">
                <p className="title">Childrensalon App available on</p>
                <div className="container">
                  <a
                    href="https://itunes.apple.com/app/apple-store/id1301946839?pt=118679525&amp;ct=landing%20page&amp;mt=8"
                    className="button button-apple"
                  >
                    <svg
                      className="icon apple-icon lazyloaded"
                      data-cs="svgLoader"
                    >
                      <use xlinkHref="/icon.svg#svgs-apple"></use>
                    </svg>
                    <span>
                      Download on the
                      <span>App Store</span>
                    </span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.childrensalon.app"
                    className="button button-android"
                  >
                    <svg
                      className="icon android-icon lazyloaded"
                      data-cs="svgLoader"
                    >
                      <use xlinkHref="/icon.svg#svgs-android"></use>
                    </svg>
                    <span>
                      GET IT ON<span> Google Play</span>{" "}
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="copy">
              © Copyright
              <a href="https://www.childrensalon.com/">Childrensalon 2021</a>,
              <br className="lg:block hidden" />
              all rights reserved.
            </li>
            <li className="item-bullet">•</li>
            <li className="cms-link">
              <a href="https://www.childrensalon.com/terms">Terms</a>
            </li>
            <li className="item-bullet">•</li>
            <li className="cms-link">
              <a href="https://www.childrensalon.com/privacy">Privacy</a>
            </li>
            <li className="item-bullet">•</li>
            <li className="cards">
              <img
                data-srcset="https://cdn.childrensalon.com/images/footer/payment-methods.png 2x, https://cdn.childrensalon.com/images/footer/payment-methods@1x.png 1x"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                className="ls-is-cached lazyloaded"
                alt=""
                srcSet="
                https://cdn.childrensalon.com/images/footer/payment-methods.png    2x,
                https://cdn.childrensalon.com/images/footer/payment-methods@1x.png 1x
              "
              />
            </li>
          </ul>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  * {
    /* border: 1px solid; */
  }
`;
