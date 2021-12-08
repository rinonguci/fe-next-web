import Banner from "@components/Banner";
import Layout from "@components/Layout";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import About from "./components/About";
import Directlinks from "./components/Directlinks";
import HotProduct from "./components/HotProduct";
import Testimonial from "./components/Testimonial";

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
          <Directlinks />
        </Container>
        {/* <!--  --> */}
        <Container>
          <About />
        </Container>
        <Container>
          <HotProduct />
        </Container>
        <Container>
          <Testimonial />
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default Home;
