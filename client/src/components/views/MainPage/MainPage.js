import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './MainPage.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleSignupClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
      <NavBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />

      <div className="content">
        <div className="graphic-container">
          <img
            src="https://via.placeholder.com/400"
            alt="그래픽 이미지"
            className="graphic-image"
          />
        </div>
        {/* MainPage의 내용을 넣으세요 */}
      </div>

      {/* 모달 윈도우 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="modal-btn-container">
              <button className="modal-login-btn" onClick={handleLogin}>
                로그인
              </button>
              <Link
                to="/login"
                className="modal-signup-btn"
                onClick={handleSignupClick}
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
