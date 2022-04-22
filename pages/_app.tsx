import { ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page); // if getLayout is not defined, use the default layout (page)
  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout(<Component {...pageProps} />); // return the layout with the page
}

export default MyApp;
