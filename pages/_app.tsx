import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

import { Header1, Header2, Ul } from "../components/markdown/MD_Components";

const components = {
  h1: Header1,
  h2: Header2,
  ul: Ul,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
