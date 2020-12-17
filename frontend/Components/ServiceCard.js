import { Component } from "react";

export default class ServiceCard extends Component {
  render() {
    return (
      <>
        <div
          className="notification is-white"
          style={{
            height: "14rem",
            borderBottom: "2px solid #e1e1e1",
            borderRadius: "0.5rem",
          }}
        >
          <div className="p-4">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/48x48.png"
                style={{ borderRadius: "0.5rem" }}
              />
            </figure>
            <h5 className="title is-5 mt-5">Title 4</h5>

            <h6 className="title is-6 mt-5">
              <span className="has-text-primary">2091</span> Title 6
            </h6>
          </div>
        </div>
      </>
    );
  }
}
