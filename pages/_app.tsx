import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/animate.min.css";
import "@/styles/bootstrap.min.css";
import "@/styles/slick.min.css";
import "@/styles/nice-select.min.css";
import "@/styles/fonts/fontawesome/css/all.min.css";
import "@/styles/fonts/flaticon/css/flaticon.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@/styles/lity.min.css";
import Layout from "@/components/layout/Layout";
import { Fragment } from "react";
import { Head } from "next/document";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </Fragment>
  );
}
