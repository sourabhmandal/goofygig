import Layout from "../Components/Layout";
import Hero from "../Components/Hero";
import HeroTwo from "../Components/HeroTwo";
import Footer from "../Components/Footer";
import SectionTitle from "../Components/SectionTitle";
import Cards from "../Components/Cards";
import ServiceCard from "../Components/ServiceCard";
import MoreButton from "../Components/MoreButton";
import Stats from "../Components/Stats";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div className=" has-background-light">
      <Layout />
      <Hero />
      <SectionTitle />

      <div className="container p-4">
        <div class="columns is-multiline p-5">
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1">
            <ServiceCard />
          </div>
        </div>
      </div>

      <MoreButton />

      <div className="container mb-5 has-text-centered">
        <div class="columns mx-5 px-5">
          <Stats />
          <Stats />
          <Stats />
          <Stats />
        </div>
      </div>
      <HeroTwo />
      <SectionTitle />
      <div className="container is-fullwidth">
        <div class="columns is-centered is-multiline p-5">
          <div class="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div class="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <HeroTwo />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="columns">
          <div class="column">
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
