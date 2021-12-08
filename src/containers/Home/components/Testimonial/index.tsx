import IconSVG from "@designs/IconSVG";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TestimonialContainer = styled.div`
  ${tw``}
`;

interface ITestimonial {}

const Testimonial: FC<ITestimonial> = () => {
  return (
    <TestimonialContainer>
      <div className="mb-10">
        <IconSVG
          style={{ width: "220px", height: "50px", color: "#008132" }}
          className="mx-auto"
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
              “I just received the package thank you so much for tacking time
              out to reach out to me. And for the candy in the pockage. Your
              service is beyond my expectations. Thanks for your
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
              “I was impressed with your customer service. I recently ordered on
              Sunday and received my order the next day! Super fast and the
              haribos were a nice touch.”
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
              “Thank you very much and thanks to your great team of employees,
              one of the best online shops with communication between customers
              and employees.&nbsp;”
            </p>
          </div>
          <div className="box-content flex-shrink-0">
            <div className="name uppercase font-medium mt-4 text-xl ">Omar</div>
            <div className="text-base">United Arab Emirates</div>
          </div>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonial;
