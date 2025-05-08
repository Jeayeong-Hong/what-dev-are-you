import { useFormState, useState } from "react"
import { useNavigate } from "react-router-dom"
import questions from "../data/questions"

function QuestionPage() {
  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useFormState(0)
  const [scores, setScores] = useState({
    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0});
    const currentQustion = questions[currentIndex];

    //선택지 클릭 시 처리 함수
    const handleOptionClick = (type) => {
        //점수입력
        setScores((prev) => ({
            ...prev,
            [type]: prev[type] + 1,
        }))

        //다음 질문으로 이동
        const nextIndex = currentIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentIndex(nextIndex)
        } else {
            //결과 페이지로 이동
            navigate("/result", { state: scores })
        }
    };

    //화면 출력
    return(
        <div>
            <h2>Q{currentIndex + 1}. {currentQuestion.questions}</h2>
            <ui>
                {currentQuestion.option.map((opt, index) => (
                    <li key={index}>
                        <button onClick={() => handleOptionClick(opt.type)}>
                            {opt.text}
                        </button>
                    </li>
                ))}
            </ui>
        </div>
    );
}
export default QuestionPage