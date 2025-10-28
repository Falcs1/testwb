import WhyChoose from "@/components/home1/WhyChoose";
import Projects from "@/components/home1/Projects";
import Details from "@/components/portfolio/Details";
import SectionTop from "@/components/shared/SectionTop";

const PortfolioDetails = () => {
  return (
    <>
      <SectionTop title={"Portfolio Details"} />
      <Details />
      <Projects />
      <WhyChoose />
    </>
  );
};

export default PortfolioDetails;
