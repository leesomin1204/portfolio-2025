import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [readmeHtml, setReadmeHtml] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  // README 모달 열기
  const openReadme = (sectionId) => {
    fetch("/readme.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const section = doc.getElementById(sectionId);
        setReadmeHtml(section ? section.innerHTML : "내용을 불러올 수 없습니다.");
        setActiveModal("readmeModal");
      });
  };

  // 모달 닫기
  const closeModal = () => {
    setActiveModal(null);
  };

  // 타이핑 효과
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

  // 프로젝트 데이터
  const projects = [
    {
      id: "readme1",
      title: "Vinllage",
      desc: "AI 기반 카메라 인식을 통해 쓰레기 카테고리를 안내하는 친환경 웹 서비스",
      img: "./images/vinllageMain2.gif",
      link: "https://vinllage.xyz/"
    },
    {
      id: "readme2",
      title: "맹글맹글",
      desc: "전이 학습 기반 자연어 처리 AI로 다양한 대화 경험을 제공하는 채팅 웹 서비스",
      img: "./images/maengle.png",
      link: "https://maengle.xyz/"
    },
    {
      id: "readme3",
      title: "Quick Draw",
      desc: "AI가 사용자의 낙서를 인식하여 맞추는 게임형 웹 서비스",
      img: "./images/quickDraw.png",
      link: null
    },
    {
      id: "readme4",
      title: "Chat Bot",
      desc: "React 기반으로 사용자의 메시지를 AI 서버에 전달하고 응답을 실시간 표시하는 웹 챗봇 UI",
      img: "./images/chatBot.png",
      link: null
    },
    {
      id: "readme5",
      title: "Spring Project",
      desc: "Spring Boot와 Python ML 모델을 연동해 위치 기반 식당 추천과 당뇨병 발병 위험 예측을 제공",
      img: "./images/restaurant2.jpg",
      link: null
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="main-header">
        <nav className="nav-container">
          <ul className="nav-menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-text">
          <h1 className="home-title" data-text="안녕하세요 이소민입니다."></h1>
          <p className="home-subtitle">
            공간 UX 설계 경험을 바탕으로,<br />
            이제는 디지털 환경에서 더 나은 사용자 경험을 만들어가고 있습니다.<br />
            직관적이고 효율적인 인터페이스 구현에 집중하며
            끊임없이 성장하는 개발자가 되고 싶습니다.
          </p>

            {/* 더 알아보기 */}
            <div className="more-wrapper">
            <a href="#about" className="more-link">
              더 알아보기
            </a>
            <a href="#about" className="arrow-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="arrow-down"
              >
                <path
                  fill="currentColor"
                  d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 
                  356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 
                  5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 
                  5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 
                  4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 
                  9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="about-heading">ABOUT</h2>
        <div className="about-wrapper">
          <div className="profile-photo">
            <img src="./images/profile.jpg" alt="프로필 사진" />
          </div>
          <div className="profile-info">
            <div><img src="./images/profile.png" alt="아이콘" className="icon" />이소민 (Lee Somin)</div>
            <div><img src="./images/mobile.png" alt="아이콘" className="icon" />010-7749-1017</div>
            <div><img src="./images/email.png" alt="아이콘" className="icon" />dlthals1204@gmail.com</div>
            <div><img src="./images/location.png" alt="아이콘" className="icon" />인천시 미추홀구</div>
            <div>
              <a href="https://github.com/leesomin1204" target="_blank">
                <img src="./images/github.png" alt="아이콘" className="icon" />
                github.com/leesomin1204
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>SKILLS</h2>

        <div className="skill-category">
          <h3>Frontend</h3>
          <span className="tech react">React</span>
          <span className="tech nextjs">Next.js</span>
          <span className="tech javascript">JavaScript</span>
          <span className="tech typescript">TypeScript</span>
          <span className="tech html5">HTML5</span>
          <span className="tech css3">CSS3</span>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <span className="tech springboot">Spring Boot</span>
          <span className="tech jpa">JPA/Hibernate</span>
          <span className="tech restful">RESTful API</span>
          <span className="tech mysql">MySQL</span>
          <span className="tech java">Java</span>
          <span className="tech python">Python</span>
        </div>

        <div className="skill-category">
          <h3>DevOps / Infra</h3>
          <span className="tech aws">AWS</span>
          <span className="tech githubpages">GitHub Pages</span>
          <span className="tech docker">Docker</span>
          <span className="tech dockerhub">Docker Hub</span>
        </div>

        <div className="skill-category">
          <h3>Tools & IDEs</h3>
          <span className="tech git">Git</span>
          <span className="tech github">GitHub</span>
          <span className="tech vscode">VSCode</span>
          <span className="tech intellij">IntelliJ</span>
        </div>

        <div className="skill-category">
          <h3>AI & API</h3>
          <span className="tech yolo">YOLO API</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              {p.link ? (
                <a href={p.link}>
                  <div className="project-image" style={{ backgroundImage: `url(${p.img})` }}></div>
                </a>
              ) : (
                <div className="project-image" style={{ backgroundImage: `url(${p.img})` }}></div>
              )}
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="button-group">
                <button className="btn-readme" onClick={() => openReadme(p.id)}>README</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer"></footer>

      {/* README 모달 */}
      <div className={`modal ${activeModal === "readmeModal" ? "active" : ""}`} id="readmeModal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <div
            id="readmeContent"
            className="readme-modal"
            dangerouslySetInnerHTML={{ __html: readmeHtml }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
