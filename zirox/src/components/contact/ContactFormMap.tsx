const ContactFormMap = () => {
  return (
    <section className="zirox-contact zirox-contact--single">
      <div className="zirox-contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.2!2d21.151949210714154!3d42.65698338360255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM5JzI1LjEiTiAyMcKwMDknMDcuMCJF!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
          width="100%"
          height={450}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <h2>Work with us</h2>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="zirox-contact__left">
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-place"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Address</h3>
                  <address>Str. Ukshin Hoti, Marigona Tower<br/>12th floor<br/>10000 Prishtina, Kosovo</address>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-open-mail-1"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Email</h3>
                  <a href="mailto:info@bms-kos.com">info@bms-kos.com</a>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-call"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Work With Us</h3>
                  <p style={{margin: 0}}>Contact us via email for business inquiries and consultations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-8">
            <div className="zirox-contact__right">
              <div className="zirox-contact__right-form">
                <form action="/" method="POST" id="contact-form">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="email" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="phone" id="phone" placeholder="Phone" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="Subject" id="Subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" placeholder="Your Message" style={{minHeight:"200px"}}></textarea>
                    </div>
                  </div>
                  <button className="zirox-button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
