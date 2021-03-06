import Hero from "../Components/Hero";
import HeroTwo from "../Components/HeroTwo";
import Footer from "../Components/Footer";
import SectionTitle from "../Components/SectionTitle";
import Cards from "../Components/Cards";
import ServiceCard from "../Components/ServiceCard";
import MoreButton from "../Components/MoreButton";
import Stats from "../Components/Stats";
import Navabar from "../Components/Navbar";

export default function Home({ navdata }) {
  return (
    <div className=" has-background-light">
      <Navabar props={navdata} />
      <Hero />
      <SectionTitle />

      <div className="container p-4">
        <div className="columns is-multiline p-5">
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1">
            <ServiceCard />
          </div>
        </div>
      </div>

      <MoreButton />

      <div className="container mb-5 has-text-centered">
        <div className="columns mx-5 px-5">
          <Stats />
          <Stats />
          <Stats />
          <Stats />
        </div>
      </div>
      <HeroTwo />
      <SectionTitle />
      <div className="container is-fullwidth">
        <div className="columns is-centered is-multiline p-5">
          <div className="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1  has-text-centered has-image-centered">
            <ServiceCard />
          </div>
          <div className="column is-one-quarter p-1  has-text-centered has-image-centered">
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
      <div className="container">
        <div className="columns">
          <div className="column">
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Home.getInitialProps = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/v2/pages/");
  const data = await response.json();

  return { navdata: data };
};
