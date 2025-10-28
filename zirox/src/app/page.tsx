// import Blog from "@/components/home1/Blog";
import Blog from "@/components/home1/Blog";
import Header from "@/components/home1/Header";
import Hero from "@/components/home1/Hero";
import HowItWork from "@/components/home1/HowItWork";
import Info from "@/components/home1/Info";
import Introduction from "@/components/home1/Introduction";
import Pricing from "@/components/home1/Pricing";
import Projects from "@/components/home1/Projects";
import Service from "@/components/home1/Service";
import TeamMembers from "@/components/home1/Team";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Footer from "@/components/home1/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Info />
      <Service />
      <Projects />
      <Pricing />
      <HowItWork />
      <WhyChoose />
      <TeamMembers />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
