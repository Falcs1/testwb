import TeamMembers from "@/components/home1/Team";
import WhyChoose from "@/components/home1/WhyChoose";
import SectionTop from "@/components/shared/SectionTop";

const Team = () => {
  return (
    <>
      <SectionTop title={"Team"} />
      <TeamMembers />
      <WhyChoose />
    </>
  );
};

export default Team;
