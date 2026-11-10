import Nav from './components/UI/navigation/nav.jsx';
import './App.css';

const App = () => (
  <>
    <Nav />
    <main>
      <section className="hero-section" id="home">
        <div className="page-content hero-content">
          <p className="eyebrow">Software that moves your business forward</p>
          <h1>Smart digital solutions, built around you.</h1>
          <p className="hero-description">
            Vectalogix Software helps businesses make the most of technology
            with thoughtful software and dependable support.
          </p>
          <a className="primary-button" href="#services">Explore our services</a>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="page-content">
          <p className="eyebrow">About us</p>
          <h2>Technology with a purpose.</h2>
          <p className="section-description">
            We work with you to understand your needs and deliver practical
            digital solutions that help your organization work better.
          </p>
        </div>
      </section>

      <section className="content-section section-tinted" id="services">
        <div className="page-content">
          <p className="eyebrow">What we do</p>
          <h2>Services for your next step.</h2>
          <div className="service-grid">
            <article className="service-card">
              <h3>Custom software</h3>
              <p>Purpose-built software designed around your workflows.</p>
            </article>
            <article className="service-card">
              <h3>Web development</h3>
              <p>Modern, responsive websites and digital experiences.</p>
            </article>
            <article className="service-card">
              <h3>Technology support</h3>
              <p>Practical guidance to keep your technology moving forward.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section" id="portfolio">
        <div className="page-content">
          <p className="eyebrow">Our work</p>
          <h2>Let’s build something useful.</h2>
          <p className="section-description">
            Have a project in mind? We would be glad to hear what you are
            working on and explore how we can help.
          </p>
          <a className="text-link" href="#contact">Start a conversation</a>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="page-content">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you need.</h2>
          <p className="section-description">
            Get in touch with Vectalogix Software to discuss your next project.
          </p>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="page-content">
        <p>© {new Date().getFullYear()} Vectalogix Software</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  </>
);

export default App;
