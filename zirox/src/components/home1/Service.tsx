import Link from "next/link";

const Service = () => {
  const services = [
    {
      title: "Company Registration & Business Setup",
      description: "Launch Your Business Seamlessly. We manage the entire company registration process, from choosing the right legal structure to filing all necessary documents.",
      icon: "flaticon-business-analyst",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop"
    },
    {
      title: "Workspaces and Offices",
      description: "Find Your Ideal Business Environment. Whether you need a prestigious office or flexible shared workspaces, we offer premium physical office solutions.",
      icon: "flaticon-web-design",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop"
    },
    {
      title: "Virtual Office & Remote Business",
      description: "Establish a Professional Presence Anywhere. Our Virtual Office service provides you with a reputable business address and professional services.",
      icon: "flaticon-design",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
    },
    {
      title: "Accounting & Tax Advisory",
      description: "Optimize Your Finances and Ensure Compliance. Our certified accountants provide end-to-end support for all your financial needs.",
      icon: "flaticon-business-analyst",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop"
    },
    {
      title: "Legal Consulting & Compliance",
      description: "Navigate the Legal Landscape with Confidence. We provide expert legal consultation on commercial, corporate, and employment law matters.",
      icon: "flaticon-web-design",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop"
    },
    {
      title: "Customs Clearance & Trade",
      description: "Simplify Global Logistics and Trade. Our experts handle all aspects of customs clearance, import/export documentation, and tariff classification.",
      icon: "flaticon-design",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop"
    },
    {
      title: "Translation & Notary",
      description: "Ensure Accuracy for Official Documents. We provide certified translation services and notary attestations for all business and legal documents.",
      icon: "flaticon-business-analyst",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop"
    },
    {
      title: "Real Estate Solutions",
      description: "Your Foundation for Business Growth. We assist with securing and managing commercial real estate (buying or leasing) for long-term operations.",
      icon: "flaticon-web-design",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop"
    },
    {
      title: "Car Rentals & Corporate Mobility",
      description: "Seamless Corporate Travel and Fleet Management. We offer comprehensive car rental solutions, from short-term executive rentals to long-term fleet leasing.",
      icon: "flaticon-design",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop"
    },
    {
      title: "Worldwide Transportation",
      description: "Global Logistical Support. We arrange and manage complex worldwide transportation solutions for both personnel and cargo.",
      icon: "flaticon-business-analyst",
      image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="zirox-services zirox-services--home-2 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Our Services
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-center">
          Comprehensive Business Solutions for Kosovo
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Link data-aos="fade-up" data-aos-delay={index * 100} href="/services-details">
                <div className="zirox-services-box zirox-services-box--home-2">
                  <div className="zirox-services-box-img">
                    <img width={352} height={352} style={{width:"100%", height:"auto"}} src={service.image} alt={service.title} />
                    <div className="zirox-services-box-img-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <div className="zirox-services-box-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
