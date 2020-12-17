import { Component } from "react";

export default class SectionTitle extends Component {
  render() {
    return (
      <>
        <section className="section pb-0">
          <div className="container has-text-centered mt-5">
            <h2 className="subtitle is-size-6 is-uppercase has-text-weight-semibold">
              Most Popular Categories
            </h2>
            <h1 className="title abril-font is-size-2  py-2">
              Find quality talent or agency
            </h1>
            <h2 className="subtitle py-4">
              A simple container to divide your page into
            </h2>
          </div>
        </section>
      </>
    );
  }
}
