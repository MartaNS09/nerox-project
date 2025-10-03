import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { jobListData } from '../../data/joblistData';

export default function Careers() {
  return (
    <>
      <Header />
      
      {/* Hero Section без хлебных крошек */}
      <section className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay" 
               style={{
                 backgroundImage: 'url(/assets/img/breadcrumb/breadcrumb-bg.jpg)',
                 marginTop: '80px' // Отступ для липкой шапки
               }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1 text-center">
                <h3 className="breadcrumb__title mb-20">Карьера в NEROX</h3>
                <p className="breadcrumb__text">
                  Присоединяйтесь к нашей команде профессионалов и создавайте инновационные digital-решения
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Content */}
      <section className="services__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">Открытые вакансии</h2>
                <p>Мы ценим талант, стремимся к развитию и создаем продукты, которые меняют мир к лучшему</p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="row">
            {jobListData.map((job, index) => (
              <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="services__item-2 mb-30 transition-3 white-bg">
                  <div className="services__content-2">
                    <h3 className="services__title-2">
                      <a href="#">{job.title}</a>
                    </h3>
                    <p>{job.subtitle}</p>
                    <div className="services__features">
                      <ul>
                        <li>💼 {job.subtitle}</li>
                        <li>💰 {job.salary}</li>
                        <li>📍 Удаленная работа</li>
                      </ul>
                    </div>
                    <div className="services__btn-2">
                      <a href="#" className="link-btn-2">
                        Подробнее
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="services__cta text-center mt-60">
                <h3 className="services__cta-title">Не нашли подходящую вакансию?</h3>
                <p>Отправьте свое резюме на <strong>hr@nerox.ru</strong> и мы рассмотрим вашу кандидатуру</p>
                <div className="services__cta-btn mt-30">
                  <a href="mailto:hr@nerox.ru" className="tp-btn">
                    Отправить резюме
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
