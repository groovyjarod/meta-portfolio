import React from "react";
import Specials from "./Specials";
import SpecialsMobile from "../mobile/SpecialsMobile";
import Testimonials from "./Testimonials";
import TestimonialsMobile from "../mobile/TestimonialsMobile";
import Header from "./Header";
import HeaderMobile from "../mobile/HeaderMobile";
import Chicago from "./Chicago";
import ChicagoMobile from "../mobile/ChicagoMobile";
import { useWindowSize } from "react-use";

const Main = () => {
  const { width } = useWindowSize()
  return (
    <>
      <header>
        {width > 1150 ? <Header /> : <HeaderMobile />}
      </header>
      <section>
        <article>
            {width > 1150 ? <Specials /> : <SpecialsMobile />}
        </article>
        <article>
            {width > 1150 ? <Testimonials /> : <TestimonialsMobile />}
        </article>
        <article>
            {width > 1150 ? <Chicago /> : <ChicagoMobile />}
        </article>
      </section>
    </>
  );
};

export default Main;
