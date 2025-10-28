import Image from "next/image";

const HowItWork = () => {
  return (
    <section className="zirox-how-it-work zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          How We Work
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Our Process for Business Success
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <Image width={356} height={237} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=450&h=300&fit=crop" alt="Consultation" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-back-end"></i>
                </div>
                <h6 className="text-center">Step 01</h6>
                <h3 className="text-center">Initial Consultation</h3>
                <p className="text-center">We analyze your business needs and create a customized plan for your success in Kosovo and the Balkans.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="300" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <Image width={356} height={237} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=450&h=300&fit=crop" alt="Documentation" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-planning-1"></i>
                </div>
                <h6 className="text-center">Step 02</h6>
                <h3 className="text-center">Documentation & Setup</h3>
                <p className="text-center">We handle all paperwork, legal requirements, and company registration for seamless establishment.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="600" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <Image width={356} height={237} sizes="100vw" style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=450&h=300&fit=crop" alt="Launch & Support" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-development"></i>
                </div>
                <h6 className="text-center">Step 03</h6>
                <h3 className="text-center">Launch & Support</h3>
                <p className="text-center">We provide ongoing support for accounting, legal compliance, and operational management.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
