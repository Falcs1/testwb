import WhyChoose from "@/components/home1/WhyChoose";
import Projects from "@/components/home1/Projects";
import SectionTop from "@/components/shared/SectionTop";

const Portfolio = () => {
  return (
    <>
      <SectionTop title={"Portfolio"} />
      <Projects />
      <WhyChoose />
    </>
  );
};

export default Portfolio;
