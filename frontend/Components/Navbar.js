import Link from "next/link";

const Navabar = () => {
  return (
    <section>
      <div className="has-background-white column is-fullwidth is-gapless p-0">
        <nav className="level" role="navigation" aria-label="main navigation">
          <div className="navbar-brand level-left">
            <a className="level-item navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger level-item"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample level-right" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item level-item">Home</a>

              <a className="navbar-item level-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link level-item">More</a>

                <div className="navbar-dropdown level-item">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>

              <div className="navbar-end level-item">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navabar;
