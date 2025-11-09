import Link from "next/link";

const AboutUsDetailed = () => {
  return (
    <section className="zirox-about zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-5">
              <h6 data-aos="fade-up" style={{ color: '#e74c3c', textTransform: 'uppercase', fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>
                About Us
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
                Your business, our expertise.
              </h2>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div data-aos="fade-up" data-aos-delay="400">
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                BMS CONSULTING is a premier consulting firm dedicated to simplifying the complexities of establishing, managing, and growing a business in Kosovo for the last 7 years. We serve as your single point of contact for every critical operational need, transforming ambitious concepts into fully compliant, efficiently run enterprises.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div data-aos="fade-up" data-aos-delay="500">
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#333' }}>Our Mission</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                Our mission is to empower entrepreneurs, startups, and established international firms by eliminating the logistical and administrative barriers to entry and operation. We provide the essential foundation—from legal status to physical infrastructure—allowing you to concentrate fully on core business development and profitability.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#333' }}>What We Do</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                We offer an unparalleled, integrated suite of services designed to provide turnkey solutions for all aspects of your business lifecycle:
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                  • Establishment & Compliance
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', paddingLeft: '20px' }}>
                  We handle Company Registration & Business Setup, ensuring legal structures and operational licenses are secured efficiently. We safeguard your interests through expert Legal Consulting & Compliance and proactive Accounting & Tax Advisory.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                  • Infrastructure & Location
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', paddingLeft: '20px' }}>
                  We secure your physical and virtual presence, offering premium Workspaces and Offices, flexible Virtual Office & Remote Business Management, and strategic advice on Real Estate Solutions.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                  • Logistics & Mobility
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', paddingLeft: '20px' }}>
                  We keep your business moving globally and locally with efficient Customs Clearance & International Trade Support, reliable Car Rentals & Corporate Mobility, and comprehensive Worldwide Transportation Services.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                  • Administrative Support
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', paddingLeft: '20px' }}>
                  We ensure official processes are flawless with our certified Translation and Notary Attestations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div data-aos="fade-up" data-aos-delay="700">
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#333' }}>The BMS CONSULTING Advantages</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                In today's fast-paced environment, simplicity is key. By offering this broad range of specialized services under one roof, we provide:
              </p>
              
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                      Integrated Solutions
                    </h4>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                      No more coordinating multiple vendors. We deliver cohesive, end-to-end support that is designed to work together seamlessly.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                      Guaranteed Compliance
                    </h4>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                      Our expertise ensures you meet all local and international regulatory requirements, minimizing risk and securing your business future.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', height: '100%' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#e74c3c' }}>
                      Efficiency & Speed
                    </h4>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                      We accelerate your time-to-market by streamlining bureaucratic processes, getting your business operating smoothly and quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div data-aos="fade-up" data-aos-delay="800">
              <p style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                Partner with BMS CONSULTING and gain the clarity, support, and infrastructure you need to succeed.
              </p>
              <Link href="/contact" className="zirox-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetailed;
