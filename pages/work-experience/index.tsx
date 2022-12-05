/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Container from "./Container";

const Section = styled.div`
  background-color: #deefff;
`;

const Layout = styled.div`
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

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;
  max-width: 390px;

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    max-width: 1024px;
  }
`;

const Item = styled.div`
  .date {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1rem;
  }

  .title {
    font-family: "Freigeist Mono";
    font-style: normal;
    font-weight: 500;
    /* font-size: 32px; */
    font-size: 26px;
    line-height: 37px;
    letter-spacing: -0.1rem;

    margin-top: 8px;
    margin-bottom: 1.5rem;
  }

  .content {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }

  @media screen and (min-width: 850px) {
    .title {
      font-family: "Freigeist Mono";
      font-style: normal;
      font-weight: 500;
      /* font-size: 32px; */
      font-size: 32px;
      line-height: 42px;
      letter-spacing: -0.1rem;

      margin-top: 0.7rem;
      margin-bottom: 2rem;
    }
  }
`;

export default function ExperienceIndex() {
  return (
    <Section>
      <Container>
        <Layout>
          <Navbar />
          <Hero>
            <div>Work Experience</div>
            <img src="/no_new_notification 1.svg" alt="image" />
          </Hero>
          <ItemWrapper>
            <Item>
              <div className="date">2019 - 2020</div>
              <div className="title">ako.ai</div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
            </Item>
            <Item>
              <div className="date">2019 - 2020 | AKO.AI</div>
              <div className="title">Front End Developer</div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
            </Item>
            <Item>
              <div className="date">2019 - 2020</div>
              <div className="title">ako.ai</div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
            </Item>
          </ItemWrapper>
        </Layout>
      </Container>
      <Footer />
    </Section>
  );
}
