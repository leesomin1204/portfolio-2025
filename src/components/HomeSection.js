import React, { useEffect } from "react";

function HomeSection() {
  useEffect(() => {
    const el = document.querySelector(".home-title");
    if (!el) return;

    const text = el.getAttribute("data-text");
    const highlight = "이소민";

    const typeText = () => {
      el.textContent = "";
      let i = 0;

      function type() {
        if (i < text.length) {
          const char = text.charAt(i);
          if (i >= text.indexOf(highlight) && i < text.indexOf(highlight) + highlight.length) {
            el.innerHTML += `<strong>${char}</strong>`;
          } else {
            el.innerHTML += char;
          }
          i++;
          setTimeout(type, 150);
        }
      }

      type();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) typeText();
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1 className="home-title" data-text="안녕하세요 이소민입니다."></h1>
        <p className="home-subtitle">
          공간 UX 설계 경험을 바탕으로,<br />
          이제는 디지털 환경에서 더 나은 사용자 경험을 만들어가고 있습니다.<br />
          직관적이고 효율적인 인터페이스 구현에 집중하며
          끊임없이 성장하는 개발자가 되고 싶습니다.
        </p>

        <div className="more-wrapper">
          <a href="#about" className="more-link">더 알아보기</a>
          <a href="#about" className="arrow-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="arrow-down">
              <path fill="currentColor" d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 
              356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 
              5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 
              5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 
              4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 
              9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
