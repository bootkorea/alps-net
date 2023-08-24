import React from 'react';
import NavBar from '../NavBar/NavBar';
import './IntroducePage.css';

const IntroducePage = () => {
  return (
    <div className="introduce-container">
      <NavBar isLoggedIn={false} handleLoginClick={() => {}} />
      <h1 className="introduce-title">알프스란?</h1>
      <p className="introduce-text">
        알프스는 전북대학교 컴퓨터인공지능학부의 정식 알고리즘 프로그래밍 스터디 동아리입니다.<br /> <br /> 
        프로그래밍 경시대회 준비와 알고리즘을 학습을 목표로<br />
        2005년 창립 이후, 매년 프로그래밍 대회 참가하여 우수한 성적을 거두고 있으며, 프로그래밍에 가장 열정 있는 회원들과 함께 하고 있습니다.
      </p>
    </div>
  );
};

export default IntroducePage;
