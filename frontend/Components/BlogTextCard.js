import { Component } from "react";
import { faHeart, faRetweet, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BlogTextCard extends Component {
  render() {
    return (
      <>
        <div class="box" style={{ boxShadow: "none" }}>
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" aria-label="reply">
                    <span class="icon is-small">
                      <FontAwesomeIcon icon={faReply} />
                    </span>
                  </a>
                  <a class="level-item" aria-label="retweet">
                    <span class="icon is-small">
                      <FontAwesomeIcon icon={faRetweet} />
                    </span>
                  </a>
                  <a class="level-item" aria-label="like">
                    <span class="icon is-small">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </>
    );
  }
}
