import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className="tpbs-about-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="tpbs-about-image s-about-img-2">
                <div className="s-about-img-2-inner p-relative fix">
                  <img src="assets/img/about/abr-img.jpg" alt="about-img" />
                  <img className="about-shape-1" src="assets/img/about/about-shape-1.png" alt="" />
                </div>
                <img className="about-shape-2" src="assets/img/about/about-shape-2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tps-about tps-about-wrap">
                <div className="tpbs-section-wrapper mb-30">
                  <span className="tpbs-sub-title mb-15">About us</span>
                  <h3 className="tpbs-title">A passionate team that makes technology work for your business</h3>
                </div>
                <p className="ab-text mb-30">We are as passionate as you are about creating technology solutions that can not only help grow your business, but also change the world. Over the years, we have helped more than 100 companies impact millions of people around the world.</p>
                <div className="features__list">
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text">
                        <p>We offer ideal solutions</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text">
                        <p>We work with global brands</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tpbs-button mt-50">
                  <Link href="/about">
                    <a className="tp-solid-btn">Learn more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpbs-ab-shape fix">
          <img src="assets/img/about/ab-shape.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default About;