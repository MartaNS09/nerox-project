import React from 'react';
import Link from 'next/link';
import SEO from '../../components/seo';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function Careers() {
  const positions = [
    {
      title: "Frontend разработчик",
      description: "Создание современных пользовательских интерфейсов на React/Next.js"
    },
    {
      title: "Backend разработчик", 
      description: "Разработка серверной логики, API и баз данных"
    },
    {
      title: "UI/UX дизайнер",
      description: "Проектирование удобных и красивых интерфейсов"
    },
    {
      title: "SEO специалист",
      description: "Продвижение проектов в поисковых системах"
    },
    {
      title: "Project менеджер",
      description: "Управление проектами и командой разработки"
    },
    {
      title: "QA инженер",
      description: "Обеспечение качества наших продуктов"
    }
  ];

  return (
    <>
      <SEO pageTitle="Карьера в NEROX - Присоединяйтесь к нашей команде" />
      <Header />
      
      {/* Хлебные крошки */}
      <section className="breadcrumb-area breadcrumb-bg" style={{padding: '40px 0', background: '#f5f5f5'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Карьера</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Главная</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Карьера
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Герой секция */}
      <section className="career-hero-area" style={{padding: '100px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="career-hero-content text-center">
                <h1 className="title" style={{color: 'white', fontSize: '3.5rem', marginBottom: '20px', fontWeight: '700'}}>
                  Карьера в NEROX
                </h1>
                <p className="text" style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', lineHeight: '1.6'}}>
                  Присоединяйтесь к нашей команде профессионалов и создавайте инновационные digital-решения вместе с нами. 
                  Мы ценим талант, стремимся к excellence и создаем продукты, которые меняют мир к лучшему.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="why-us-area" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2 className="title">Почему выбирают NEROX?</h2>
                <p>Мы создаем условия для профессионального роста и реализации амбициозных проектов</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="why-us-item text-center" style={{padding: '40px 30px', marginBottom: '30px'}}>
                <div className="icon" style={{fontSize: '3rem', marginBottom: '20px', color: '#667eea'}}>🚀</div>
                <h4>Инновационные проекты</h4>
                <p>Работайте над современными технологическими решениями и digital-продуктами</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-us-item text-center" style={{padding: '40px 30px', marginBottom: '30px'}}>
                <div className="icon" style={{fontSize: '3rem', marginBottom: '20px', color: '#667eea'}}>👥</div>
                <h4>Сильная команда</h4>
                <p>Опытные специалисты, готовые делиться знаниями и поддерживать в развитии</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-us-item text-center" style={{padding: '40px 30px', marginBottom: '30px'}}>
                <div className="icon" style={{fontSize: '3rem', marginBottom: '20px', color: '#667eea'}}>💼</div>
                <h4>Гибкий график</h4>
                <p>Удаленная работа и гибкий подход к организации рабочего процесса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Направления работы */}
      <section className="positions-area" style={{padding: '80px 0', background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2 className="title">Мы ищем таланты</h2>
                <p>Присоединяйтесь к нам в одном из направлений или предложите свою экспертизу</p>
              </div>
            </div>
          </div>
          <div className="row">
            {positions.map((position, index) => (
              <div key={index} className="col-lg-6">
                <div className="position-item" style={{
                  background: 'white',
                  padding: '30px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #667eea'
                }}>
                  <h4 style={{color: '#333', marginBottom: '15px'}}>{position.title}</h4>
                  <p style={{color: '#666', lineHeight: '1.6'}}>{position.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="career-cta-area" style={{padding: '80px 0', textAlign: 'center'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="title" style={{marginBottom: '20px'}}>Готовы стать частью нашей команды?</h2>
              <p style={{fontSize: '1.2rem', marginBottom: '40px', color: '#666'}}>
                Мы всегда рады талантливым специалистам, которые разделяют наши ценности и стремятся создавать качественные продукты. 
                Даже если вы не нашли подходящую вакансию - напишите нам!
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary" style={{
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  marginRight: '20px'
                }}>
                  Написать нам
                </Link>
                <a href="mailto:career@nerox.ru" className="btn btn-outline-primary" style={{
                  padding: '15px 40px',
                  fontSize: '1.1rem'
                }}>
                  Отправить резюме
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
