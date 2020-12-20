import { Component } from "react";
export default class BlogCardSquare extends Component {
  render() {
    return (
      <>
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by3">
              <img
                src="https://bulma.io/images/placeholders/800x480.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    className=" is-rounded"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet,
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </>
    );
  }
}
