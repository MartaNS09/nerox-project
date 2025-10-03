import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/seo';

export default function Careers() {
  const jobList = [
    {
      title: "React разработчик",
      type: "Удаленная работа", 
      salary: "от 100 000 ₽",
      description: "Разработка современных веб-приложений на React"
    },
    {
      title: "Backend разработчик",
      type: "Удаленная работа",
      salary: "от 110 000 ₽", 
      description: "Разработка серверной части и API"
    },
    {
      title: "SEO специалист",
      type: "Удаленная работа",
      salary: "от 85 000 ₽",
      description: "Продвижение сайтов в поисковых системах"
    }
  ];

  return (
    <>
      <SEO pageTitle="Карьера в NEROX - Присоединяйтесь к нашей команде" />
      
      {/* Хлебные крошки */}
      <nav className="breadcrumb-nav" style={{padding: '20px 0', background: '#f8f9fa'}}>
        <div className="container">
          <Link href="/" style={{color: '#007bff', textDecoration: 'none'}}>
            ← На главную
          </Link>
        </div>
      </nav>

      {/* Главный заголовок */}
      <section style={{padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 style={{fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold'}}>
                Карьера в NEROX
              </h1>
              <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>
                Присоединяйтесь к нашей команде профессионалов и создавайте будущее вместе с нами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Список вакансий */}
      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 style={{textAlign: 'center', marginBottom: '50px', color: '#333'}}>
                Открытые вакансии
              </h2>
              
              {jobList.map((job, index) => (
                <div key={index} style={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  padding: '30px',
                  marginBottom: '25px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <h3 style={{color: '#333', marginBottom: '15px'}}>{job.title}</h3>
                  <div style={{display: 'flex', gap: '20px', marginBottom: '15px', flexWrap: 'wrap'}}>
                    <span style={{
                      background: '#007bff',
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {job.type}
                    </span>
                    <span style={{
                      background: '#28a745', 
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {job.salary}
                    </span>
                  </div>
                  <p style={{color: '#666', marginBottom: '20px'}}>{job.description}</p>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 30px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Откликнуться
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section style={{padding: '60px 0', background: '#f8f9fa', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{marginBottom: '20px'}}>Не нашли подходящую вакансию?</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '30px', color: '#666'}}>
            Отправьте нам своё резюме - мы всегда рады талантливым людям!
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Отправить резюме
          </button>
        </div>
      </section>
    </>
  );
}
