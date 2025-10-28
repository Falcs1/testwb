import { BlogDataType, blogPosts } from "@/assets/data/blogs";
import Image from "next/image";

const Details = ({ id }: { id: string }) => {
  const findBlog = blogPosts.find((blog) => blog.id == id);

  if (!findBlog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="zirox-blog-detail zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="zirox-blog-detail__left">
              <div className="zirox-blog-detail__left-blog">
                <div className="zirox-blog-detail__left-blog-img ">
                  <Image width={856} height={472} sizes="100vw" style={{width:"100%", height:"auto"}} src={findBlog.thumb} alt="Marketing" />
                </div>
                <div className="zirox-blog-detail__left-blog-content ">
                  <ul className="zirox-blog-detail__left-blog-content-head">
                    <li>
                      <a href="#">
                        <i className="flaticon-bookmark"></i>
                        <p>Corporate</p>
                      </a>
                    </li>
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
                  <h3 className="zirox-blog-detail__left-blog-content-title">{findBlog.title}</h3>

                  <p className="zirox-blog-detail__left-blog-content-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>

                  <p className="zirox-blog-detail__left-blog-content-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                  <div className="icon-text">
                    <i className="flaticon-left-quotes-sign"></i>
                    <p className="zirox-blog-detail__left-blog-content-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilnventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </div>

                  <ul className="list">
                    <li>
                      <i className="flaticon-play-3"></i>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium consequat.</p>
                    </li>
                    <li>
                      <i className="flaticon-play-3"></i>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,volupta</p>
                    </li>
                    <li>
                      <i className="flaticon-play-3"></i>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt accusantium </p>
                    </li>
                  </ul>
                  <p className="zirox-blog-detail__left-blog-content-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                  <p className="zirox-blog-detail__left-blog-content-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam{" "}
                  </p>

                  <div className="row mt-5">
                    <div className="col-12 col-lg-6">
                      <div className="zirox-blog-detail__left-blog-content-tags">
                        <button>Office</button>
                        <button>Design</button>
                        <button>Business</button>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <ul className="zirox-blog-detail__left-blog-content-socials">
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
                <div className="zirox-blog-detail__left-blog-author">
                  <div className="zirox-blog-detail__left-blog-author-img">
                    <Image width={100} height={100} sizes="100vw" src="/img/blog/blog-detail-author.png" alt="Author" />
                  </div>
                  <div className="zirox-blog-detail__left-blog-author-info">
                    <h3>
                      <a href="#">Michel Balak</a>
                    </h3>
                    <p>Them cattle had their you&apos;re female, living seed firmament earth saying mud you dark make heaven face carribian surface saying without.</p>
                    <ul className="zirox-blog-detail__left-blog-author-info-socials">
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
                <div className="zirox-blog-detail__left-blog-comments">
                  <h3>Comments ( 2)</h3>
                  <div className="zirox-blog-detail__left-blog-comments-items">
                    <div className="zirox-blog-detail__left-blog-comments-items-item">
                      <div className="zirox-blog-detail__left-blog-comments-items-item-author-img">
                        <Image width={100} height={100} sizes="100vw" src="/img/blog/blog-detail-author-2.png" alt="Author" />
                      </div>
                      <div>
                        <h4>
                          <a href="#">John Abraham</a>
                        </h4>
                        <p>Blessed heaven in seasons man were image void seasons given bearing greats fly multiply every deed you can surem dolor mesurement good.</p>
                        <ul className="zirox-blog-detail__left-blog-comments-items-item-date">
                          <li>
                            <p>February 03. 2021</p>
                          </li>
                          <li>
                            <a href="#">Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="zirox-blog-detail__left-blog-comments-items-item">
                      <div className="zirox-blog-detail__left-blog-comments-items-item-author-img">
                        <Image width={100} height={100} sizes="100vw" src="/img/blog/blog-detail-author-3.png" alt="Author" />
                      </div>
                      <div>
                        <h4>
                          <a href="#">Manira Roy</a>
                        </h4>
                        <p>Blessed heaven in seasons man were image void seasons given bearing greats fly</p>
                        <ul className="zirox-blog-detail__left-blog-comments-items-item-date">
                          <li>
                            <p>February 03. 2021</p>
                          </li>
                          <li>
                            <a href="#">Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zirox-blog-detail__left-blog-reply ">
                  <h3>Leave A Reply</h3>
                  <form>
                    <div className="row gap-4">
                      <div className="col-12">
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="col-12">
                        <input type="email" id="email" name="name" placeholder="Email Address" />
                      </div>
                      <div className="col-12">
                        <textarea name="comment" id="comment" placeholder="Write Comment" style={{minHeight:"200px"}}></textarea>
                      </div>
                    </div>
                    <button className="zirox-button">Post Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="zirox-blog-detail__right">
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--search">
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
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--category">
                <h3>Category</h3>
                <div className="zirox-blog-standard__right-box-category-btns">
                  <a href="#">
                    IT Consultancy <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    UI/UX Strategy <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Marketing Strategy <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Web Development <i className="flaticon-right-arrow"></i>
                  </a>
                  <a href="#">
                    Product Designs <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--latest-news">
                <h3>Latest News</h3>
                <ul className="zirox-blog-standard__right-box-latest-news">
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <Image width={72} height={72} src="/img/blog/blog-detail-latest-news-1.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Sed non odio non elit sem gravida</h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <Image width={72} height={72} src="/img/blog/blog-detail-latest-news-2.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Sed non odio non elit sem gravid</h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="zirox-blog-standard__right-box-latest-news-list">
                      <div className="zirox-blog-standard__right-box-latest-news-list-img">
                        <Image width={72} height={72} src="/img/blog/blog-detail-latest-news-3.png" alt="Latest News" />
                      </div>
                      <div className="zirox-blog-standard__right-box-latest-news-list-text">
                        <h4>Sed non odio non elit sem gravida </h4>
                        <p>12 May 2021</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="zirox-blog-detail__right-box-query">
                <div className="zirox-blog-detail__right-box-query-content">
                  <h3>Have Any Query?</h3>
                  <p>Great fruit grass their are first over spirit good whose very subdue</p>
                  <a href="contact.html" className="zirox-button">
                    Send Message
                  </a>
                </div>
              </div>
              <div className="zirox-blog-standard__right-box zirox-blog-standard__right-box--tags">
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
    </section>
  );
};

export default Details;
