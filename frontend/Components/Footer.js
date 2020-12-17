import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer has-background-dark mt-5">
          <div className="container">
            <div className="columns">
              <FooterColumn />
              <FooterColumn />
              <FooterColumn />
              <FooterColumn />
              <div className="column is-two-fifths">
                <strong className="has-text-grey-light is-uppercase is-size-6">
                  Keep Up to date
                </strong>
                <h4 className="title is-4 has-text-grey-light mt-2">
                  Join Our Community
                  <br />
                  Subscribe to our newsletter
                </h4>

                <div className="field">
                  <div className="control">
                    <p>
                      <input
                        className="input is-danger is-left mr-2"
                        style={{ width: "70%" }}
                        type="text"
                        placeholder="Email"
                      />
                      <button className="button is-danger is-right">
                        Button
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr
              className="has-text-grey"
              style={{ borderBottom: "2px solid" }}
            />
            <div className="columns">
              <div className="column has-text-grey-light">
                <a href="#" className="dark-bg-link mr-3">
                  Terms of Service
                </a>
                <a href="#" className="dark-bg-link mr-3">
                  Privacy Policy
                </a>
                <a href="#" className="dark-bg-link mr-3">
                  Cookies
                </a>
                <p className="dark-bg-link is-capitalized">
                  copyright @SourabhMandal All rights reseved
                </p>
              </div>
              <div className="column justify-end has-text-right">
                <button
                  className="button is-light is-right m-1"
                  style={{ width: "8rem" }}
                >
                  Log In
                </button>
                <button
                  className="button is-warning is-right m-1"
                  style={{ width: "8rem" }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
class FooterColumn extends Component {
  render() {
    return (
      <div className="column">
        <strong className="has-text-grey-light is-uppercase is-size-6">
          company
        </strong>
        <p>
          <a href="#" className="dark-bg-link">
            About Us
          </a>
        </p>
        <p>
          <a href="#" className="dark-bg-link">
            Invetor Relations
          </a>
        </p>
        <p>
          <a href="#" className="dark-bg-link">
            Careers
          </a>
        </p>
        <p>
          <a href="#" className="dark-bg-link">
            Press
          </a>
        </p>
        <p>
          <a href="#" className="dark-bg-link">
            Accesibility
          </a>
        </p>
      </div>
    );
  }
}
