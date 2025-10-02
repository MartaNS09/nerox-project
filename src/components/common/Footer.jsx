import Link from 'next/link';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '../common/ErrorMsg';
import schema from '../common/schema';

const Footer = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <footer>
        <div className="tpfooter-area black-bg pt-115 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__widget footer-col-1">
                  <div className="tp-section-title">
                    <span className="tp-sub-title mb-15">#Contact Information</span>
                    <h2 className="tp-title tp-title-df mb-20">Ask a question</h2>
                  </div>
                  <div className="footer__lists mt-40">
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="footer__list-text">
                        <p>
                          <a href="https://goo.gl/maps/iAY7xEk5PGbqwBWf6" target="blank">
                            Ta-134/A, Gulshan Badda Link Rd, Nya 10982 USA </a>
                        </p>
                      </div>
                    </div>
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="footer__list-text">
                        <p><a href="mailto:rasalinawillam@gmail.com">rasalinawillam@gmail.com</a></p>
                        <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
                      </div>
                    </div>
                    <div className="footer__list-item mb-40">
                      <div className="footer__list-icon">
                        <i className="fa-solid fa-phone-flip"></i>
                      </div>
                      <div className="footer__list-text">
                        <p><a href="tel:+08987878773345">+08 98787 8773 345</a></p>
                        <p><a href="tel:+08987878773345">+08 98787 8773 345</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__widget footer-col-2">
                  <div className="tp-section-title">
                    <span className="tp-sub-title mb-15">#Contact us</span>
                    <h2 className="tp-title tp-title-df mb-20">Write to us</h2>
                  </div>
                  <form id="contact-form" action="mail.php" method="POST">
                    <div className="contact-filed mb-20">
                      <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Name" />
                      {touched.name && <ErrorMsg error={errors.name} />}
                    </div>
                    <div className="contact-filed mb-30">
                      <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Email" />
                      {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                    <div className="contact-filed mb-25">
                      <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Write a question"></textarea>
                      {touched.msg && <ErrorMsg error={errors.msg} />}
                    </div>
                    <div className="form-submit">
                      <button className="tp-grd-btn" type="submit">Send</button>
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area-4 border-top-2 black-bg-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <p>© 2022 Nerox - Web development studio. All rights reserved.</p>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="copyright-links">
                  <Link href="/privacy">
                    <a>Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;