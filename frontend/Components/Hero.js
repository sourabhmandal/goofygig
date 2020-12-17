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
      <section className="hero has-background-white">
        <div className="hero-body  p-0 m-0">
          <div className="container">
            <div className="columns">
              <div className="column is-two-fifths m-5">
                <h1
                  className="title abril-font is-capitalized "
                  style={{ fontSize: "4rem" }}
                >
                  Boost you LinkedIn profile with our Marketing Techniques
                </h1>
                <h2 className="subtitle is-capitalized is-size-4 pt-6">
                  Choose your direction and lets start
                </h2>
                <div className="buttons block">
                  <button
                    className="button is-success"
                    style={{ width: "12rem" }}
                  >
                    Success
                  </button>
                  <button
                    className="button is-danger"
                    style={{ width: "12rem" }}
                  >
                    Danger
                  </button>
                </div>
              </div>
              <div className="column p-0" ref={growth_container}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
