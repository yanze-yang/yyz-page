import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 4rem;
  gap: 30px;
  font-family: "Freigeist Mono";
  font-size: 6rem;

  & :nth-child(1) {
    margin-left: calc(1vw);
  }

  & :nth-child(2) {
    margin-left: calc(10% + 10vw);
  }

  & :nth-child(3) {
    margin-left: calc(25% + 10vw);
  }

  @media screen and (min-width: 850px) {
    gap: 90px;
  }
`;

export default function index() {
  return (
    <div style={{ backgroundColor: "#deefff" }}>
      <Layout>
        <Link href={"/work-experience"}>Work</Link>
        <Link href={"/work-experience"}>Project</Link>
        <Link href={"/work-experience"}>About</Link>
      </Layout>
    </div>
  );
}
