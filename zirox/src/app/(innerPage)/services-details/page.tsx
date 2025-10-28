import WhyChoose from "@/components/home1/WhyChoose";
import Details from "@/components/service/Details";
import SectionTop from "@/components/shared/SectionTop";

const ServiceDetails = () => {
  return (
    <>
      <SectionTop title={"Service Details"} />
      <Details />
      <WhyChoose />
    </>
  );
};

export default ServiceDetails;
