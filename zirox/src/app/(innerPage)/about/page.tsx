import Introduction from "@/components/home1/Introduction";
import Projects from "@/components/home1/Projects";
import Team from "@/components/home1/Team";
import HowItWork from "@/components/home1/HowItWork";
import WhyChoose from "@/components/home1/WhyChoose";
import SectionTop from "@/components/shared/SectionTop";

const About = () => {
  return (
    <>
      <SectionTop title={"About Us"} />
      <Introduction />
      <WhyChoose />
      <HowItWork />
      <Projects />
      <Team />
    </>
  );
};

export default About;
