import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Logo from "./components/logo/Logo";
import CallToAciton from "./components/callToAction/CallToAciton";
import AboutTeam from "./components/aboutTeamSection/AboutTeam";
import Product from "./components/productSection/Product";
import Team from "./components/team/Team";
import WorkSection from "./components/workSection/WorkSection";
import TestimonialSection from "./components/testimonialSection/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo />
      <AboutTeam />
      <Product />
      <Team />
      <WorkSection />
      <TestimonialSection />
      <CallToAciton />
      <Footer />
    </>
  );
}

export default App;
