import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import QuizAnswer from "./QuizAnswer/QuizAnswer";
import { createContext, useState } from "react";

export const OpenDialogContext = createContext(false);

const Quiz = () => {
  const [ open, setOpen ] = useState(false);
  const [ question, setQuestion ] = useState('');
  const [ ans, setAns ] = useState('');
  const [questionNo, setQuestionNo] = useState(0)
  const quizData = useLoaderData();
  const { name, total, questions } = quizData.data;

  const addQuestion = (ques, questionNo, correctAnswer) => {
    setQuestion(ques);
    setQuestionNo(questionNo);
    setAns(correctAnswer)
  };
  return (
    <OpenDialogContext.Provider value={setOpen}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-bold mb-5 text-indigo-600">
          Quiz of {name}
        </h1>
        <p className="text-xl font-semibold text-indigo-600 mb-10">
          Total Quiz: {total}
        </p>
        {questions.map((ques, index) => (
          <QuizQuestion
            quizData={ques}
            questionNo={index + 1}
            key={ques.id}
            addQuestion={addQuestion}
          />
        ))}
        {open && <QuizAnswer question={question} questionNo={questionNo} ans={ans} />}
      </div>
    </OpenDialogContext.Provider>
  );
};

export default Quiz;