import HowItWork from "@/components/home1/HowItWork";
import Info from "@/components/home1/Info";
import WhyChoose from "@/components/home1/WhyChoose";
import PopularServices from "@/components/home1/Service";
import SectionTop from "@/components/shared/SectionTop";

const Services = () => {
  return (
    <>
      <SectionTop title={"Services"} />
      <PopularServices />
      <Info />
      <HowItWork />
      <WhyChoose />
    </>
  );
};

export default Services;
