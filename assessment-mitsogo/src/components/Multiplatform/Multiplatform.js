import React, { useState, useEffect } from 'react';
import './Multiplatform.css';
import { images } from '../Images';
import { Image } from 'react-bootstrap';

function Multiplatform() {
  const [selected, setSelected] = useState(0); // Initialize with the first item selected
  const [isMobile, setIsMobile] = useState(false); // To track screen size

  const data = [
    { id: 'android', title: 'Android', content: 'Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.' },
    { id: 'ios', title: 'iOS', content: 'Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.' },
    { id: 'macos', title: 'macOS', content: 'Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.' },
    { id: 'windows', title: 'Windows', content: 'Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.' },
    { id: 'tvos', title: 'tvOS', content: 'Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.' },
    { id: 'fireos', title: 'FireOS', content: 'Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.' },
  ];
  const data1 = [
    { id: 'android', title: 'Android', content: 'Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.', image: images.ANDROID },
    { id: 'ios', title: 'iOS', content: 'Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.', image: images.IOS },
    { id: 'macos', title: 'macOS', content: 'Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.', image: images.MACOS },
    { id: 'windows', title: 'Windows', content: 'Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.', image: images.WINDOWS },
    { id: 'tvos', title: 'tvOS', content: 'Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.', image: images.TVOS },
    { id: 'fireos', title: 'FireOS', content: 'Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single console.', image: images.FIREOS },
  ];


  // Hook to track window width
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

  const handleClick = (index) => {
    setSelected(index);
  };
  const handleClick1 = (index) => {
    setSelected(index === selected ? null : index); // Toggle selection
  };

  return (
    <section id='Platforms' className="d-flex justify-content-center align-items-center " style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F7F7F7' }}>
      <div className="mainWidth">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h2 style={{ paddingBottom: '20px' }} className="headingText">Multi-platform Endpoint Management</h2>
          <p style={{ fontSize: '16px', lineHeight: '28px', fontWeight: '400', color: 'black !important' }}>
            Devices of varying platforms? Hexnode thrives in a diverse environment.
          </p>
        </div>

        {isMobile && (
          <div>
            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 0 ? 'active' : ''}`}><img src={images.ANDROID} alt="Android" /></div>
              <div className={`column ${selected === 0 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(0)}>Android</h3>
                {selected === 0 && (
                  <p>
                    Remotely deploy, manage, monitor, and secure Android devices in your organization.
                    Set compliance benchmarks and leverage Android Enterprise to its full capabilities.
                  </p>
                )}
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 1 ? 'active' : ''}`}><img src={images.IOS} alt="iOS" /></div>
              <div className={`column ${selected === 1 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(1)}>iOS</h3>
                {selected === 1 && (
                  <p>
                    Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM
                    and ASM integration, deploy devices and apps with ease.
                  </p>
                )}
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 2 ? 'active' : ''}`}><img src={images.MACOS} alt="macOS" /></div>
              <div className={`column ${selected === 2 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(2)}>macOS</h3>
                {selected === 2 && (
                  <p>
                    Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy
                    and manage macOS devices in bulk with Hexnode UEM.
                  </p>
                )}
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 3 ? 'active' : ''}`}><img src={images.WINDOWS} alt="Windows" /></div>
              <div className={`column ${selected === 3 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(3)}>Windows</h3>
                {selected === 3 && (
                  <p>
                    Spearhead modern PC management in your organization with Hexnode. Set limits and
                    monitor PC health and compliance remotely with Hexnode UEM.
                  </p>
                )}
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 4 ? 'active' : ''}`}><img src={images.TVOS} alt="tvOS" /></div>
              <div className={`column ${selected === 4 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(4)}>tvOS</h3>
                {selected === 4 && (
                  <p>
                    Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics
                    and custom messages on tvOS devices with Hexnode UEM.
                  </p>
                )}
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid #ddd', paddingTop:'20px', paddingBottom:'20px'}}>
              <div className={`image ${selected === 5 ? 'active' : ''}`}><img src={images.FIREOS} alt="FireOS" /></div>
              <div className={`column ${selected === 5 ? 'activeColumn' : ''}`}>
                <h3 onClick={() => handleClick(5)}>FireOS</h3>
                {selected === 5 && (
                  <p>
                    Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all
                    from a single console.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="row mt-5" >
            <div className="col-lg-6 col-md-12">
              <div className="image-container">
                <div className={`image ${selected === 0 ? 'active' : ''}`}><img src={images.ANDROID} alt="Android" /></div>
                <div className={`image ${selected === 1 ? 'active' : ''}`}><img src={images.IOS} alt="iOS" /></div>
                <div className={`image ${selected === 2 ? 'active' : ''}`}><img src={images.MACOS} alt="macOS" /></div>
                <div className={`image ${selected === 3 ? 'active' : ''}`}><img src={images.WINDOWS} alt="Windows" /></div>
                <div className={`image ${selected === 4 ? 'active' : ''}`}><img src={images.TVOS} alt="tvOS" /></div>
                <div className={`image ${selected === 5 ? 'active' : ''}`}><img src={images.FIREOS} alt="FireOS" /></div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 content-container">
              {data.map((item, index) => (
                <div key={item.id} className={`content ${selected === index ? 'active' : ''}`}>
                  {selected === index ? (
                    <div className="description">
                      <h3 style={{ borderBottom: "0", marginLeft: "0" }}>{item.title}</h3>
                      <div className='p-2'>
                        <p>{item.content}</p>
                        <p className='link'><a href='https://www.hexnode.com/mobile-device-management/cloud/signup/'>Try Hexnode on your endpoint</a> </p>
                      </div>
                    </div>
                  ) : (
                    <h3 onClick={() => handleClick(index)}>{item.title}</h3>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Multiplatform;
