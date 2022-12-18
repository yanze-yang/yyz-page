/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: #2d2d2d 1px solid;
  font-size: 16px;
  padding: 0.8rem;
  width: 100%;
  div {
    transition: 0.2s ease-out;
    &:hover {
      color: #023ea6;
      cursor: pointer;
      transform: translateY(-2px) scale(1.03);
    }
  }

  @media screen and (min-width: 850px) {
    font-size: 26px;
    padding: 1.3rem;
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Link href="/work-experience">
        <div className="work">Work</div>
      </Link>
      <div className="project">Project</div>
      <div className="about">About</div>
    </Wrapper>
  );
}
