import { Component } from "react";
export default class Cards extends Component {
  render() {
    return (
      <>
        <div class="card">
          <div class="card-content">
            <div
              class="content has-text-centered"
              style={{ padding: "3rem 0rem" }}
            >
              <h2 class="title is-2 abril-font has-text-light">
                Find an expert for anything?
              </h2>
              <p class=" has-text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus nec iaculis mauris.
              </p>
              <button
                class="button is-danger"
                style={{ width: "10rem", height: "3rem" }}
              >
                Button
              </button>
              <br />
              <br />
              <strong class="is-uppercase is-size-7 has-text-grey">
                NO HIDDEN CHARGES * No Extra fees!
              </strong>
            </div>
          </div>
        </div>
      </>
    );
  }
}
