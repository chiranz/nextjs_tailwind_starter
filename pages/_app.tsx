import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { joinClasses } from "../utils";

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={joinClasses(
        "grid",
        "grid-rows-3m",
        "h-screen",
        "max-w-4xl",
        "mx-auto",
        "text-center"
      )}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
