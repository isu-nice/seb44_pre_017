/* eslint-disable react/prop-types*/
import * as S from './QuestionBox.styled';
import { useNavigate } from 'react-router-dom';

const QuestionBox = ({ question }) => {
  const navigate = useNavigate();

  const goToQuestionDetail = () => {
    const questionId = question.questionId;
    navigate(`/questions/${questionId}`);
  };

  if (!question) {
    return null;
  }

  const { created_at } = question;

  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `${Math.floor(seconds)}초 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  //시간 데이터에 해당하는 값을 api 데이터의 날짜 파라미터로 변경합니다.
  const nowDate = detailDate(new Date({ created_at }));

  return (
    <S.ItemContainer>
      <S.Left>
        <S.Votes>0 votes</S.Votes>
        <S.Answers>{question.commentsNumber} answers</S.Answers>
        <S.Views>{question.views} views</S.Views>
      </S.Left>
      <S.Right>
        <S.Title onClick={goToQuestionDetail}>{question.title}</S.Title>
        <S.UserInfo>
          <S.User>{question.writer.nickname}</S.User>
          <S.CreatedAt>{nowDate}</S.CreatedAt>
        </S.UserInfo>
        <S.Empty></S.Empty>
      </S.Right>
    </S.ItemContainer>
  );
};

export default QuestionBox;
