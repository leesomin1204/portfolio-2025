import { useState, useEffect, useRef } from "react";
import "./style.css";

const tabs = [
  {
    label: "Frontend",
    items: [
      { name: "React", desc: "컴포넌트 구조를 이해하고 useState, useEffect, useCallback 등의 훅을 활용해 동적인 UI를 구현할 수 있습니다." },
      { name: "Next.js", desc: "TypeScript 문법을 준수하며 컴포넌트를 작성하고 컨테이너를 구성할 수 있습니다." },
      { name: "JavaScript", desc: "기본 문법을 이해하고, DOM 조작과 이벤트 처리로 동적인 웹 기능을 구현할 수 있습니다." },
      { name: "TypeScript", desc: "타입을 활용해 안정적인 코드를 작성하고 재사용 가능한 컴포넌트를 구현할 수 있습니다." },
      { name: "HTML5", desc: "시맨틱 태그를 활용해 구조화된 마크업을 작성하고, 웹 콘텐츠를 표현할 수 있습니다." },
      { name: "CSS3", desc: "선택자와 레이아웃, 스타일 속성을 활용하여 웹 페이지 디자인을 구성할 수 있습니다." }
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", desc: "Java 기반 웹 프레임워크를 활용하여 서버 애플리케이션을 개발할 수 있습니다." },
      { name: "JPA/Hibernate", desc: "ORM을 활용하여 데이터베이스와 객체를 효율적으로 매핑할 수 있습니다." },
      { name: "RESTful API", desc: "RESTful API를 설계하고 클라이언트와 서버 간 데이터를 주고받을 수 있습니다." },
      { name: "MySQL", desc: "관계형 데이터베이스를 설계하고 쿼리를 작성할 수 있습니다." },
      { name: "Java", desc: "서버 사이드 개발을 위해 Java로 애플리케이션을 구현할 수 있습니다." },
      { name: "Python", desc: "백엔드 로직과 AI 관련 기능을 Python으로 구현할 수 있습니다." }
    ]
  },
  {
    label: "DevOps / Infra",
    items: [
      { name: "AWS", desc: "클라우드 서비스를 활용하여 인프라를 구축하고 운영할 수 있습니다." },
      { name: "GitHub Pages", desc: "정적 웹사이트를 배포하고 호스팅할 수 있습니다." },
      { name: "Docker", desc: "컨테이너를 활용하여 애플리케이션을 패키징하고 배포할 수 있습니다." },
      { name: "Docker Hub", desc: "Docker 이미지를 저장하고 관리할 수 있습니다." }
    ]
  },
  {
    label: "AI & API",
    items: [
      { name: "OpenAI API", desc: "언어 모델을 활용한 AI 기능을 구현할 수 있습니다." },
      { name: "YOLO API", desc: "객체 인식을 활용하여 이미지나 영상에서 객체를 탐지할 수 있습니다." },
      { name: "TensorFlow", desc: "머신러닝 모델을 설계하고 학습시킬 수 있습니다." },
    ]
  },
  {
    label: "Tools & IDEs",
    items: [
      { name: "Git", desc: "버전 관리를 통해 코드를 효율적으로 관리할 수 있습니다." },
      { name: "GitHub", desc: "코드 호스팅 및 협업 환경을 구성할 수 있습니다." },
      { name: "VSCode", desc: "코드를 작성하고 디버깅할 수 있습니다." },
      { name: "IntelliJ", desc: "Java 기반 개발 환경에서 애플리케이션을 구현할 수 있습니다." }
    ]
  }
];

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const [fixedHeight, setFixedHeight] = useState(0);

  // 최대 높이 계산 후 고정
  useEffect(() => {
    if (!contentRef.current) return;

    const heights = tabs.map((tab) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.width = contentRef.current.clientWidth + "px";
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.gap = "0.5rem";
      div.innerHTML = tab.items
        .map((item) => `<div style="display:flex;gap:2rem;"><div>${item.name}</div><div>${item.desc}</div></div>`)
        .join("");
      document.body.appendChild(div);
      const h = div.offsetHeight;
      document.body.removeChild(div);
      return h;
    });

    setFixedHeight(Math.max(...heights));
  }, []);

  return (
    <div className="skills-container">
      {/* 탭 버튼 */}
      <div className="tabList">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabBtn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <span className="skillTabActiveter" style={{ "--index": activeTab }}></span>
      </div>

      {/* 하위 메뉴 이름 + 설명 */}
      <div
        className="tabContent"
        ref={contentRef}
        style={{ minHeight: `${fixedHeight}px` }}
      >
        {tabs[activeTab].items.map((item, i) => (
          <div key={i} className="tabItem">
            <div className="tabName">{item.name}</div>
            <div className="tabDesc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
