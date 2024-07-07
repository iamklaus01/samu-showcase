import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Icon } from '@iconify/react';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('sticky');
      } else {
        document.querySelector('.header').classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="w-full hidden md:flex items-center justify-around flex-wrap">
            <div className="w-9/12 md:w-2/12 flex justify-start md:justify-center">
              <div className="logo">
                <a href="index.html">
                  <img className="w-10 md:w-12" src={logo} alt="SAMU BENIN" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-9/12 lg:w-7/12 flex justify-center">
              <div className="main-menu">
                <nav className="navigation">
                  <ul className="nav menu">
                    <li className="active"><a href="#">Accueil</a></li>
                    <li><a href="#about">Nous découvrir</a></li>
                    <li><a href="#services">Nos services</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="lg:w-3/12 hidden lg:flex justify-center">
              <div className="cta-cover">
                <a href="#medical-cover" className="btn">Couverture médicale</a>
              </div>
            </div>
          </div>

          <div className="mobile-nav flex px-4 justify-between items-center md:hidden">
            <div className="logo">
              <a href="index.html">
                <img className="w-10" src={logo} alt="SAMU BENIN" />
              </a>
            </div>
            <div className="flex px-4 justify-end items-center md:hidden">
              <Icon onClick={() => setVisible(true)} icon="ic:round-menu" className="header-icon text-2xl"/>
            </div>
          </div>

          <MobileMenu visible={visible} setVisible={setVisible}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
