import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { images } from './components/Images';
import WhyHexnode from './components/Whyhexon/WhyHexnode';
import Management from './components/PowerManagement/Management';
import Multiplatform from './components/Multiplatform/Multiplatform';
import LogoCarousel from './components/carousal/carousal';
import { FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <>
      <Navbar />
      <section className='d-flex justify-content-center align-items-center' style={{ background: "#020A19", padding: '130px 0 60px', }}>
        <div className='mainWidth row indexContainer' >
          <div className='col-lg-6 mb-3 d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center '>
              <div className='bannerSectionText'>
                Unified Endpoint Management
              </div>
              <div className='bannerSectionHeading'>Gain control and visibility over your endpoints</div>
              <div className='bannerP'>Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.</div>
              <div className='buttonContainer mt-3 row'>
                <div className='col-lg-6 col-md-6'>
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    id="signup-email"
                    className="email-input"
                  />

                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='button-now d-flex align-items-center'>
                    <a href="#">Lets try it out!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="banner-container">
              <div className="image-wrapper">
                <img
                  alt="Hexnode UEM"
                  fetchpriority="high"
                  width="610"
                  height="465"
                  decoding="async"
                  data-nimg="1"
                  className="banner-image"
                  src={images.BANNER}
                />
              </div>

              <div className="overlay">
                <img
                  alt="Hexnode UEM"
                  fetchpriority="high"
                  width="393"
                  height="753"
                  decoding="async"
                  data-nimg="1"
                  className="overlay-image"
                  src={images.BANNEROVERLAY}
                />
              </div>

              <div className="banner-item banner-item-1">
                <div className="tick-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                    <path
                      id="Path_4891"
                      data-name="Path 4891"
                      d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                      transform="translate(1940.042 222.678)"
                      fill="none"
                      stroke="#db962c"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="banner-text">Password policy applied</span>
              </div>

              <div className="banner-item banner-item-2">
                <div className="tick-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                    <path
                      id="Path_4891"
                      data-name="Path 4891"
                      d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                      transform="translate(1940.042 222.678)"
                      fill="none"
                      stroke="#44aec4"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="banner-text">TvOS Kiosk Active</span>
              </div>

              <div className="banner-item banner-item-3">
                <div className="tick-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                    <path
                      id="Path_4891"
                      data-name="Path 4891"
                      d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                      transform="translate(1940.042 222.678)"
                      fill="none"
                      stroke="#35943b"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="banner-text">Device Enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex justify-content-center' style={{ background: '#1A1C2B', paddingTop: '30px', paddingBottom: '30px' }}>
        <div className='mainWidth'>
          <div className="row justify-content-between">
            <div className="d-flex align-items-stretch justify-content-between blogSection">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 blogInsideContainer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group max-w-340px md:max-w-27% flex-0_0_100% md:flex-0_0-27% px-0 py-40px md:py-0 md:px-10px lg:px-25px xl:px-45px banner-accolades-wrap"
                  href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
                >
                  <div className="d-flex flex-column md:align-items-center banner-accolades-content">
                    <div className="d-flex mb-3 blogImgContainer">
                      <div className="d-flex align-items-center min-w-82px max-w-156px max-h-25px  h-full">
                        <img
                          alt="IDC"
                          loading="lazy"
                          width="83"
                          height="25"
                          className="w-100 max-w-full h-25px object-cover"
                          src={images.IDC}
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="blogSectionText">
                        Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="separator" style={{ width: '1px', background: 'hsla(0,0%,100%,.2)' }}></div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 blogInsideContainer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group max-w-340px md:max-w-27% flex-0_0_100% md:flex-0_0-27% px-0 py-40px md:py-0 md:px-10px lg:px-25px xl:px-45px banner-accolades-wrap"
                  href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
                >
                  <div className="d-flex flex-column md:align-items-baseline banner-accolades-content">
                    <div className="d-flex mb-3 blogImgContainer">
                      <div className="d-flex align-items-center min-w-82px max-w-156px max-h-25px  h-full">
                        <img
                          alt="IDC"
                          loading="lazy"
                          width="83"
                          height="25"
                          className="w-100 max-w-full h-25px object-cover"
                          src={images.GARTNER}
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="blogSectionText">
                        Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="separator" style={{ width: '1px', background: 'hsla(0,0%,100%,.2)' }}></div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 blogInsideContainer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group max-w-340px md:max-w-27% flex-0_0_100% md:flex-0_0-27% px-0 py-40px md:py-0 md:px-10px lg:px-25px xl:px-45px banner-accolades-wrap"
                  href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
                >
                  <div className="d-flex flex-column md:align-items-baseline banner-accolades-content">
                    <div className="d-flex mb-3 blogImgContainer">
                      <div className="d-flex align-items-center min-w-82px max-w-156px max-h-25px  h-full">
                        <img
                          alt="IDC"
                          loading="lazy"
                          width="83"
                          height="25"
                          className="w-100 max-w-full h-25px object-cover"
                          src={images.FORRESTER}
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="blogSectionText">
                        Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyHexnode  />
      <Management />
      <Multiplatform />
      <LogoCarousel />
      <section className='d-flex justify-content-center align-items-center' style={{ background: "#020A19", height: '300px' }}>
        <div className='mainWidth'>
          <h3
            className="text-center fw-bold mb-4"
            style={{
              fontSize: "30px",
              color: "#fff",
              lineHeight: "38px",
            }}
          >
            <style>
              {`
      @media (min-width: 768px) {
        h3 {
          font-size: 42px;
          line-height: 1.3;
        }
      }
    `}
            </style>
            Get Hexnode UEM and start securing your endpoints
          </h3>
          <div style={{ maxWidth: "325px", margin: "0 auto" }} className="md:max-w-[302px]">
            <a
              href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
              rel="noreferrer"
              style={{
                backgroundColor: "#DD0735",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
                borderRadius: "3px",
                transition: "all 0.3s ease-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#AA232F")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#DD0735")}
            >
              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "17px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  fontWeight: "400",
                }}
                className="md:text-[17px] md:leading-[24px]"
              >
                TRY HEXNODE FOR FREE
              </span>
            </a>
          </div>

        </div>
      </section>
      <section className='d-flex justify-content-center' style={{ padding: '20px 0', background: '#F2F2F2' }}>
        <div className='mainWidth'>
          <div
            className="d-flex  flex-wrap justify-content-between align-items-center w-100 sm:flex-row sm:justify-between"
          >
            <div className="d-flex justify-content-center sm:flex-row">
              <div
                className="order-1 sm:order-2"

              >
                <ul
                  className="d-flex flex-row flex-wrap list-unstyled p-0 m-0"
                  style={{ padding: 0, margin: 0 }}
                >
                  <li
                    className="d-inline-block"
                    style={{ marginRight: "5px", listStyle: "none" }}
                  >
                    <a
                      className="text-secondary"
                      style={{
                        fontSize: "12px",
                        lineHeight: "24px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                      }}
                      href="https://www.hexnode.com/legal/terms-of-use/"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <span>-</span>

                  <li
                    className="d-inline-block"
                    style={{ marginRight: "5px", listStyle: "none" }}
                  >
                    <a
                      className="text-secondary"
                      style={{
                        fontSize: "12px",
                        lineHeight: "24px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                      }}
                      href="https://www.hexnode.com/legal/privacy-policy/"
                    >
                      Privacy
                    </a>
                  </li>
                  <span>-</span>

                  <li
                    className="d-inline-block"
                    style={{ marginRight: "5px", listStyle: "none" }}
                  >
                    <a
                      className="text-secondary"
                      style={{
                        fontSize: "12px",
                        lineHeight: "24px",
                        color: "inherit",
                        textDecoration: "none",
                        transition: "color 0.3s ease-in-out",
                      }}
                      href="https://www.hexnode.com/legal/cookies-policy/"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex order-3">
              <p
                className="text-secondary m-0"
                style={{
                  fontSize: "12px",
                  lineHeight: "24px",
                  margin: 0,
                }}
              >
                Copyright © 2024 Mitsogo Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

      </section>
      <div
        className="message-icon"
        // onClick={handleClick}
        title="Send us a message"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32">
        <path fill='white' d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
        </svg>
      </div>
    </>
  )
}

export default App