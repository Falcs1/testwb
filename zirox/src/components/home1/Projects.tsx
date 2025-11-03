'use client'
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [filterKey, setFilterKey] = useState("all");

  const portfolioItems = [
    { id: 1, category: "consulting", title: "Business Consulting", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop" },
    { id: 2, category: "legal", title: "Legal Services", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=500&fit=crop" },
    { id: 3, category: "office", title: "Office Solutions", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop" },
    { id: 4, category: "consulting", title: "Financial Advisory", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=500&fit=crop" },
  ];


  const filterItems = [
    {
      category: 'all',
      title: 'All'
    }
  ]

  portfolioItems.forEach((item) => {
    const exists = filterItems.some(({ category }) => category === item.category)
    if (!exists) {
      filterItems.push({
        category: item.category,
        title: item.title
      })
    }
  })

  // Filter portfolio items based on the selected filterKey
  const filteredPortfolioItems = filterKey === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterKey);

  return (
    <section className="zirox-latest-projects zirox-section">
      <div className="container position-relative z-1">
        <div className="zirox-latest-projects__header">
          <div className="zirox-latest-projects__header-left">
            <h6 data-aos="fade-up" className="text-center text-xl-start">
              Latest Projects
            </h6>
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-center text-xl-start text-white">
              Explore Our Best Recently Completed Projects
            </h2>
          </div>
          <div className="zirox-latest-projects__header-right">
            <ul className="zirox-latest-projects__header-right__tab">
              {filterItems.map(({ category, title }) => (
                <li key={category} onClick={() => setFilterKey(category)}>
                  <button className={`zirox-latest-projects__header-right__tab-link filter ${filterKey == category && "active"}`}>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row position-relative z-1">
          {filteredPortfolioItems.map(({ id, category, image, title }) => (
            <div key={id} className={`col-12 col-md-6 col-lg-3 filter-item ${category}`}>
              <Link href="/portfolio-details">
                <div className="zirox-latest-projects-item">
                  <div className="zirox-latest-projects-item-img">
                    <img width={408} height={408} style={{ width: "100%", height: "auto" }} src={image} alt="" className="img-fluid" />
                  </div>
                  <div className="zirox-latest-projects-item-info">
                    <h3>{title}</h3>
                    <p>Marketing, Consultant</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
