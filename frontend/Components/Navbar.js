import Link from "next/link";

const Navabar = () => {
  return (
    <section>
      <div className="has-background-white column is-fullwidth is-gapless p-0">
        <nav className="level" role="navigation" aria-label="main navigation">
          <div className="navbar-brand level-left">
            <a
              className="level-item navbar-item"
              href="https://bulma.io/images/placeholders/48x48.png"
            >
              <img
                className="image is-32x32"
                src="https://bulma.io/images/placeholders/32x32.png"
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
              <a className="navbar-item level-item">Blog</a>
              <a className="navbar-item level-item">About Me</a>
              <a className="navbar-item level-item"></a>

              <div className="navbar-end level-item">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Contact Me</strong>
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
