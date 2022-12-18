// this is the layout for each markdown pages
// it will be used in the .mdx file

import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MDLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem;
  padding-top: 0;
  gap: 30px;

  @media screen and (min-width: 850px) {
    gap: 90px;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-size: 14px;

  div {
    font-family: "Freigeist Mono";
    font-size: clamp(1.125rem, 0.836rem + 1.25vw, 1.5rem);
  }

  img {
    width: min(calc(14rem + 13vw), 310px);
    padding: "0px 0px 20px 0px";
  }

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: unset;
    padding: 0 64px;
    div {
      flex: 0 0;
      font-family: "Freigeist Mono";
      font-size: clamp(3.125rem, -2.981rem + 11.494vw, 4.375rem);
    }
  }
`;

const Company = styled.div`
  font-size: 4.8rem;
  font-family: "Freigeist Mono";

  @media screen and (min-width: 850px) {
    font-size: 10rem;
  }
`;

const Title = styled.div`
  font-family: "Source Sans Pro";
  font-size: 1.2rem;
  padding: 0.2rem;
  color: #606060;

  @media screen and (min-width: 850px) {
    font-size: 2rem;
    padding: 0.5rem;
  }
`;

const Date = styled.div`
  font-family: "Source Sans Pro";
  font-size: 1.2rem;
  padding: 0.2rem;
  color: #606060;

  @media screen and (min-width: 850px) {
    font-size: 2rem;
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding-top: 0;
  max-width: 850px;
`;

export default function Layout({ children, meta }: any) {
  const title = meta?.title || null;
  const company = meta?.company || null;
  const date = meta?.date || null;
  return (
    <>
      <MDLayout>
        <Navbar />
        <Hero>
          <img src="/no_new_notification 1.svg" alt="image" />
        </Hero>
        <div>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </div>

        <Wrapper>{children}</Wrapper>

        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </Button>
      </MDLayout>
      <Footer />
    </>
  );
}
