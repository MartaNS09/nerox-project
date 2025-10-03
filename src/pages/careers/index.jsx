import React from 'react';
import Link from 'next/link';
import SEO from '../../components/seo';

// Проверим правильные импорты для Header/Footer
const Header = () => (
  <header style={{padding: '20px 0', background: '#fff', borderBottom: '1px solid #eee'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Link href="/" style={{fontSize: '24px', fontWeight: 'bold', color: '#333', textDecoration: 'none'}}>
              NEROX
            </Link>
            <div style={{display: 'flex', gap: '30px'}}>
              <Link href="/" style={{color: '#333', textDecoration: 'none'}}>Главная</Link>
              <Link href="/services" style={{color: '#333', textDecoration: 'none'}}>Услуги</Link>
              <Link href="/careers" style={{color: '#667eea', textDecoration: 'none', fontWeight: 'bold'}}>Карьера</Link>
              <Link href="/contact" style={{color: '#333', textDecoration: 'none'}}>Контакты</Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{padding: '40px 0', background: '#f8f9fa', marginTop: '50px'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <p>&copy; 2024 NEROX. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
);

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
      <section style={{padding: '30px 0', background: '#f5f5f5'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Link href="/" style={{color: '#667eea', textDecoration: 'none'}}>Главная</Link>
                <span style={{color: '#999'}}>/</span>
                <span style={{color: '#333'}}>Карьера</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Герой секция */}
      <section style={{padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{textAlign: 'center', color: 'white'}}>
                <h1 style={{fontSize: '3rem', marginBottom: '20px', fontWeight: '700'}}>
                  Карьера в NEROX
                </h1>
                <p style={{fontSize: '1.3rem', lineHeight: '1.6', opacity: '0.9'}}>
                  Присоединяйтесь к нашей команде профессионалов и создавайте инновационные digital-решения вместе с нами. 
                  Мы ценим талант, стремимся к excellence и создаем продукты, которые меняют мир к лучшему.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{textAlign: 'center', marginBottom: '50px'}}>
                <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: '#333'}}>Почему выбирают NEROX?</h2>
                <p style={{fontSize: '1.2rem', color: '#666'}}>Мы создаем условия для профессионального роста и реализации амбициозных проектов</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div style={{textAlign: 'center', padding: '40px 20px', marginBottom: '30px'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🚀</div>
                <h4 style={{marginBottom: '15px', color: '#333'}}>Инновационные проекты</h4>
                <p style={{color: '#666', lineHeight: '1.6'}}>Работайте над современными технологическими решениями и digital-продуктами</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div style={{textAlign: 'center', padding: '40px 20px', marginBottom: '30px'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>👥</div>
                <h4 style={{marginBottom: '15px', color: '#333'}}>Сильная команда</h4>
                <p style={{color: '#666', lineHeight: '1.6'}}>Опытные специалисты, готовые делиться знаниями и поддерживать в развитии</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div style={{textAlign: 'center', padding: '40px 20px', marginBottom: '30px'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>💼</div>
                <h4 style={{marginBottom: '15px', color: '#333'}}>Гибкий график</h4>
                <p style={{color: '#666', lineHeight: '1.6'}}>Удаленная работа и гибкий подход к организации рабочего процесса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Направления работы */}
      <section style={{padding: '80px 0', background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{textAlign: 'center', marginBottom: '50px'}}>
                <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: '#333'}}>Мы ищем таланты</h2>
                <p style={{fontSize: '1.2rem', color: '#666'}}>Присоединяйтесь к нам в одном из направлений или предложите свою экспертизу</p>
              </div>
            </div>
          </div>
          <div className="row">
            {positions.map((position, index) => (
              <div key={index} className="col-lg-6">
                <div style={{
                  background: 'white',
                  padding: '30px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #667eea'
                }}>
                  <h4 style={{color: '#333', marginBottom: '15px', fontSize: '1.3rem'}}>{position.title}</h4>
                  <p style={{color: '#666', lineHeight: '1.6'}}>{position.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section style={{padding: '80px 0', textAlign: 'center'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: '#333'}}>Готовы стать частью нашей команды?</h2>
              <p style={{fontSize: '1.2rem', marginBottom: '40px', color: '#666', lineHeight: '1.6'}}>
                Мы всегда рады талантливым специалистам, которые разделяют наши ценности и стремятся создавать качественные продукты. 
                Даже если вы не нашли подходящую вакансию - напишите нам!
              </p>
              <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="/contact" style={{
                  background: '#667eea',
                  color: 'white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Написать нам
                </Link>
                <a href="mailto:career@nerox.ru" style={{
                  background: 'transparent',
                  color: '#667eea',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: '2px solid #667eea',
                  display: 'inline-block'
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
