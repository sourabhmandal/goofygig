import Link from "next/link";

function Navabar(props) {
  console.log(props);
  return (
    <section>
      <div className="has-background-white column is-fullwidth is-gapless p-0">
        <nav className="level" role="navigation" aria-label="main navigation">
          <div className="navbar-brand level-left">
            <a
              role="button"
              className="navbar-burger level-item"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            ></a>
          </div>

          <div id="navbarBasicExample level-right" className="navbar-menu">
            <div className="navbar-end">
              {props.props.items.map((page) => {
                if (page.title == "Contact") {
                  return (
                    <div className="navbar-end level-item">
                      <div className="navbar-item">
                        <div className="buttons">
                          <Link
                            href={page.meta.html_url}
                            as={page.meta.html_url}
                          >
                            <a className="button is-primary">
                              <strong>{page.title}</strong>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link href={page.meta.html_url} as={page.meta.html_url}>
                    <a className="navbar-item level-item">{page.title}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navabar;
