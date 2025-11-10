import React, { useEffect } from 'react';
import './MainBanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chromeIcon from '../assets/chrome-icon.png';

const MainBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="main-banner">
      <div className="banner-content" data-aos="fade-right">
        {/* 윗줄(아이브로우) */}
        <p className="main-banner-eyebrow">
          더 이상 속지 마세요! 소비자를 위한 AI
        </p>

        {/* 메인 타이틀 (데스크톱에서 한 줄 고정) */}
        <h1 className="main-banner-title">
          AI 기반 다크패턴 분석 서비스
        </h1>

        {/* 보조 설명 */}
        <p className="main-banner-subtitle">
          구글 확장프로그램으로 쉽게 사용하세요.
        </p>

        {/* 버튼 */}
        <div className="main-banner-buttons">
          <a
            href="https://chrome.google.com/webstore"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="크롬 웹 스토어에서 확장 프로그램 다운로드"
          >
            <img src={chromeIcon} alt="chrome icon" className="download-icon" />
            구글 확장자 다운받기
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
