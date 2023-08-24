import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import CalendarPage from './components/views/CalendarPage/CalendarPage';
import NoticePage from './components/views/NoticePage/NoticePage';
import RecruitmentPage from './components/views/RecruitmentPage/RecruitmentPage';
import IntroducePage from './components/views/IntroducePage/IntroducePage'; // 추가

function App() {
  // State나 로그인 상태 관리 등을 위한 필요한 Hook들을 여기에 선언할 수 있습니다.

  return (
    <Router>
      <div>
        {/* 네비게이션 바 등의 공통 컴포넌트들은 여기에 위치시킬 수 있습니다. */}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/notice" component={NoticePage} />
          <Route path="/recruitment" component={RecruitmentPage} />
          <Route path="/introduce" component={IntroducePage} /> {/* 추가 */}
        </Switch>
        {/* 푸터 등의 공통 컴포넌트들은 여기에 위치시킬 수 있습니다. */}
      </div>
    </Router>
  );
}

export default App;
