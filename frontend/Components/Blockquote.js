import { Component } from "react";
export default class Blockquote extends Component {
  render() {
    return (
      <>
        <div
          class="card mb-5 has-shadow-none"
          style={{ borderLeft: "8px solid #F0E68C", boxShadow: "none" }}
        >
          <div class="card-content has-background-warning-light">
            <div class="media-content">
              <p class="title is-4">
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p className="is-6">
                - <i>Jeff Atwood</i>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
