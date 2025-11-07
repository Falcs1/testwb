import Image from "next/image";

import { getAssetPath } from "@/utils/basePath";

const Footer = () => {
  return (
    <footer className="zirox-footer zirox-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div data-aos="fade-up" className="zirox-footer__about text-center">
              <img src={getAssetPath("/img/Logo.png")} alt="Logo" style={{ margin: '0 auto 20px' }} />
              <p className="zirox-footer__about-text">Welcome to BMS - Business Management Services. Your premier consulting partner for business establishment, management, and growth in Kosovo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="zirox-footer__bar">
        <div className="container">
          <div className="zirox-footer__bar-content">
            <a href="#" className="zirox-footer__bar-content-scroll-top scrollUp">
              <i className="flaticon-up-arrow"></i>
            </a>
            <p>&copy; Copyright {new Date().getFullYear()} BMS - Business Management Services - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
