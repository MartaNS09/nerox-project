import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '../common/ErrorMsg';

const JobDetailsArea = ({ item }) => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Обязательное поле").label("Name"),
      email: Yup.string().required("Обязательное поле").email().label("Email"),
      msg: Yup.string().required("Обязательное поле").min(20).label("Message"),
    }),
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <div className="job-details-area pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-content">
                <h5 className="job-dtitle mt-45 mb-15">{item.title}</h5>
                <span className="job-sm-dtitle">{item.subtitle} </span>
                <div className="job-dtext-wrapper mt-50">
                  <p>We are looking for {item.title} to join our team of 14 people.</p>
                  <p className="job-dtext mt-25">Our goal is to create world class products, improve the level of product support and performance we provide to our customers.
                  </p>
                </div>
                <div className="job-feature-list mt-30">
                  <ul>
                    {item.offer?.map((el, id) => (
                      <li key={id}><i className="fa-solid fa-circle-check"></i>{el}</li>
                    ))}
                  </ul>
                </div>
                <div className="job-feature-image w-img mt-55 mb-55">
                  <img src="../../assets/img/about/job-dimg.jpg" alt="job-details-img" />
                </div>
                <h5 className="privacy-title mb-20">We expect from you:</h5>
                <div className="job-feature-list job-feature-list-2 mt-40">
                  <ul>
                    {item.requirements?.map((el, id) => (
                      <li key={id}><i className="fa-solid fa-circle-check"></i>{el}</li>
                    ))}
                  </ul>
                </div>
                <h5 className="privacy-title mb-20 mt-60">About Nerox</h5>
                <p>Our mission is to seek and find: growth points, cause-and-effect relationships, promising projects, talented people. We grow together with customers and build our shared success story. We analyze every pixel, byte and character. Sifting business models and solutions through a sieve of common sense. We say everything as it is.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-contact mt-50 mb-20">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                            type="text" placeholder="Name" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Messsage"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button className="tp-solid-btn">Send a message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsArea;