import { Component } from "react";
export default class BlogHero extends Component {
  render() {
    return (
      <>
        <section class="hero has-background-dark">
          <div class="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h2 className="title is-2 abril-font has-text-light">
                    Get Byte Sized Blog News in your Email
                  </h2>
                  <p className="has-text-light">
                    Stay ahead in your career growth
                    <br />
                    with our personal career growth tips
                  </p>
                  <strong className="is-uppercase is-size-7 has-text-grey">
                    we mail you once a week * we dont spam
                  </strong>
                </div>
                <div className="column">
                  <input
                    className="input is-danger mt-5 is-left has-background-grey-lighter"
                    style={{ width: "70%" }}
                    type="text"
                    placeholder="Email"
                  />{" "}
                  <br />
                  <button
                    className="button is-warning is-right my-3"
                    style={{ width: "8rem" }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
