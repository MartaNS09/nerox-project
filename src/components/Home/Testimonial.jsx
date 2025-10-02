import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: 'assets/img/testimonial/3/ts-1.jpg',
      desc: <>“I appreciate your wonderful services and professional staff for all your hard work and creative thinking! It was fun and I hope to work with you again soon.“</>,
      name: 'Steven Richards'
    },
    {
      id: 2,
      img: 'assets/img/testimonial/3/ts-2.jpg',
      desc: <>“Within the agreed timeframe, we received a ready-made website that meets all our requirements and is synchronized with specific modules for the tourism industry. For half a year we have been receiving customer applications from the site, the costs of the site paid off within the first month.“</>,
      name: 'David Lopez'
    },
    {
      id: 3,
      img: 'assets/img/testimonial/3/ts-3.jpg',
      desc: <>“In 2021, we turned to the Nerox agency to develop an SEO website for our international transport company Nerox. As a result, we got a convenient and modern website with unique texts within the agreed time frame, as well as setting up contextual advertising. We recommend the agency to our partners and affiliates in other countries.“</>,
      name: 'Justin Weber'
    },
  ]
  return (
    <>
      <div className="tpbs-testimonial-area tpbs-ts-overlay" style={{ backgroundImage: `url(assets/img/testimonial/3/testimonial-bg.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="tpbs-noise-bg" style={{ backgroundImage: `url(assets/img/testimonial/3/noise-bg.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="container">
          <div className="tpbs-ts-wrapper">
            <div className="tpbs-testimonial-slider tpbs-ts-slider-active">

              <Swiper
                modules={[Pagination]}
                className="pb-80"
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
              >
                {testimonialData.slice(0, 6).map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="tpbs-slider-item text-center">
                        <div className="tpbs-author-image mb-50">
                          <img src={item.img} alt="client-img" />
                        </div>
                        <div className="tpbs-quote mb-30">
                          <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <div className="tpbs-review mb-40">
                          <p>{item.desc}</p>
                        </div>
                        <span className="tpbs-client-name">{item.name}</span>
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>

            </div>
          </div>
        </div>
        <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-4">
          <img src="assets/img/shape/shape-2.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="assets/img/shape/shape-3.png" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;