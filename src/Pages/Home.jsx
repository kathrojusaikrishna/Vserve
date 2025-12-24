import React from "react";
import "../styles/Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".main-heading-h1", {
      opacity: 1,
      delay: 2.8,
      y: 15,
      ease: "power2.inOut",
    });

    timeline.to(".search-div", {
      opacity: 1,
      y: 4,
      ease: "power2.inOut",
    });
  });
  return (
    <>
      <section>
        <div className="main-heading-h1">
          <h1>
            Struck? <br /> Find <span id="trusted-span">Trusted</span> service
            near you
          </h1>
        </div>
        <div className="search-div">
          <div className="search-container">
            <form>
              <input type="search" placeholder="Ex. Technician" />
              <button type="search">Search</button>
            </form>
          </div>
        </div>
        {/* <h1>Where you feel the completeness.</h1> */}
      </section>
      <section></section>
    </>
  );
};

export default Home;
