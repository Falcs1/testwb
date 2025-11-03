'use client'
import SectionTop from "@/components/shared/SectionTop";
import { getAssetPath } from "@/utils/basePath";

const partnersData = [
  {
    id: 1,
    name: "Connect Kosovo",
    logo: "/img/partners/connect.png",
    website: "https://connect-kos.com"
  },
  {
    id: 2,
    name: "Erida",
    logo: "/img/partners/erida.png",
    website: "https://www.erida.com.tr"
  },
  {
    id: 3,
    name: "ISS Global Forwarding",
    logo: "/img/partners/iss.jpg",
    website: "https://www.iss-gf.com"
  },
  {
    id: 4,
    name: "Servis Shped",
    logo: "/img/partners/servishped.png",
    website: "https://www.facebook.com/servisshped/"
  },
  {
    id: 5,
    name: "Digi Printi",
    logo: "/img/partners/digi.png",
    website: "https://www.digiprinti.com"
  },
  {
    id: 6,
    name: "Sigal",
    logo: "/img/partners/sigal.png",
    website: "https://www.sigal.com.al"
  }
];

const Partners = () => {
  return (
    <>
      <SectionTop title="Partners" />

      {/* Partners Section */}
      <section className="zirox-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="zirox-section-title text-center">
                <h6 data-aos="fade-up">Our Partners</h6>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  Trusted Business Partners
                </h2>
                <p data-aos="fade-up" data-aos-delay="400">
                  We work with leading companies across various industries to provide comprehensive business solutions in Kosovo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {partnersData.map(({ id, name, logo, website }) => (
              <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div 
                  className="partner-card" 
                  data-aos="fade-up" 
                  data-aos-delay={id * 100}
                  style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                  }}
                  onClick={() => window.open(website, '_blank')}
                >
                  <div style={{ marginBottom: '15px' }}>
                    <img
                      src={getAssetPath(logo)}
                      alt={name}
                      width={120}
                      height={60}
                      style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                  <h5 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: '#333',
                    margin: 0 
                  }}>
                    {name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;