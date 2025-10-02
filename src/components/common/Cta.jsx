import Link from 'next/link';

const Cta = ({ padd }) => {
  return (
    <>
      <div className={`tp-photograper-cta-2 pt-55 pb-55 ${padd ? padd : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-cta-wrapper text-center">
                <h3 className="tp-photograper-cta-title mb-20"><b>Can't find what you are looking for?</b></h3>
                <p>We are always looking for people with unique skills. Send us your CV and we will contact you<br /> when we have a vacancy that meets your expectations.</p>
                <div className="tp-cta-btn mt-25">
                  <Link href="/contact"><a className="tp-solid-btn-square">Contact us</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;