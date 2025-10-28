import Image from "next/image";

const TeamMembers = () => {
  return (
    <section className="zirox-team zirox-team--home-2 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Our Team
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center ">
          Meet Our Professional Consultants
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" className="zirox-team-item ">
              <Image width={306} height={363} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" alt="Business Consultant" />
              <div className="zirox-team-item__info">
                <p className="text-center">Business Consultant</p>
                <h3 className="text-center">Senior Advisor</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="300" className="zirox-team-item ">
              <Image width={306} height={363} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" alt="Legal Expert" />
              <div className="zirox-team-item__info">
                <p className="text-center">Legal Expert</p>
                <h3 className="text-center">Compliance Specialist</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="600" className="zirox-team-item ">
              <Image width={306} height={363} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop" alt="Financial Advisor" />
              <div className="zirox-team-item__info">
                <p className="text-center">Financial Advisor</p>
                <h3 className="text-center">Tax Specialist</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="900" className="zirox-team-item ">
              <Image width={306} height={363} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop" alt="Operations Manager" />
              <div className="zirox-team-item__info">
                <p className="text-center">Operations Manager</p>
                <h3 className="text-center">Project Lead</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
