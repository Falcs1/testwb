'use client'
import { menu } from "@/assets/data/menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [submenu, setSubmenu] = useState<number>();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSubmenu = (id: number) => {
    if (submenu == id) {
      setSubmenu(0);
    } else {
      setSubmenu(id);
    }
  };
  return (
    <>
      {/* <!-- Overlay --> */}
      <div onClick={() => setMobileMenu(false)} className={`overlay ${mobileMenu && "overlay--active"}`}></div>
      {/* <!-- Header --> */}
      <header className="zirox-header zirox-header--home-2">
        <div className="zirox-header__top-bar zirox-header__top-bar--home-2 d-none d-xl-block">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col">
                <div className="zirox-header__top-bar-left">
                  <ul>
                    <li className="zirox-header__top-bar-left-icon-box">
                      <i className="flaticon-place"></i>
                      <a href="#">Str. Ukshin Hoti, Marigona Tower 12th floor, Prishtina, Kosovo</a>
                    </li>
                    <li className="zirox-header__top-bar-left-icon-box">
                      <i className="flaticon-email-1"></i>
                      <a href="mailto:info@bms-kos.com">info@bms-kos.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="zirox-header__top-bar-right">
                  <ul className="zirox-header__top-bar-right-links">
                    <li>
                      <Link className="zirox-right-line" href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <a className="zirox-right-line" href="#">
                        Help
                      </a>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="zirox-header-info-box d-flex align-items-center gap-4 px-4 py-0 m-0">
                    <i className="flaticon-chatting"></i>
                    <div className="zirox-header-info-box__details">
                      <span>Email us</span>
                      <h4>
                        <a href="mailto:info@bms-kos.com">info@bms-kos.com</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zirox-header__navbar zirox-header__navbar--home-2">
          <div className="container-fluid">
            <div className="zirox-header__mobile-nav-bar d-block d-lg-none">
              <div className="zirox-mobile-nav-wrap d-flex align-items-center justify-content-between px-md-5">
                <div className="logo" style={{backgroundColor: 'white', padding: '8px 12px', borderRadius: '6px', display: 'inline-block'}}>
                  <Image width={128} height={30} src="/img/Logo.png" alt="Logo" />
                </div>
                <div className="zirox-hamburger-menu">
                  <div onClick={() => setMobileMenu(!mobileMenu)} className={`zirox-hamburger-menu__btn ${mobileMenu && "zirox-hamburger-menu__btn--active"}`}>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-around justify-content-xl-between flex-column flex-lg-row d-none d-lg-flex">
              <nav className="ud-main-menu ud-main-menu--home-2" aria-label="Main Navigation">
                <Link href="/" className="zirox-header__navbar-logo" style={{backgroundColor: 'white', padding: '8px 12px', borderRadius: '6px', display: 'inline-block'}}>
                  <Image width={128} height={30} src="/img/Logo.png" alt="Logo" />
                </Link>
                <ul>
                  {menu.map(({ id, title, submenus, url }) => (
                    <React.Fragment key={id}>
                      {submenus ? (
                        <li>
                          <a href="#">
                            {title} <i className="flaticon-plus-2"></i>
                          </a>
                          <ul className="ud-main-menu__sub-menu">
                            {submenus.map(({ id, title, url }) => (
                              <li key={id}>
                                <Link href={url}>{title}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (

                        url &&
                        <li>
                          <Link href={url}>{title}</Link>
                        </li>

                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </nav>
              <div className="zirox-header__navbar__btns zirox-header__navbar__btns--home-2">
                <OutsideClickHandler onOutsideClick={() => setSearchOpen(false)}>
                  <button onClick={() => setSearchOpen(!searchOpen)} className="zirox-header__navbar__btns-search d-none d-xl-flex">
                    <i className="flaticon-search-2"></i>
                  </button>
                  <div className={`zirox-search-popup zirox-search-popup--home-2 ${searchOpen && "zirox-search-popup--open"}`}>
                    <form action="/" method="GET">
                      <input type="text" name="search" id="search" placeholder="Search" />
                      <button type="submit">
                        <i className="flaticon-search-2"></i>
                      </button>
                    </form>
                  </div>
                </OutsideClickHandler>
                <div className="zirox-hamburger-menu">
                  <div onClick={() => setMobileMenu(!mobileMenu)} className={`zirox-hamburger-menu__btn ${mobileMenu && "zirox-hamburger-menu__btn--active"}`}>
                    <span></span>
                  </div>
                </div>
                <ul className="zirox-header__navbar-socials d-none d-xxl-flex">
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-logo-in-circular-shape"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
                <Link href="/contact" className="zirox-button d-none d-xl-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Side Popup --> */}
        <div className={`zirox-side-popup ${mobileMenu && "zirox-side-popup--open"}`}>
          <div className="zirox-side-popup__header">
            <div className="zirox-side-popup__header-logo" style={{backgroundColor: 'white', padding: '8px 12px', borderRadius: '6px', display: 'inline-block'}}>
              <img src="/img/Logo.png" alt="Logo" />
            </div>
            <button onClick={() => setMobileMenu(false)} className="side-popup-close">
              <i className="flaticon-close-button"></i>
            </button>
          </div>
          <div className="zirox-side-popup__body">
            <ul className="metismenu" id="side-menu">
              {menu.map(({ id, title, submenus, url }) => (
                <React.Fragment key={id}>
                  {url ? (
                    <li>
                      <Link href={url}>{title}</Link>
                    </li>
                  ) : (
                    <li>
                      <a href="#" onClick={() => handleSubmenu(id)}>
                        {title} <i className="flaticon-plus-2"></i>
                      </a>
                      <AnimateHeight height={submenu == id ? "auto" : 0}>
                        <ul className="sub-menu" aria-expanded="false">
                          {submenus?.length && submenus.map(({ id, title, url }) => (
                            <li key={id}>
                              <Link href={url}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="zirox-side-popup__bottom">
            <div className="zirox-side-popup__bottom-info">
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-phone"></i>
                <div className="zirox-header-info-box__details">
                  <span>Email us</span>
                  <h4>
                    <a href="mailto:info@bms-kos.com">info@bms-kos.com</a>
                  </h4>
                </div>
              </div>
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-open"></i>
                <div className="zirox-header-info-box__details">
                  <span>Send email</span>
                  <h4>
                    <a href="mailto:info@bms-kos.com">info@bms-kos.com</a>
                  </h4>
                </div>
              </div>
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-location"></i>
                <div className="zirox-header-info-box__details">
                  <span>Str. Ukshin Hoti, Marigona Tower 12th floor</span>
                  <h4>Prishtina, Kosovo</h4>
                </div>
              </div>
            </div>
            <ul className="zirox-side-popup__bottom-socials">
              <li>
                <a href="#">
                  <i className="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-facebook-logo-in-circular-shape"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
