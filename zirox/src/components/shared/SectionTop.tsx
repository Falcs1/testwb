// import { Link } from "react-router-dom";

import Link from "next/link";

const SectionTop = ({ title }: { title: string }) => {
  return (
    <section className="zirox-hero-section zirox-hero-section--single">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 d-flex align-items-center">
            <div className="zirox-hero__left">
              <div className="zirox-hero__left__content">
                <h1 className="text-white">{title}</h1>
                <ul className="zirox-breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a>{title}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
