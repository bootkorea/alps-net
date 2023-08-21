import React from 'react';
import NavBar from '../NavBar/NavBar';

const RecruitmentPage = () => {
  const isRecruiting = true; // 모집 중이면 true, 아니면 false로 설정

  return (
    <div className="recruitment-container">
      <NavBar isLoggedIn={false} handleLoginClick={() => {}} />
      <h1>동아리원 모집 페이지</h1>
      {isRecruiting ? (
        <p>현재 동아리원을 모집하고 있습니다. 지원해 주세요!</p>
      ) : (
        <p>현재 동아리원 모집이 마감되었습니다.</p>
      )}
    </div>
  );
};

export default RecruitmentPage;
