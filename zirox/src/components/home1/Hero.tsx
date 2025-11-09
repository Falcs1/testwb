'use client'

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [temperature, setTemperature] = useState('18');
  let sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const kosovoTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Belgrade', // Kosovo uses Central European Time (same as Belgrade)
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(kosovoTime);
    };

    // Update time immediately
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };
  return (
    <>
      <section className="zirox-hero-section zirox-hero-section--home-2">

        <div className="container-fluid">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...settings}
            className="home-2-hero-slider"
          >
            {/* <!-- Slider Item --> */}
            <div className="zirox-hero__slider-item zirox-hero" style={{ position: 'relative' }}>
              {/* Background Image for Slide 1 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                <img 
                  src="/img/photo1.png" 
                  alt="" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.45
                  }}
                />
              </div>
              <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-8 d-flex align-items-center px-0">
                    <div className="zirox-hero__content" data-aos="fade-up" data-aos-duration="1">
                      <h1 className="text-white">
                        Your business, <br /> our expertise.
                      </h1>
                      <Link href="/contact" className="zirox-button zirox-button-primary ">
                        Contact Us
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Item End --> */}

            {/* <!-- Slider Item --> */}
            <div className="zirox-hero__slider-item zirox-hero" style={{ position: 'relative' }}>
              {/* Background Image for Slide 2 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                <img 
                  src="/img/photo2.png" 
                  alt="" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.45
                  }}
                />
              </div>
              <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-8 d-flex align-items-center px-0">
                    <div className="zirox-hero__content" data-aos="fade-up" data-aos-duration="1">
                      <h1 className=" text-white">
                        BMS CONSULTING <br /> Kosovo
                      </h1>
                      <Link href={"/contact"} className="zirox-button zirox-button-primary ">Contact Us</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Item End --> */}
          </Slider>
        </div>
        <ul className="zirox-hero-section__time">
          <li>
            <i className="flaticon-sun"></i>
            <p>TODAY: {temperature} °C</p>
          </li>
          <li>
            <i className="flaticon-clock"></i>
            <p>TIME: {currentTime || 'Loading...'}</p>
          </li>
        </ul>
        <div className="zirox-hero-section__slider-btn">
          <button onClick={next} className="zirox-hero-section__slider-btn__next">
            <i className="flaticon-right-arrow-2"></i>
          </button>
          <button onClick={previous} className="zirox-hero-section__slider-btn__prev">
            <i className="flaticon-left-arrow-2"></i>
          </button>
        </div>
        <div className="zirox-hero-section__service">
          <div className="container" data-aos="fade-up" data-aos-duration="1">
            <ul>
              <li>
                <p>*</p>
                <h3>Business Setup</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Legal Consulting</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Accounting</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Real Estate</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
