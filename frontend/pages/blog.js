import BlogHero from "../Components/BlogHero.js";
import BlogCardSquare from "../Components/BlogCardSquare.js";
import BlogCardHorizontal from "../Components/BlogCardHorizontal.js";
import Blockquote from "../Components/Blockquote.js";
import BlogTextCard from "../Components/BlogTextCard.js";
import Footer from "../Components/Footer";

export default function Blog() {
  return (
    <>
      <BlogHero />
      <br />
      <div className="container">
        <div className="columns is-multiline">
          <div className="column">
            <BlogCardSquare />
          </div>
          <div className="column">
            <BlogCardSquare />
          </div>
          <div className="column is-5">
            <BlogCardHorizontal />
            <BlogCardHorizontal />
            <BlogCardHorizontal />
          </div>
        </div>
        <Blockquote />
      </div>

      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
          <div className="column is-one-third">
            <BlogCardSquare />
          </div>
        </div>
        <Blockquote />
      </div>

      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
          <div className="column is-one-third">
            <BlogTextCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
