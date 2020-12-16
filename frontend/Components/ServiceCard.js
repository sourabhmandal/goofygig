import { Component } from "react";

export default class ServiceCard extends Component {
  render() {
    return (
      <>
        <div
          class="notification is-white"
          style={{
            height: "14rem",
            borderBottom: "2px solid #e1e1e1",
            borderRadius: "0.5rem",
          }}
        >
          <div class="p-4">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/48x48.png"
                style={{ borderRadius: "0.5rem" }}
              />
            </figure>
            <h5 class="title is-5 mt-5">Title 4</h5>

            <h6 class="title is-6 mt-5">
              <span className="has-text-primary">2091</span> Title 6
            </h6>
          </div>
        </div>
      </>
    );
  }
}
