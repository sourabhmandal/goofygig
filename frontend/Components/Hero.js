import { Component } from "react";
import lottie from "lottie-web";
import growth from "../assets/Growth_Animation.json";
export default function Hero() {
  let growth_container = React.createRef();

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: growth_container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: growth,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <>
      <section class="hero has-background-white">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div className="column is-two-fifths">
                <h1
                  class="title abril-font is-capitalized "
                  style={{ fontSize: "4rem" }}
                >
                  Looking for part-time or project based talent
                </h1>
                <h2 class="subtitle is-capitalized is-size-4 pt-6">
                  Choose your direction and lets start
                </h2>
                <div className="buttons block">
                  <button class="button is-success" style={{ width: "12rem" }}>
                    Success
                  </button>
                  <button class="button is-danger" style={{ width: "12rem" }}>
                    Danger
                  </button>
                </div>
              </div>
              <div
                className="column is-three-fifths  has-text-right"
                ref={growth_container}
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
