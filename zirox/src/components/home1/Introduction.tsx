import Link from "next/link";

const Introduction = () => {
  return (
    <section className="zirox-about zirox-about--introduction zirox-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__left">
              <img width={636} height={566} style={{width:"100%", height:"auto"}} src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=700&fit=crop" alt="Business Meeting" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right">
              <h6 data-aos="fade-up">About Us</h6>
              <h2 data-aos="fade-up" data-aos-delay="200">
                Your business, our expertise.
              </h2>
              <p className="zirox-about__right-text" data-aos="fade-up" data-aos-delay="400">
                BMS CONSULTING is a premier consulting firm dedicated to simplifying the complexities of establishing, managing, and growing a business in Kosovo for the last 7 years. We serve as your single point of contact for every critical operational need, transforming ambitious concepts into fully compliant, efficiently run enterprises.
              </p>
              <p className="zirox-about__right-text" data-aos="fade-up" data-aos-delay="400">
                Our mission is to empower entrepreneurs, startups, and established international firms by eliminating the logistical and administrative barriers to entry and operation. We provide the essential foundation—from legal status to physical infrastructure—allowing you to concentrate fully on core business development and profitability.
              </p>
              <ul data-aos="fade-up" data-aos-delay="600">
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Integrated Solutions</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Guaranteed Compliance</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Efficiency & Speed</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>7 Years Experience</p>
                </li>
              </ul>
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

export default Introduction;
