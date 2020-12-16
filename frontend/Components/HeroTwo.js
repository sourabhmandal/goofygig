import meeting from "../assets/meeting.json";
import lottie from "lottie-web";
export default function Hero() {
  let meeting_container = React.createRef();

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: meeting_container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: meeting,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <>
      <section class="hero has-background-white">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div
                className="column is-two-fifths"
                style={{ margin: "0rem 6rem" }}
              >
                <h1
                  class="title abril-font is-capitalized "
                  style={{ fontSize: "2rem" }}
                >
                  Post Projects Quickly, receive response even quicker
                </h1>
                <p class="is-size-6 pt-2 pb-5 mb-5">
                  Choose your direction and lets start. Choose your direction
                  and lets start Choose your direction and lets start Choose
                  your direction and lets startChoose your direction and lets
                  start Choose your direction and lets start
                </p>
                <div className="buttons">
                  <button
                    class="button is-danger p-5"
                    style={{ width: "10rem" }}
                  >
                    Danger
                  </button>
                </div>
              </div>
              <div class="column" ref={meeting_container}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
