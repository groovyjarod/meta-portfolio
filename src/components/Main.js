import React from "react";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Chicago from "./Chicago";

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <article>
            <Specials />
        </article>
        <article>
            <Testimonials />
        </article>
        <article>
            <Chicago />
        </article>
      </section>
    </>
  );
};

export default Main;
