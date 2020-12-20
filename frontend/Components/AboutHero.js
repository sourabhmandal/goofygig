import { Component } from "react";
import AboutCard from "../Components/AboutCard";
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
                    Get Byte Sized Blog News in your Email Get Byte Sized Blog
                    News in your Email
                  </h2>
                  <p className="has-text-light">
                    Stay ahead in your career growth with our personal career
                    growth tips
                  </p>
                  <strong className="is-uppercase is-size-7 has-text-grey">
                    we mail you once a week * we dont spam
                  </strong>
                </div>
                <div className="column">
                  <figure className="image is-16by9">
                    <img src="https://bulma.io/images/placeholders/640x360.png" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
