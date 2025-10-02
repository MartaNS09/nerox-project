import Counter from "../common/Counter";

const ServicesBanner = () => {

  return (
    <>
      <div className="sd-banner-area">
        <div className="sd-banner-wrapper">
          <div className="sd-banner-item sd-banner-item-height p-relative" style={{ backgroundImage: `url(assets/img/banner/banner-img-3.jpg)`, backgroundPosition: 'center ', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-6">
                  <div className="sd-banner-content">
                    <div className="sd-banner-sm-item">
                      <h5 className="count-number">
                        <Counter number={149} />
                      </h5>
                      <p>World Awards</p>
                    </div>

                    <div className="sd-banner-sm-item sd-banner-sm-item-df">
                      <h5 className="count-number">
                        <Counter number={329} />
                      </h5>
                      <p>Satisfied customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesBanner;