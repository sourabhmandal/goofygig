import { Component } from "react";

export default class MoreButton extends Component {
  render() {
    return (
      <>
        <section class="section pb-0 py-3">
          <div class="container has-text-centered ">
            <h6 class="title is-6">Do you want more spcialised service?</h6>
            <button
              class="button is-dark title is-6"
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
