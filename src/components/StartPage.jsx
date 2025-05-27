import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h1>개발자 유형 테스트</h1>
      <Link to="/question">시작하기</Link>
    </div>
  );
}

export default StartPage;
