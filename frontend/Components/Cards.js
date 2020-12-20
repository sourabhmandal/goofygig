import { Component } from "react";
export default class Cards extends Component {
  render() {
    return (
      <>
        <div className="card has-background-dark">
          <div className="card-content">
            <div
              className="content has-text-centered"
              style={{ padding: "3rem 0rem" }}
            >
              <h2 className="title is-2 abril-font has-text-grey-lighter">
                Find an expert for anything?
              </h2>
              <p className="has-text-grey-lighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus nec iaculis mauris.
              </p>
              <button
                className="button is-danger"
                style={{ width: "10rem", height: "3rem" }}
              >
                Button
              </button>
              <br />
              <br />
              <strong className="is-uppercase is-size-7 has-text-grey">
                NO HIDDEN CHARGES * No Extra fees!
              </strong>
            </div>
          </div>
        </div>
      </>
    );
  }
}
