'use client'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Business Excellence Award",
      description: "Kosovo Chamber of Commerce",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Certified Consultants",
      description: "Professional Accreditation",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Tax Advisory License",
      description: "Ministry of Finance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="zirox-section">
      <div className="container">
        <div className="row">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#333' }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
