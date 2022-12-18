// this component is used in MDXProvider in _app.tsx

import React from "react";
import styled from "styled-components";

export const Header1 = styled.div`
  font-size: 4.8rem;
  font-family: "Freigeist Mono";

  @media screen and (min-width: 850px) {
    font-size: 10rem;
  }
`;

export const Header2 = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5rem 0;

  @media screen and (min-width: 850px) {
    font-size: 1.8rem;
  }
`;

// ul and li are used in the .mdx file
export const Ul = styled.ul`
  /* list-style: none; */
  margin: 1rem 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  li {
    margin: 0.5rem;
    p {
      margin: 0;
    }
  }
`;
