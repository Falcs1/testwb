import { blogPosts } from "@/assets/data/blogs";
import Image from "next/image";
import Link from "next/link";


const BlogListStandard = () => {
  return (
    <div className="zirox-blog-standard zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="zirox-blog-standard__left">
              {blogPosts.slice(0, 4).map(({ id, thumb, title }) => (
                <div key={id} className="zirox-blog-standard__left-blog">
                  <div className="zirox-blog-standard__left-blog-img">
                    <Image width={856} height={447} sizes="100vw" style={{width:"100%", height:"auto"}}  src={thumb} alt="Marketing" />
                    <p className="zirox-blog-standard__left-blog-img-date">
                      20
                      <br />
                      June
                    </p>
                  </div>
                  <div className="zirox-blog-standard__left-blog-content">
                    <ul className="zirox-blog-standard__left-blog-content-head">
                      <li>
                        <a href="#">
                          <i className="flaticon-user"></i>
                          <p>Paul Smith</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-chat-3"></i>
                          <p> 0 Comment</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-heart"></i>
                          <p> 0 Like</p>
                        </a>
                      </li>
                    </ul>
                    <h3 className="zirox-blog-standard__left-blog-content-title">
                      <Link href={`/blog/${id}`}>{title}</Link>
                    </h3>
                    <p className="zirox-blog-standard__left-blog-content-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>
                    <p className="zirox-blog-standard__left-blog-content-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                    <div className="zirox-blog-standard__left-blog-content-read-more">
                      <Link href={`/blog/${id}`}>
                        Read more
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="zirox-blog-standard__left-pagination">
                <nav aria-label="...">
                  <ul className="pagination pagination-lg">
                    <li className="page-item " aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link next-btn" href="#">
                        <i className="flaticon-right-arrow-2"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="zirox-blog-standard__right">
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--search  ">
                <h3>Search</h3>
                <div className="zirox-blog-standard__right-box-search">
                  <input type="text" placeholder="Search.." />
                  <div className="zirox-blog-standard__right-box-search-btn">
                    <button>
                      <i className="flaticon-search-1"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--category ">
                <h3>Category</h3>
                <div className="zirox-blog-standard__right-box-category-btns">
                  <a href="#">
                    Financial Consulting <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Design & Branding <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Marketing Strategy <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Team Augmentation <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Strategy Innovation <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--latest-news ">
                <h3>Latest News</h3>
                <ul className="zirox-blog-standard__right-box-latest-news">
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <img src="/img/blog/blog-standard-latest-news-1.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Excepteur sint occaecat cupidatat non proident, sunt in</h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <img src="/img/blog/blog-standard-latest-news-2.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Excepteur sint occaecat cupidatat non proident, sunt in</h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <img src="/img/blog/blog-standard-latest-news-3.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Excepteur sint occaecat cupidatat non proident, sunt in</h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--tags ">
                <h3>Tags Cloud</h3>
                <ul className="zirox-blog-standard__right-box-tags">
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Planing</a>
                  </li>
                  <li>
                    <a href="#">Art Finance</a>
                  </li>
                  <li>
                    <a href="#">Love</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListStandard;
