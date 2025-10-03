import React from 'react';
import SEO from '../../components/seo';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { jobListData } from '../../data/joblistData';

const Careers = () => {
  return (
    <>
      <SEO pageTitle="Карьера" />
      <Header />
      
      {/* Hero Section - ТОЧНАЯ копия с других страниц */}
      <section className="breadcrumb__area include-bg pt-140 pb-140 breadcrumb__overlay" 
               style={{
                 backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center', 
                 backgroundRepeat: 'no-repeat'
               }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">Карьера в NEROX</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">Главная</a></span>
                  <span className="dvdr"><i className="fa-light fa-colon"></i></span>
                  <span className="tp-current">Карьера</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services__area-2 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-60">
                <span className="section__title-pre-2">Вакансии</span>
                <h3 className="section__title-2">Мы открыты к сотрудничеству</h3>
                <p>Присоединяйтесь к нашей команде и создавайте инновационные решения вместе с нами</p>
              </div>
            </div>
          </div>

          <div className="row">
            {jobListData.map((job, index) => (
              <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="services__item-2 mb-30 transition-3 white-bg">
                  <div className="services__content-2">
                    <div className="services__icon-2">
                      <span>💼</span>
                    </div>
                    <h3 className="services__title-2">
                      <a href="#">{job.title}</a>
                    </h3>
                    <p>{job.subtitle}</p>
                    <div className="services__list-2">
                      <ul>
                        <li>📍 {job.subtitle}</li>
                        <li>🚀 Интересные проекты</li>
                        <li>👥 Профессиональная команда</li>
                        <li>📈 Возможности для роста</li>
                      </ul>
                    </div>
                    <div className="services__btn-2">
                      <a href="#" className="link-btn-2">
                        Подробнее о вакансии
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">Не нашли подходящую вакансию?</h2>
                <p>Мы всегда рады талантливым специалистам. Отправьте свое резюме и мы обязательно рассмотрим вашу кандидатуру!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="contact__content text-center">
                <div className="contact__info">
                  <div className="contact__item d-flex align-items-center mb-20">
                    <div className="contact__icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="contact__text">
                      <span>Email для резюме</span>
                      <h5><a href="mailto:hr@nerox.ru">hr@nerox.ru</a></h5>
                    </div>
                  </div>
                </div>
                <div className="contact__btn mt-40">
                  <a href="mailto:hr@nerox.ru" className="tp-btn">Отправить резюме</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
