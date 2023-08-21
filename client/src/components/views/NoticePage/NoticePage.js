import React from 'react';
import NavBar from '../NavBar/NavBar';
import './NoticePage.css';

const NoticePage = () => {
  // 가상의 공지사항 데이터 배열
  const notices = [
    { id: 1, title: '중요 공지사항', content: '이것은 중요한 공지사항 내용입니다.' },
    { id: 2, title: '일반 공지사항', content: '이것은 일반적인 공지사항 내용입니다.' },
    // 추가적인 공지사항 데이터들...
  ];

  return (
    <div className="notice-container">
      <NavBar isLoggedIn={true} handleLoginClick={() => {}} />

      <div className="notices">
        {notices.map(notice => (
          <div key={notice.id} className="notice">
            <h2>{notice.title}</h2>
            <p>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticePage;
