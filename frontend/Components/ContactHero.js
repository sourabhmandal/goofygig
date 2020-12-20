import { Component } from "react";

export default class ContactCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title is-2">Contact Me</h2>
              <ul>
                <li>
                  <strong>phno</strong> - 19021329817
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
