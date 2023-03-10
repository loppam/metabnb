import React from "react";
import Head from "./head";
import Ads from "./ads";
import Middle from "./middle";
import Learnmore from "./learnmore";


const homepage = () => {
  return (
    <div>
      <Head />
      <Ads />
      <Middle />
      <Learnmore />
    </div>
  );
};

export default homepage;
