/* eslint-disable @next/next/no-img-element */
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
    &:hover {
      color: #023ea6;
      cursor: pointer;
      transform: translateY(-0.6);
      transform: scale(1.05);
      margin-top: -2px;
      scale: 1;
      transition: 0.2s ease-out;
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
      <div className="work">Work</div>
      <div className="project">Project</div>
      <div className="about">About</div>
    </Wrapper>
  );
}
