// web/client/src/components/MainMenu.jsx
import React, { useEffect } from 'react';
import './MainMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainMenu() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 100 });
  }, []);

  const QUOTES = [
    '품절 임박!',
    '방금 누군가 이 상품을 구매했어요.',
    '탈퇴 시 모든 혜택이 사라집니다.',
    '계속하려면 약관에 동의해주세요.',
  ];

  return (
    <section className="quote-section" id="quote-section">
      {/* 제목 */}
      <h2 className="quote-title" data-aos="fade-up">
        이런 문구,<br />익숙하지 않으신가요?
      </h2>

      {/* 위 큰 따옴표 */}
      <div className="quote-mark" aria-hidden="true">❝</div>

      {/* 말풍선 리스트 */}
      <div className="quote-list">
        <div
          className="quote-bubble w-sm shift-l1"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {QUOTES[0]}
        </div>

        <div
          className="quote-bubble w-lg shift-r1"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          {QUOTES[1]}
        </div>

        <div
          className="quote-bubble w-lg shift-l2"
          data-aos="fade-up"
          data-aos-delay="280"
        >
          {QUOTES[2]}
        </div>

        <div
          className="quote-bubble w-md shift-r2"
          data-aos="fade-up"
          data-aos-delay="380"
        >
          {QUOTES[3]}
        </div>
      </div>

      {/* 아래 큰 따옴표 */}
      <div className="quote-mark bottom" aria-hidden="true">❞</div>

      {/* 설명 블록 */}
      <div className="quote-explain" data-aos="fade-up" data-aos-delay="460">
        <h3 className="quote-explain-title">
          모두 소비자를 속이는 <span className="accent">다크패턴</span>입니다.
        </h3>
        <p className="quote-explain-desc">
          다크 패턴은 소비자를 속여 특정 행동을 하도록 유도하기 위해 교묘하게 설계된
          사용자 인터페이스나 디자인을 말합니다.<br />
          즉, 사용자의 의사결정을 방해하거나 착각을 유도하여 소비자가 예상치 못한 결과에
          이르게 하는 방식이죠.
        </p>
      </div>
    </section>
  );
}
