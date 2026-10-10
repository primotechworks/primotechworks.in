import Footer from "@/components/footers/Footer8";
import Header from "@/components/headers/Header9";
import Home from "@/components/homes/home-9";
import Hero from "@/components/homes/home-9/heros/Hero1";
import { slickMultipages } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  description:
    "Primo Techworks builds smarter digital products: software engineering, technical architecture, UX/UI and delivery consulting from Ahmedabad, India.",
};
export default function Home9MainDemoMultiPage() {
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header links={slickMultipages} />
          </nav>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <div className="bg-shape-2 wow fadeIn">
                <Image
                  src="/assets/images/demo-slick/bg-shape-2.svg"
                  width={858}
                  height={804}
                  alt=""
                />
              </div>
              <Hero />
            </section>

            <Home onePage />
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
