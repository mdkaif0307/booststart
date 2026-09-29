import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-box">
            <span></span>
          </span>
          BoostStart
        </div>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <div className="services-menu">
            <a href="#services">
              Services <span className="arrow">⌄</span>
            </a>

            <div className="dropdown">
              <a href="#services">
                <span>▣</span>
                Web Design
              </a>

              <a href="#services">
                <span>&lt;/&gt;</span>
                Development
              </a>

              <a href="#services">
                <span>🛒</span>
                E-Commerce
              </a>

              <a href="#services">
                <span>⌕</span>
                SEO Optimization
              </a>

              <a href="#services">
                <span>•••</span>
                More Services
              </a>
            </div>
          </div>

          <a href="#contact">
            Contact
          </a>

          <button
            className="nav-button"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Build Responsive
            <br />
            Websites with Bootstrap
          </h1>

          <p>
            Create modern, responsive web pages with ease!
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>
        </div>

        {/* HERO ILLUSTRATION */}
        <div className="hero-illustration">
          <div className="desktop-monitor">
            <div className="monitor-screen">
              <div className="browser-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="monitor-content">
                <div className="gray-line"></div>
                <div className="gray-line short"></div>
                <div className="purple-box"></div>
                <div className="gray-line"></div>
              </div>
            </div>

            <div className="monitor-stand"></div>
          </div>

          <div className="tablet">
            <div className="tablet-screen">
              <div className="purple-line"></div>
              <div className="white-line"></div>
              <div className="purple-card"></div>
              <div className="white-line small"></div>
              <div className="white-line small"></div>
            </div>
          </div>

          <div className="phone">
            <div className="phone-screen">
              <div className="phone-top"></div>
              <div className="phone-card"></div>
              <div className="phone-line"></div>
              <div className="phone-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">
            🔧
          </div>

          <h3>
            Easy to Use
          </h3>

          <p>
            Simple and intuitive to work with.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            📱
          </div>

          <h3>
            Fully Responsive
          </h3>

          <p>
            Looks great on all devices
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            ⚙
          </div>

          <h3>
            Customizable
          </h3>

          <p>
            Tailor it to your needs.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <div className="about-content">
          <h2>
            About Us
          </h2>

          <div className="heading-line"></div>

          <h3>
            Innovative Solutions for the Web
          </h3>

          <p>
            We provide top-notch web design and development
            services to help your business succeed online.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/about-image.png"
            alt="BoostStart team"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services" id="services">
        <h2>
          Our Services
        </h2>

        <div className="heading-line center"></div>

        <h3>
          What We Offer
        </h3>

        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              🖥
            </div>

            <h4>
              Web Design
            </h4>

            <p>
              Beautiful and modern designs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              &lt;/&gt;
            </div>

            <h4>
              Development
            </h4>

            <p>
              Robust and efficient coding.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              🛒
            </div>

            <h4>
              E-Commerce
            </h4>

            <p>
              Online store solutions
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              ⌕
            </div>

            <h4>
              SEO Optimization
            </h4>

            <p>
              Improve your search ranking
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <h2>
          Get in Touch
        </h2>

        <div className="heading-line contact-line"></div>

        <p>
          Contact us today for a free consultation!
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Your Message"
            required
          />

          <textarea
            placeholder="Tell us how we can help..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>
          © 2022 BoostStart. All rights reserved.
        </p>

        <div>
          <a href="#">
            Privacy Policy
          </a>

          <span>
            •
          </span>

          <a href="#">
            Terms of Services
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;