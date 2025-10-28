import Image from "next/image";

const Details = () => {
  return (
    <section className="zirox-portfolio-detail zirox-section">
      <div className="container">
        <div className="zirox-portfolio-detail-items">
          <div className="zirox-portfolio-detail-items-item">
            <div className="zirox-portfolio-detail-items-item-img">
              <Image width={1296} height={540} sizes="100vw" src="/img/portfolio/portfolio-detail.png" alt="Business Analysis" />
            </div>
            <div className="zirox-portfolio-detail-items-item-info ">
              <div className="row align-items-center">
                <div className="col-6 col-md line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Clients:</p>
                    <h4>John brown</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Category:</p>
                    <h4>Graphic, Illustrations</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Date:</p>
                    <h4>20 may, 2024</h4>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <ul className="zirox-portfolio-detail-items-item-info-socials">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="zirox-portfolio-detail-items-item-title">Business Analysis</h3>
            <p className="zirox-portfolio-detail-items-item-text">Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit massa fringilla leo orci dolors sit amet elit amet</p>

            <p className="zirox-portfolio-detail-items-item-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, humour and the like.
            </p>
          </div>
        </div>
        <div className="zirox-portfolio-detail-btns">
          <a href="#" className="zirox-portfolio-detail-btns-prev">
            <i className="flaticon-left-arrow"></i> Previous
          </a>
          <a href="#" className="zirox-portfolio-detail-btns-next">
            Next<i className="flaticon-right-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Details;
