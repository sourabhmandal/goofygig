import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer class="footer has-background-dark mt-5">
          <div class="container">
            <div class="columns">
              <FooterColumn />
              <FooterColumn />
              <FooterColumn />
              <FooterColumn />
              <div class="column is-two-fifths">
                <strong class="has-text-grey-light is-uppercase is-size-6">
                  Keep Up to date
                </strong>
                <h4 class="title is-4 has-text-grey-light mt-2">
                  Join Our Community
                  <br />
                  Subscribe to our newsletter
                </h4>

                <div class="field">
                  <div class="control">
                    <p>
                      <input
                        class="input is-danger is-left mr-2"
                        style={{ width: "70%" }}
                        type="text"
                        placeholder="Email"
                      />
                      <button class="button is-danger is-right">Button</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr class="has-text-grey" style={{ borderBottom: "2px solid" }} />
            <div class="columns">
              <div class="column has-text-grey-light">
                <a href="#" className="dark-bg-link mr-3">
                  Terms of Service
                </a>
                <a href="#" className="dark-bg-link mr-3">
                  Privacy Policy
                </a>
                <a href="#" className="dark-bg-link mr-3">
                  Cookies
                </a>
                <p class="dark-bg-link is-capitalized">
                  copyright @SourabhMandal All rights reseved
                </p>
              </div>
              <div class="column justify-end has-text-right">
                <button
                  class="button is-light is-right m-1"
                  style={{ width: "8rem" }}
                >
                  Log In
                </button>
                <button
                  class="button is-warning is-right m-1"
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
      <div class="column">
        <strong class="has-text-grey-light is-uppercase is-size-6">
          company
        </strong>
        <p>
          <a href="#" class="dark-bg-link">
            About Us
          </a>
        </p>
        <p>
          <a href="#" class="dark-bg-link">
            Invetor Relations
          </a>
        </p>
        <p>
          <a href="#" class="dark-bg-link">
            Careers
          </a>
        </p>
        <p>
          <a href="#" class="dark-bg-link">
            Press
          </a>
        </p>
        <p>
          <a href="#" class="dark-bg-link">
            Accesibility
          </a>
        </p>
      </div>
    );
  }
}
