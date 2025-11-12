'use client'
import { servicesData } from "./ServicesData";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Details = () => {
  const searchParams = useSearchParams();
  const urlServiceId = searchParams.get('service');
  
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  
  useEffect(() => {
    if (urlServiceId) {
      setSelectedServiceId(parseInt(urlServiceId));
    }
  }, [urlServiceId]);
  
  const selectedService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const handleServiceClick = (id: number) => {
    setSelectedServiceId(id);
    window.history.pushState({}, '', `/services-details?service=${id}`);
  };

  return (
    <section className="zirox-services-details zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a' }}>All Services</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    style={{
                      padding: '15px 20px',
                      backgroundColor: selectedServiceId === service.id ? '#da242b' : '#f8f9fa',
                      color: selectedServiceId === service.id ? '#fff' : '#333',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedServiceId !== service.id) {
                        e.currentTarget.style.backgroundColor = '#e8e9ea';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedServiceId !== service.id) {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }
                    }}
                  >
                    {service.id}. {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-9">
            <div className="zirox-services-details__left" style={{ maxWidth: '100%' }}>
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '10px', color: '#da242b' }}>
                  {selectedService.id}. {selectedService.title}
                </h2>
                <h3 style={{ fontSize: '24px', fontWeight: '500', color: '#333', marginBottom: '30px' }}>
                  {selectedService.subtitle}
                </h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', marginBottom: '30px' }}>
                  {selectedService.description}
                </p>
                {selectedService.features && (
                  <div style={{ marginTop: '30px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                      Our Comprehensive Solutions Include:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: '20px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, top: '5px', color: '#da242b', fontSize: '20px' }}>•</span>
                          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', margin: 0 }}>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
