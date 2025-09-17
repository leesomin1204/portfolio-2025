import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection"; // 프로젝트 섹션
import "./style.css";

function App() {
  const [readmeHtml, setReadmeHtml] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  // README 모달 열기
  const openReadme = (sectionId) => {
    fetch(`${process.env.PUBLIC_URL}/readme.html`)
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
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection openReadme={openReadme} /> {/* 프로젝트 섹션 */}
      <Footer />

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
