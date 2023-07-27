import { useState, useEffect,useRef } from 'react';
import './App.css';
import logoImage from './img/image.png';
import emailjs from '@emailjs/browser'
import img1 from './img/legalização.jpg';
import img2 from './img/Equipe de profissionais.jpg';
import img3 from './img/Parcerias com corretores.jpg';
import img4 from './img/Acompanhamento.jpg';
import img5 from './img/imoveis.jpg';
import img6 from './img/executivo.jpg';
import img8 from './img/ani1.jpeg';
import img8a from './img/mob1.jpeg';
import img9 from './img/ani2.jpeg';
import img9a from './img/mob2.jpeg';
import img10 from './img/ani3.jpeg';
import img10a from './img/mob3.jpeg';


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
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);
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
const handleLeftClick = (e) => {
  e.preventDefault();
  carousel.current.scrollLeft -= carousel.current.offsetWidth;
};

const handleRightClick = (e) => {
  e.preventDefault();

  carousel.current.scrollLeft += carousel.current.offsetWidth;
};

if (!data || !data.length) return null;

  return (
    <div className="App">
    
      <header>

        <div className="container">
          <div className="logo"><a href="#slider"><img src={logoImage} alt="Logo"  /></a></div>
          <div className="menu">
            <nav>
              <a href="#home">INICIO</a>
              <a href="#sobre">SOBRE</a>
              <a href="#servicos">SERVIÇOS</a>
              <a href="#contato">CONTATO</a>
              <a href="#endereço">ENDEREÇO</a>
            </nav>
          </div>
          <div className="social">
           
            <div className="card">
  <a href="https://www.instagram.com/anicetoconsultoria/" className="socialContainer containerOne">
    <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
 
  
  <a href="https://wa.me/5521971596965" className="socialContainer containerFour">
    <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>
</div>             


          </div>
        </div>
      </header>

      <section className="slider" id="slider">
        <div className="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />

          <div className="slide-box primeiro">
            <img className="img-desktop" src={img8} alt="slide 1" />
            <img className="img-mobile" src={img8a} alt="slide 1" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={img9} alt="slide 2" />
            <img className="img-mobile" src={img9a} alt="slide 2" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={img10} alt="slide 3" />
            <img className="img-mobile" src={img10a} alt="slide 3" />
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
          <h2 className="D"id="D">INICIO</h2>
          <p>Bem-vindo à nossa página inicial de consultoria! Aqui, oferecemos soluções personalizadas e inovadoras para atender às suas necessidades de negócio. Somos uma equipe de consultores altamente capacitados e experientes, prontos para auxiliá-lo a alcançar seus objetivos com sucesso.</p>
          
        </div>
      </section>

      <section id="sobre">
        <div className="container1">
          <h2 className="D"id="D">SOBRE</h2>
          <p>Somos uma empresa familiar especializada em legalização de imóveis. Atendemos principalmente clientes em regiões mais periféricas, como São Gonçalo e Baixada, que construíram suas casas sem dar entrada na prefeitura e agora precisam regularizar a situação. Oferecemos serviços completos, desde medição do terreno, elaboração de plantas, até o acompanhamento do processo de legalização junto à prefeitura.</p>
</div>
</section>

<section id="Diferencial1" className="container1">
<div className="container1">
<h2 className="D"id="D">DIFERENCIAL</h2>
<div className="container01">
      
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id,  price } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
               
              
              </div>
              <div className="info">
           
              
                <span className="price"> {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>

</div>
  </section>


      <section id="servicos">
        <div className="container1">
          <h2 className="servico"id="servico">SERVIÇOS</h2>

          <section id="Diferencial" className="imagem" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div className="imagem-container1">
            <img src={img5} alt="Legalização" />
            <p><strong>Legalização de Imóveis:</strong><br />Realizamos medição do terreno, perímetro, medição da casa, assinatura de planta, obtenção de RT (Responsabilidade Técnica) e todo o processo de legalização na prefeitura. Nosso diferencial é acompanhar o cliente em todas as etapas, garantindo uma solução completa e segura.</p></div>
          <div className="imagem-container1">
            <img src={img6} alt="Legalização" />
            <p><strong>Projeto Executivo:</strong><br /> Para clientes que desejam construir, oferecemos suporte completo para a obtenção de autorização para construção junto à prefeitura. Elaboramos projetos detalhados de estrutura, fundação, elétrica, hidráulica e outros requisitos necessários para a execução da obra.</p></div>
       
          </section>
        </div>
      </section>

      <section id="contato">
        <div className="container1">
          <h2 className="contato1"id="contato1">CONTATO</h2>
          <form className="form"  onSubmit={sendEmail}>
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
      <section id="endereço">
        <div className="container2">
          <h2 className="D"id="D" >ENDEREÇO</h2>
          
          <iframe    className="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.370670453591!2d-43.05230452558537!3d-22.825771834978937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999ae547056747%3A0xa1a900ebfa2f27d!2sR.%20Dr.%20Fel%C3%ADciano%20Sodr%C3%A9%2C%2078%20-%20sala%201710%20-%20Centro%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024440-440!5e0!3m2!1spt-BR!2sbr!4v1690235194642!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: "1px solid #ccc" }} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
           
          </iframe>
          <p>Endereço: R. Dr. Felíciano Sodré, 78 - sala 1710 - Centro, São Gonçalo<br/> - RJ, 24440-000</p>
          <p>Telefone: (21) 97159-6965 </p>
        </div>
      </section>
      <footer className="footer">
  <div className="rodape">
    <p> &copy; 2023 Aniceto </p>
          
  </div>
</footer>

    </div>
  ); 
   
} 

export default App;
