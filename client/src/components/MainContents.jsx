// web/client/src/components/MainContents.jsx
import React, { useEffect } from 'react';
import './MainContents.css';

// AOS로 스크롤 애니메이션 복구
import AOS from 'aos';
import 'aos/dist/aos.css';

const REASONS = [
  '겉보기엔 일반적인 디자인처럼 보이게 함',
  '중요한 정보를 일부러 안 보이게 숨겨 놓음',
  '급하게 결정을 내리도록 유도',
];

const STEPS = [
  { no: 1, title: '확장프로그램\n다운로드 및 설치', desc: 'AI를 통한 스마트하고 정확한 다크패턴 분석을 시작하세요!', bg: '/scroll/step-1.png' },
  { no: 2, title: '웹사이트 페이지\n텍스트 추출', desc: '사용자가 방문한 웹 페이지의 텍스트를 자동으로 수집한 뒤\n서버를 통해 문장 단위로 분석합니다.', bg: '/scroll/step-2.png' },
  { no: 3, title: '학습된 모델 기반\n다크패턴 탐지 결과 제공', desc: '라벨링에 활용된 LLM의 응답을 평가하는 Prometheus로 라벨링 결과를 평가하였습니다. \nResGCN, Attention, Deeproblog 기술을 활용하여 모델링하였습니다.', bg: '/scroll/step-3.png', chip: { left: 'Prometheus', right: 'Neuro Symbolic AI' } },
  { no: 4, title: '다크패턴 세부 유형\n및 위험도 분석 결과 확인', desc: '분석을 진행한 페이지 내의 문장 개수 대비 탐지된 문장의 비율을 이용해 전반적인 페이지의 위험 지수를 나타냅니다.\n다크패턴 가능성, 탐지된 다크패턴 유형 TOP3, 세부 유형도 확인할 수 있습니다.', bg: '/scroll/step-4.png' },
  { no: 5, title: '웹사이트 이동을 통한\n다크패턴 관련 뉴스 확인\n및 퀴즈 체험 가능', desc: '', bg: '/scroll/step-5.png' },
];

export default function MainContents() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 120,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      {/* ====== 섹션 1: 문제 정의(다크) ====== */}
      <section className="main-contents1 mc1--dark">
        <p className="mc1-sub" data-aos="fade-up" data-aos-delay="20">문제 정의</p>

        <h2 className="mc1-title" data-aos="fade-up" data-aos-delay="60">
          소비자가 다크패턴을 알아차리기 어려운 이유
        </h2>

        <div className="mc1-list" data-aos="fade-up" data-aos-delay="120">
          {REASONS.map((text, i) => (
            <div className="mc1-item mc1-item--card" key={i}>
              <span className="mc1-num mc1-num--white">{i + 1}</span>
              <span className="mc1-text mc1-text--dark">{text}</span>
            </div>
          ))}
        </div>

        <div className="mc1-dots" aria-hidden="true" data-aos="zoom-in" data-aos-delay="220">
          <span className="dot" />
          <span className="dot dot--active" />
          <span className="dot" />
        </div>

        <p className="mc1-outro" data-aos="fade-up" data-aos-delay="260">
          다크패턴은 소비자가 <span className="accent-blue">인식하지 못하도록</span> 설계됩니다.
        </p>
      </section>

      {/* ====== 섹션 2: Step 1~5 스크롤 카드 ====== */}
      <section className="howto-section">
        <p className="howto-label" data-aos="fade-up" data-aos-delay="0">다크패턴 탐지 서비스 안내</p>

        <h2 className="howto-title" data-aos="fade-up" data-aos-delay="40">
          AI 기반 다크패턴 분석 서비스에서
          <br />
          해결할 수 있습니다
        </h2>

        <p className="howto-sub" data-aos="fade-up" data-aos-delay="80">
          AI를 통한 스마트하고 정확한 다크패턴 분석을 시작하세요!
        </p>

        <div className="howto-list">
          {STEPS.map((s, idx) => (
            <article
              key={s.no}
              className="howto-card"
              style={{ backgroundImage: `url(${s.bg})` }}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 120}
            >
              <span className="howto-badge">{s.no}</span>

              <div className="howto-text">
                <h3 className="howto-card-title">{s.title}</h3>
                {s.desc ? <p className="howto-card-desc">{s.desc}</p> : null}

                {s.chip && (
                  <div className="howto-chips">
                    <span className="chip ghost"> {s.chip.left} </span>
                    <span className="chip solid"> {s.chip.right} </span>
                  </div>
                )}
              </div>

              {/* 좌측 그라디언트 오버레이(텍스트 가독성) */}
              <div className="howto-left-fade" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
