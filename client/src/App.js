/* eslint-disable no-undef */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Common/Header/Header';
import TopQuestions from './Components/Question/TopQuestions/TopQuestions';
import AnswerUpdatePage from './Pages/Question/AnswerUpdatePage/AnswerUpdatePage';
import QuestionUpdatePage from './Pages/Question/QuestionUpdate.js/QuestionUpdatePage';
import MyPage from './Pages/My/MyPage';
import MainPage from './Pages/Common/MainPage/MainPage';
import Sidebar from './Components/Common/Sidebar/Sidebar';
import Footer from './Components/Common/Footer/Footer';
import QuestionDetail from './Pages/Question/QuestionDetails/QuestionDetail';
import MyPage from './Pages/My/MyPage.jsx';
import PasswordUpdatePage from './Pages/My/PasswordUpdatePage.jsx';
import LoginPage from './Pages/LoginSignup/LoginPage.jsx';
import QuestionCreatePage from './Pages/Question/QuestionCreatePage/QuestionCreatePage';
import AllQuestions from './Components/Question/AllQuestions/AllQuestions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/home" element={<div>HomePage 홈 팀원소개</div>} />
          <Route path="/members" element={<div>SignupPage 회원가입</div>} />
          <Route
            path="/members/welcome"
            element={<div>AfterSignupPage 회원가입 완료</div>}
          />
          <Route path="/questions" element={<MainPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/questions/board" element={<AllQuestions />} />
          <Route path="/questions/ask" element={<QuestionCreatePage />} />
          <Route path="/questions/:questionId" element={<QuestionDetail />} />
          <Route
            path="/questions/:questionId/update"
            element={<QuestionUpdatePage />}
          />
          <Route
            path="/questions/:questionId"
            element={<div>QuestionDetailPage 질문 상세 페이지</div>}
          />
          <Route
            path="/questions/{question-id}/update"
            element={<div>QuestionUpdatePage 질문 수정 페이지</div>}
          />
          <Route
            path="/questions/:questionId/answers/:answerId/edit"
            element={<AnswerUpdatePage />}
            path="/questions/:questionId/answers/:answerId/edit"
            element={<div>AnswerUpdatePage 답변 수정 페이지</div>}
          />
          <Route path="/members/" element={<MyPage />} />
          <Route
            path="/members/{memberId}/delete"
            element={<div>ProfileDelete 회원정보 삭제</div>}
          />
          <Route
            path="/members/{memberId}/yourlogin"
            element={<div>ProfileYourlogins My Logins</div>}
          />
          <Route
            path="/members/{memberId}/yourlogin/change-password"
            element={<PasswordUpdatePage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;