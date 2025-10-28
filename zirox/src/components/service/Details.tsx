'use client'
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const tabData = [
  {
    id: "specializations",
    title: "Specializations",
    content: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque laudantium, totam
        reaperiam, eaque ipsa quae ab ilnventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsavoluptatem quia voluptas sit aspernatur aut odit aufugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur,
      `,
    listItems: ["Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"],
  },
  {
    id: "intelligence",
    title: "Intelligence",
    content: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque laudantium.
      `,
    listItems: [],
  },
  {
    id: "precautions",
    title: "Precautions",
    content: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quisit magni dolores eos qui ratione voluptatem sequi nesciunt.
      `,
    listItems: ["Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"],
  },
  {
    id: "super-support",
    title: "Super Support",
    content: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quisit magni dolores eos qui ratione voluptatem sequi nesciunt.
      `,
    listItems: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"],
  },
];

const Details = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specializations");
  return (
    <>
      <section className="zirox-services-details zirox-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="zirox-services-details__left">
                <div className="zirox-services-details__left-main-img ">
                  <Image width={556} height={481} sizes="100vw" src="/img/services/services-detail-img-1.png" alt="Main Image" />
                </div>
                <div className="zirox-services-details__left-data-visualization ">
                  <h3>Data Visualization</h3>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>

                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

                  <ul>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate velit</p>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate velit</p>
                    </li>
                  </ul>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequun magni dolores eos qui ratione volsnesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
                </div>
                <div className="zirox-services-details__left-video ">
                  <div className="zirox-services-details__left-video-img">
                    <Image width={556} height={469} sizes="100vw" src="/img/services/services-detail-img-2.png" alt="Video" />
                    <div className="zirox-services-video__popup">
                      <span onClick={() => setOpen(true)} className="cursor-pointer zirox-services-video__popup-img popup-youtube">
                        <span>
                          <i className="flaticon-play-button"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
                </div>
                <div className="zirox-services-details__left-tab">
                  <ul className="zirox-services-details__left-tab-links">
                    {tabData.map((tab) => (
                      <li key={tab.id}>
                        <button className={`zirox-services-details__left-tab-links-link ${activeTab === tab.id ? "zirox-services-details__left-tab-links-link--active" : ""}`} onClick={() => setActiveTab(tab.id)}>
                          {tab.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {tabData.map(
                    (tab) =>
                      activeTab === tab.id && (
                        <div key={tab.id} className="zirox-services-details__left-tab-content">
                          <p>{tab.content}</p>
                          {tab.listItems.length > 0 && (
                            <ul>
                              {tab.listItems.map((item, index) => (
                                <li key={index}>
                                  <i className="flaticon-play-3"></i>
                                  <p>{item}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ),
                  )}
                </div>
                <div className="zirox-services-details__left-marketing-strategy ">
                  <div className="row">
                    <div className="col-12 col-lg-5">
                      <div className="zirox-services-details__left-marketing-strategy-img">
                        <Image width={342} height={395} sizes="100vw" src="/img/services/services-detail-img-3.png" alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="zirox-services-details__left-marketing-strategy-text">
                        <h3>Marketing Strategy</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <ul>
                          <li>
                            <span>
                              <i className="flaticon-check"></i>
                            </span>
                            <p>The business application</p>
                          </li>
                          <li>
                            <span>
                              <i className="flaticon-check"></i>
                            </span>
                            <p>velit esse cillum dolore eu</p>
                          </li>
                          <li>
                            <span>
                              <i className="flaticon-check"></i>
                            </span>
                            <p>Duis aute dolor in volupte</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="zirox-services-details__right">
                <div className="zirox-services-details__right-box ">
                  <h3>Search</h3>
                  <div className="zirox-services-details__right-box-search">
                    <input type="text" placeholder="Search.." />
                    <div className="zirox-services-details__right-box-search-btn">
                      <button>
                        <i className="flaticon-search-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="zirox-services-details__right-box ">
                  <h3>Services Category</h3>
                  <div className="zirox-services-details__right-box-category-btns">
                    <a href="#">
                      UI/UX Designing <i className="flaticon-right-arrow"></i>
                    </a>
                    <a href="#">
                      Website Development <i className="flaticon-right-arrow"></i>
                    </a>
                    <a href="#">
                      Marketing Strategy <i className="flaticon-right-arrow"></i>
                    </a>
                    <a href="#">
                      Digital Product <i className="flaticon-right-arrow"></i>
                    </a>
                    <a href="#">
                      Modern Designin <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
                <div className="zirox-services-details__right-box ">
                  <h3>Have Your Question</h3>
                  <div className="zirox-services-details__right-box-ques">
                    <form>
                      <div className="zirox-services-details__right-box-ques-input">
                        <input type="text" placeholder="Name" />
                        <i className="flaticon-user"></i>
                      </div>
                      <div className="zirox-services-details__right-box-ques-input">
                        <textarea  placeholder="Your Message"></textarea>
                        <i className="flaticon-open-mail"></i>
                      </div>
                      <button className="zirox-button">Submit Now</button>
                    </form>
                  </div>
                </div>
                <div className="zirox-services-details__right-box ">
                  <div className="zirox-services-details__right-box-download-btns">
                    <a href="#" download>
                      Download Doc <i className="flaticon-cloud-download"></i>
                    </a>
                    <a href="#" download>
                      Download Pdf <i className="flaticon-pdf"></i>
                    </a>
                  </div>
                </div>
                <div className="zirox-services-details__right-box zirox-services-details__right-box--support ">
                  <div className="zirox-services-details__right-box-support-content">
                    <h3>We Are Always Support</h3>
                    <p>Great fruit grass their are first over spirit good whose very subdue</p>
                    <a href="contact.html" className="zirox-button">
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default Details;
