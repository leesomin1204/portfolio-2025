import React from "react";
import './style.css';

function Projects({ projects, openReadme }) {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-browser-frame">
              {/* 이미지 wrapper */}
              <div className="project-image-wrapper">
                {/* 브라우저 탭 */}
                <div className="project-tab">
                  <div className="tab-buttons">
                    <span className="tab-btn close"></span>
                    <span className="tab-btn minimize"></span>
                    <span className="tab-btn maximize"></span>
                  </div>
                </div>

                {/* 이미지와 링크, 인라인 스타일 적용 */}
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="project-image"
                      style={{
                        width: p.width || "100%",
                        height: p.height || "auto",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                        borderRadius: "0 0 5px 5px",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
                      }}
                    />
                  </a>
                ) : (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-image"
                    style={{
                      width: p.width || "100%",
                      height: p.height || "auto",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "0 0 5px 5px",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
                    }}
                  />
                )}
              </div>

              {/* 프레임 전체 overlay */}
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-overlay"
                >
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button
                    className="btn-readme"
                    onClick={(e) => {
                      e.preventDefault();
                      openReadme(p.id);
                    }}
                  >
                    README
                  </button>
                </a>
              ) : (
                <div className="project-overlay">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="btn-readme" onClick={() => openReadme(p.id)}>
                    README
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
