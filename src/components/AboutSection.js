import React from "react";

function AboutSection() {
  return (
    <section className="about" id="about">
      <h2 className="about-heading">ABOUT</h2>
      <div className="about-wrapper">
        <div className="profile-photo">
          <img src={process.env.PUBLIC_URL + "/images/profile.jpg"} alt="프로필 사진" />
        </div>
        <div className="profile-info">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/person.png"} alt="아이콘" className="icon" />
            이소민 (Lee Somin)
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/mobile.png"} alt="아이콘" className="icon" />
            010-7749-1017
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/email.png"} alt="아이콘" className="icon" />
            dlthals1204@gmail.com
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/location.png"} alt="아이콘" className="icon" />
            인천시 미추홀구
          </div>
          <div>
            <a href="https://github.com/leesomin1204" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="아이콘" className="icon" />
              github.com/leesomin1204
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
