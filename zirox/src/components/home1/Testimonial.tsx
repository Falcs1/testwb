'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Michael Anderson",
      position: "CEO, Tech Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
      text: "BMS CONSULTING made establishing our company in Kosovo incredibly smooth. Their expertise in legal compliance and business registration saved us months of work. They handled everything from documentation to finding the perfect office space. Highly recommended for any international business looking to expand in the Balkans!",
      address: "Michael Anderson - London, UK",
    },
    {
      name: "Sarah Martinez",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      text: "Outstanding service! The team at BMS helped us navigate all the tax and legal requirements seamlessly. Their accounting services are professional and reliable.",
      address: "Sarah Martinez - Madrid, Spain",
    },
    {
      name: "David Chen",
      position: "Founder, Import/Export",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      text: "Their customs clearance and international trade support have been invaluable for our business. BMS CONSULTING truly understands the complexities of doing business in the Balkans and provides excellent solutions for every challenge we face.",
      address: "David Chen - Shanghai, China",
    },
    {
      name: "Emma Johnson",
      position: "Managing Partner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
      text: "Professional, efficient, and always available to help. BMS CONSULTING has been our trusted partner for 3 years now. Their virtual office service is perfect for our remote operations.",
      address: "Emma Johnson - New York, USA",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging: (i: number) => (
      <div className="avatars__img">
        <i className="flaticon-plus"></i>
        <Image 
          src={testimonials[i]?.image || '/img/placeholder.png'} 
          alt={`Author ${i + 1}`}
          width={150}
          height={150}
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    ),
  };

  return (
    <section className="zirox-testimonials zirox-testimonials--home-2 zirox-section">
      <div className="container position-relative z-1">
        <div className="zirox-testimonials__header">
          <div className="zirox-testimonials__header-text">
            <h6>Our Testimonials</h6>
            <h2 className="text-white">What Our Clients Are Saying?</h2>
          </div>
          <div>
            <a href="#" className="zirox-button">
              Client Feedback
            </a>
          </div>
        </div>
        <Slider {...settings} className="zirox-home-2-testimonials-items">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="zirox-testimonials__item">
              <div className="zirox-testimonials__item-head">
                <div className="zirox-testimonials__item-head-author">
                  <div className="zirox-testimonials__item-head-author-img">
                    <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                    <span>
                      <i className="flaticon-left-quotes-sign"></i>
                    </span>
                  </div>
                  <div className="zirox-testimonials__item-head-author-info">
                    <h3>{testimonial.name}</h3>
                    <h6>{testimonial.position}</h6>
                  </div>
                </div>
                <div className="zirox-testimonials__item-head-vector">
                  <i className="flaticon-quotation"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">&quot;{testimonial.text}&quot;</p>
              <address className="zirox-testimonials__item-address">{testimonial.address}</address>
              <div className="zirox-testimonials__item-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="flaticon-star"></i>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
