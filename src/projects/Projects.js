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
              {/* 이미지와 링크 */}
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-image"
                  />
                </a>
              ) : (
                <img
                  src={p.img}
                  alt={p.title}
                  className="project-image"
                />
              )}

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
                    자세히 보기
                  </button>
                </a>
              ) : (
                <div className="project-overlay">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="btn-readme" onClick={() => openReadme(p.id)}>
                    자세히 보기
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
