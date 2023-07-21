import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './App.css';
import logoImage from './img/image.png';
import logoImage1 from './img/slide-1.jpg';
import logoImage2 from './img/slide-1-mob.jpg';
import emailjs from '@emailjs/browser'

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    // Implement your mobile menu click logic here
  }
}

function App() {
  useEffect(() => {
    // Initialize the MobileNavbar when the component mounts
    const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li a");
    mobileNavbar.animateLinks();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

function sendEmail(e){
  e.preventDefault();
  if(name===''|| email ===''|| message ===''){
    alert("Preencha todos os campos");return;
  }
  const templateParams={
    from_name:name,
    message: message,
    email: email
  }
  emailjs.send("service_o34dz6g","template_hm2vjpm",templateParams,"ajJxgFZDmZhR6Ph8_")
  .then((response)=>{alert("E-mail enviado", response.status, response.text)
  setName('')
  setEmail('')
  setMessage('')
}, (err)=>{alert("Erro: ",err)})
}
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo"><img src={logoImage} alt="Logo" /></div>
          <div className="menu">
            <nav>
              <a href="#home">home</a>
              <a href="#sobre">sobre</a>
              <a href="#servicos">serviços</a>
              <a href="#contato">contato</a>
            </nav>
          </div>
          <div className="social">
            <button><i className="fa-brands fa-instagram"><FaInstagram/></i></button>
            <button><i className="fa-brands fa-facebook"><FaFacebook /></i></button>
          </div>
        </div>
      </header>

      <section className="slider">
        <div className="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />

          <div className="slide-box primeiro">
            <img className="img-desktop" src={logoImage1} alt="slide 1" />
            <img className="img-mobile" src={logoImage2} alt="slide 1" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={logoImage1} alt="slide 3" />
            <img className="img-mobile" src={logoImage2} alt="slide 1" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={logoImage1} alt="slide 3" />
            <img className="img-mobile" src={logoImage2} alt="slide 3" />
          </div>

          <div className="nav-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>

          <div className="nav-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
          </div>
        </div>
      </section>

      <section id="home">
        <div className="container1">
          <h2>Home</h2>
          <p>Bem-vindo à nossa página inicial de consultoria! Aqui, oferecemos soluções personalizadas e inovadoras para atender às suas necessidades de negócio. Somos uma equipe de consultores altamente capacitados e experientes, prontos para auxiliá-lo a alcançar seus objetivos com sucesso.</p>
          {/* O restante do conteúdo foi omitido por motivos de espaço */}
        </div>
      </section>

      <section id="sobre">
        <div class="container1">
          <h2>Sobre</h2>
          <p>A consultoria é uma prática profissional que desempenha um papel fundamental em diversas áreas e setores da economia. Trata-se de um serviço especializado e estratégico, oferecido por profissionais altamente capacitados e experientes, conhecidos como consultores.</p>
          {/* O restante do conteúdo foi omitido por motivos de espaço */}
        </div>
      </section>

      <section id="servicos">
        <div class="container1">
          <h2>Serviços</h2>
          <p>Os serviços de consultoria são essenciais para orientar empresas e indivíduos em busca de soluções personalizadas e eficazes para seus desafios. Com vasta experiência e conhecimento especializado, os consultores oferecem um suporte estratégico valioso, abrangendo diversas áreas.</p>
          {/* O restante do conteúdo foi omitido por motivos de espaço */}
        </div>
      </section>

      <section id="contato">
        <div class="container1">
          <h2>Contato</h2>
          <form className="form" onSubmit={sendEmail}>
            <input 
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
           <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
            <input className="button" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </div>
  ); 
   
} 

export default App;
