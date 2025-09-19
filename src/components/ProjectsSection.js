import React from "react";
import Projects from "../projects/Projects";

function ProjectsSection({ openReadme }) {
  const projects = [
    {
      id: "readme1",
      title: "Vinllage",
      desc: "쓰레기 카테고리를 안내하는 친환경 웹 서비스입니다.",
      img: process.env.PUBLIC_URL + "/images/vinllageMain.gif",
      link: "https://vinllage.xyz/"
    },
    {
      id: "readme2",
      title: "맹글맹글",
      desc: "대화형 AI 채팅 웹 서비스입니다.",
      img: process.env.PUBLIC_URL + "/images/maengle.png",
      link: "https://maengle.xyz/"
    },
    {
      id: "readme3",
      title: "Quick Draw",
      desc: "사용자 낙서를 AI가 맞추는 게임형 웹 서비스입니다.",
      img: process.env.PUBLIC_URL + "/images/quickDraw.png",
      link: null
    },
    {
      id: "readme4",
      title: "Chat Bot",
      desc: "실시간 AI 응답을 제공하는 웹 챗봇 UI입니다.",
      img: process.env.PUBLIC_URL + "/images/chatBot.png",
      link: null
    },
    {
      id: "readme5",
      title: "Spring Project",
      desc: "Spring Boot 실습을 겸해 개발한 음식점 추천·당뇨병 자가 진단 서비스입니다.",
      img: [
        process.env.PUBLIC_URL + "/images/restaurant.png",
        process.env.PUBLIC_URL + "/images/diabetes.png"
      ],
      link: null
    }
  ];

  return <Projects projects={projects} openReadme={openReadme} />;
}

export default ProjectsSection;
