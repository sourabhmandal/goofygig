import { Component } from "react";

export default class MoreButton extends Component {
  render() {
    return (
      <>
        <section className="section pb-0 py-3">
          <div className="container has-text-centered ">
            <h6 className="title is-6">Do you want more spcialised service?</h6>
            <button
              className="button is-dark title is-6"
              style={{ width: "10rem" }}
            >
              Contact me
            </button>
          </div>
        </section>
      </>
    );
  }
}
