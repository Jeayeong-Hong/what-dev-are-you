import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="start-container">
      <h1 className="start-title">개발자 유형 테스트</h1>
      <a className="start-button" href="/question">시작하기</a>
    </div>
  );
}

export default StartPage;
