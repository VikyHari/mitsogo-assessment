import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Image } from 'react-bootstrap';
import { images } from '../Images';
import WhyHexnode from '../Whyhexon/WhyHexnode';

function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [buttonOverlay, setButtonOverlay] = useState(false);
  console.log(buttonOverlay, "overwkenmandmfn")

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Change threshold as needed
    setButtonOverlay(window.scrollY > 650);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 450; // Check if screen width is <= 400px
      setIsMobile(isMobileSize);
      console.log(`Current screen width: ${window.innerWidth}, isMobile: ${isMobileSize}`); // Log the current width and mobile status
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to check screen size when component mounts

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div>
          <header className={scrolled ? 'scrolled' : ''}>
            <div className="mainWidth d-flex justify-content-between">
              <a href='https://www.hexnode.com/'>
              <Image
                style={{ height: '27px' }}
                src={scrolled ? images.LOGOBLACK : images.LOGOWHITE}
                alt="Logo"
              />
              </a>

              <nav ref={navRef}>
                <div className="responsive-navMainContainer">
                  <div className="responive-navContainer">
                    <a href={WhyHexnode}>Why Hexonade</a>
                    <a href="#">Features</a>
                    <a href="#">Platforms</a>
                    <a href="#">Customers</a>
                  </div>
                  <div className='d-flex justify-content-center flex-column align-items-center'>
                    <div className="button mt-3" style={{ visibility: "visible", width:'80%', textAlign:'center',padding:'10px'  }}>
                      <a style={{fontSize:'0.5rem !important'}} href="#">14 days free trial</a>
                    </div>
                    <div className='mt-4'>Login</div>
                  </div>
                </div>

                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                  <FaTimes />
                </button>
              </nav>

              <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
              </button>
            </div>
          </header>
          {buttonOverlay && (
            <header className={scrolled ? 'scrolled d-flex justify-content-end' : ''}>
              <div className=''>
                <div className="button" style={{ visibility: "visible" }}>
                  <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">14 days free trial</a>
                </div>
              </div>
            </header>
          )}
        </div>)}


      {!isMobile && (
        <header className={scrolled ? 'scrolled' : ''}>
          <div className="mainWidth d-flex row ">
            <div className='col-lg-2 col-md-2 col-sm-2' style={{ height: '25px' }}>
              <Image
                src={scrolled ? images.LOGOBLACK : images.LOGOWHITE}
                alt="Logo"
              />

            </div>
            <div
              className=" col-lg-10 col-md-10 col-sm-10 d-flex justify-content-end align-items-center p-0"
            >
              <nav ref={navRef}>
                <div className='responsive-navMainContainer'>
                  <div className='responive-navContainer' >
                    <a href="#whyhexonade">Why Hexonade</a>
                    <a href="#Features">Features</a>
                    <a href="#Platforms">Platforms</a>
                    <a href="#Customers">Customers</a>
                  </div>

                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                  <FaTimes />
                </button>
              </nav>
              <div className={scrolled ? 'nav-btn2' : 'nav-btn1'}>
                <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">14 days free trial</a>
              </div>

              <div className="button">
                <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">14 days free trial</a>
              </div>
              <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
              </button>
            </div>
          </div>
        </header>

      )}
    </>
  );
}

export default Navbar;
