import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousal.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { images } from '../Images';
import { Col, Container, Image, Row } from 'react-bootstrap';

// Assuming images.GORILLA is an object containing the source of images


const carouselItems = [
  { alt: "Polaris", src: images.POLARIS },
  { alt: "Gorilla", src: images.GORILLA },
  { alt: "Group1", src: images.GROUP1 },
  { alt: "Saic", src: images.SAIC },
  { alt: "Merck", src: images.MERCK },
  { alt: "Marriott", src: images.MARRIOTT },
  { alt: "Wolt", src: images.WOLT },
  { alt: "Costco", src: images.COSTCO },
  { alt: "Hilton", src: images.HILTON },
  { alt: "lows", src: images.LOWES },
];

const testimonials = [
  {
    id: 1,
    alt: "Justin Modrak",
    imageSrc: images.JUSTIN,
    quote: "\"Hexnode is of great value. Works great with Android and iOS!\"",
    name: "Justin Modrak",
    company: "East Troy Community School District",
  },
  {
    id: 2,
    alt: "Dalibor Kruljac",
    imageSrc: images.DALIBOR,
    quote: "\"Most complete MDM solution I found, and I tested many of them, including major names\"",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
  },
  {
    id: 3,
    alt: "Chris Robinson",
    imageSrc: images.CHRIS, 
    quote: "\"TIt seemed to be in-line with everything we were looking at.\'",
    name: "Chris Robinson",
    company: "Executive Account Manager, NCS",
  },
  
];


export default function Logocarousel() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <section id='Customers' className='d-flex justify-content-center align-item-center' style={{ paddingTop: "80px", paddingBottom: '30px' }}>
        <div className='mainWidth'>
          <div className='d-flex justify-content-center flex-column align-items-center'>
            <h2 className='headingText' style={{ paddingBottom: '20px' }}>What our customers say
            </h2>

          </div>
        


          <div className="swiper-container d-flex flex-column align-items-center">
            <div className="testimonial-card text-center">
              <div className="card-body1 d-flex">
                <div className="testimonial-image">
                  <img
                    src={testimonials[currentSlide].imageSrc}
                    alt={testimonials[currentSlide].name}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div
                  className="content-container d-flex justify-content-between flex-column"
                  style={{ backgroundColor: '#F7F7F7' }}
                >
                  <div>
                    <div className="innerContent-container description_text">
                      {testimonials[currentSlide].quote}
                    </div>
                  </div>
                  <div
                    className="innerContent-container d-flex flex-column justify-content-center"
                    style={{
                      backgroundColor: '#EAEBEB',
                      minHeight: '120px',
                      textAlign: 'start',
                    }}
                  >
                    <div className="nameText">{testimonials[currentSlide].name}</div>
                    <div className="companyText">{testimonials[currentSlide].company}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-buttons-container ">
              <button
                style={{ fontSize: '30px', fontWeight: '100' }}
                onClick={prevSlide}
                className="btn btn-primary swiper-button-prev"
              >
              </button>
              <button
                style={{ fontSize: '30px', fontWeight: '100' }}
                onClick={nextSlide}
                className="btn btn-primary swiper-button-next"
              >
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex justify-content-center align-item-center' >
        <div className='mainWidth'>

          <Swiper
            loop={true}
            slidesPerView={7}
            spaceBetween={30}
            breakpoints={{
              300: {
                slidesPerView: 3,
              },
              // When the screen width is <= 450px
              450: {
                slidesPerView: 5,
              },
              // When the screen width is <= 900px
              900: {
                slidesPerView: 5,
              },
              // Default for larger screens
              901: {
                slidesPerView: 7,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay,]}
            className="mySwiper"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
