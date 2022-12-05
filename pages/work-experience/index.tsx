/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Container from "./Container";

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

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
  gap: 3rem;
  max-width: 390px;

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    max-width: 1024px;
  }
`;

const Item = styled.div`
  border-bottom: 1px #2d2d2d solid;
  padding-bottom: 2rem;
  transition: 0.2s ease-out;

  :hover {
    cursor: pointer;
    transform: translateX(-5px);
  }

  @media screen and (min-width: 850px) {
    border: 1px #2d2d2d solid;
    padding: 2rem;

    :hover {
      cursor: pointer;
      transform: translateY(-5px);
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.3rem;

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
  }

  .job {
    font-weight: 400;
    font-style: italic;
    font-size: 18px;
    line-height: 23px;
  }

  @media screen and (min-width: 850px) {
    .title {
      font-size: 32px;
      line-height: 42px;
      letter-spacing: -0.1rem;
    }
  }
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

const Button = styled.div`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1.3rem;
  border: 1px #2d2d2d solid;

  font-family: "Freigeist Mono";

  :hover {
    cursor: pointer;
    color: #023ea6;
    border: 1px #023ea6 solid;
  }
`;

export default function ExperienceIndex() {
  return (
    <Section>
      <Container>
        <Layout>
          <Navbar />
          <Hero>
            <div>{"Work Experience".toUpperCase()}</div>
            <img src="/no_new_notification 1.svg" alt="image" />
          </Hero>
          <ItemWrapper>
            <Item>
              <Info>
                <div className="date">2019 - 2020</div>
                <div className="title">ako.ai</div>
                <div className="job">Front End Developer</div>
              </Info>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </Content>
              <Button>More</Button>
            </Item>
            <Item>
              <Info>
                <div className="date">2019 - 2020</div>
                <div className="title">amy</div>
                <div className="job">Front End Developer</div>
              </Info>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </Content>
              <Button>More</Button>
            </Item>
            <Item>
              <Info>
                <div className="date">2019 - 2020</div>
                <div className="title">ako.ai</div>
                <div className="job">Front End Developer</div>
              </Info>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </Content>
              <Button>More</Button>
            </Item>
          </ItemWrapper>
        </Layout>
      </Container>
      <Footer />
    </Section>
  );
}
