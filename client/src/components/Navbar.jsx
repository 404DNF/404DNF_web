import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">
          DARKPATTERN DETECTION
        </Link>
      </div>

      <ul className="navbar-menu">
        <li><Link to="/analyze">다크패턴 탐지</Link></li>
        <li><Link to="/learn">다크패턴 알아보기</Link></li>
        <li><Link to="/news">관련 뉴스</Link></li>
        <li><Link to="/quiz">다크패턴 퀴즈</Link></li>
      </ul>

      <div className="navbar-login">
        <Link to="/login" className="login-btn">로그인/회원가입</Link>
      </div>
    </nav>
  );
};

export default Navbar;
