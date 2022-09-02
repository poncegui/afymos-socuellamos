import logo from "../images/logo-afymos.png";
import arrow from "../images/ico-scroll-down.svg";
import menu from "../images/ico-menu.svg";

const Header = () => {
    return (

<header className="header" id="header">
<div className="header_superior">
    <div className="header_superior__container">
    <img className="header_superior__container--logo"  
    src={logo} 
    alt="Logo Afymos" />
    <h2 className="header_superior__container--title">Afymos</h2>
    </div>
</div>
    <div className="container__menu">
        <div className="menu">
            <nav className="menu">
           <ul>
            <li><a href="#" id="selected" ><i class="fa-solid fa-house-chimney"></i></a></li>
            <li><a href="#">Diversidad Funcional</a></li>
            <li><a href="#">Modelo de Intervención</a></li>
            <li><a href="#">Organigrama</a></li>
            <li><a href="#">Programas</a>
                <ul>
                    <li><a href="#">Empleo y Formación</a></li>
                    <li><a href="#">Fomento de la autonomía</a></li>
                    <li><a href="#">Integración Sociolaboral</a></li>
                    <li><a href="#">Apoyo Residencial</a></li>
                </ul>
            
            </li>
            <li><a href="#">Centro de Formación</a></li>
            <li><a href="#">Servicios y Proyectos</a>
                <ul>
                    <li><a href="#">Atención a familias</a></li>
                    <li><a href="#">Atención integral a la diversidad funcional </a></li>
                    <li><a href="#">Artesanía</a></li>
                    <li><a href="#">Ocio y Voluntariado</a></li>
                </ul>
            </li>
           </ul>
           </nav>

        </div>
    </div>
    <nav className="header__menu">
        <a className="header__burger" href="https://adalab.es/" target="_blank" title="Web Afymos">
            <img
            src={menu} 
            alt="main menu"/>

        </a>
    </nav>

    <div className="slogan">
        <section className="slogan__text">
            <div className="header_superior__hidden">
                <div className="header_superior__container">
                <img className="header_superior__container--logo" 
                src={logo} 
                alt="logo-afymos.png" />
            <h2 className="header_superior__container--title"> Afymos</h2>
            </div>
            </div>
            <h3 className="slogan__text--phrase">"Dadme un punto de apoyo y moveré el mundo."</h3>
            <h1> Arquímedes de Siracusa</h1>
          <a href="#main">
            <img className="slogan__text--btn" 
            src={arrow} 
            alt="main"/>
          </a>
        </section>
    </div>
</header>


    );
};

export default Header;