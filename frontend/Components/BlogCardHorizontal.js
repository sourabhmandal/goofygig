import { Component } from "react";
export default class BlogCardHorizontal extends Component {
  render() {
    return (
      <>
        <div class="card mb-3">
          <div class="media">
            <div class="card-image media-left">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
