import React from 'react';
import SEO from '../../components/seo';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Careers = () => {
  return (
    <>
      <SEO pageTitle="Карьера" />
      <Header />
      
      <section style={{ paddingTop: '140px', paddingBottom: '140px', textAlign: 'center', background: '#f8f9fa' }}>
        <div className="container">
          <h1>Карьера в NEROX</h1>
          <p>Присоединяйтесь к нашей команде профессионалов</p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2>Открытые вакансии</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">React разработчик</h5>
                  <p className="card-text">Удаленная работа</p>
                  <p>💰 от 100 000 ₽</p>
                  <a href="#" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Backend разработчик</h5>
                  <p className="card-text">Удаленная работа</p>
                  <p>💰 от 110 000 ₽</p>
                  <a href="#" className="btn btn-primary">Подробнее</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">SEO специалист</h5>
                  <p className="card-text">Удаленная работа</p>
                  <p>💰 от 85 000 ₽</p>
                  <a href="#" className="btn btn-primary">Подробнее</a>
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
