import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"><b>NER</b> CREATIVE</h3>
                <span className="tpabout-xs-title mb-40">Web development for your business</span>
                <p className="tpab-text">
                  We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands.
                </p>
                <p>
                  Our mission is to seek and find: growth points, cause-and-effect relationships, promising projects, talented people. We grow together with customers and build our shared success story. We analyze every pixel, byte and character. Sifting business models and solutions through a sieve of common sense. We say everything as it is.
                </p>
                <div className="tpabout-btn mt-50">
                  <Link href="/contact"><a className="tp-solid-btn">Contact us</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="assets/img/about/tpabout-img.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;