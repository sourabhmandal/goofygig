import { Component } from "react";

export default class Stats extends Component {
  render() {
    return (
      <div className="column p-5">
        <div className="notification">
          <div className="p-4">
            <h2 className="title is-2 abril-font">2091</h2>
            <p
              className="has-text-weight-semibold is-uppercase"
              style={{ fontSize: "11px" }}
            >
              client
            </p>
          </div>
        </div>
      </div>
    );
  }
}
