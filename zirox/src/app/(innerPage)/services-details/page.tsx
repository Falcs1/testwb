import { Suspense } from "react";
import WhyChoose from "@/components/home1/WhyChoose";
import Details from "@/components/service/Details";
import SectionTop from "@/components/shared/SectionTop";

const ServiceDetails = () => {
  return (
    <>
      <SectionTop title={"Service Details"} />
      <Suspense fallback={<div>Loading...</div>}>
        <Details />
      </Suspense>
      <WhyChoose />
    </>
  );
};

export default ServiceDetails;
