import { EyeIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { OpenDialogContext } from "../Quiz";

const QuizQuestion = ({ quizData, questionNo, addQuestion }) => {
  const { question, correctAnswer, options } = quizData;
  const [active, setActive] = useState("");
  const openDialog = useContext(OpenDialogContext);

  // console.log(correctAnswer);

  return (
    <div className="mb-12 shadow-2xl sm:py-10 sm:px-14 py-2 px-2 rounded-lg w-full max-w-4xl">
      <div className="relative">
        <p className=" w-11/12 md:text-2xl text-xl text-justify font-medium text-indigo-600 mb-5">
          Quiz {questionNo}: {question}
        </p>
        <EyeIcon
          onClick={() => {
            openDialog(true);
            addQuestion(question, questionNo, correctAnswer);
          }}
          className="w-7 h-7 text-indigo-600 cursor-pointer absolute bottom-0 md:top-0 right-0"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {options.map((opt, ind) => {
          return (
            <div
              onClick={() => setActive(opt)}
              className={`p-10 border border-indigo-600 rounded-lg cursor-pointer text-lg text-indigo-600 ${
                active === correctAnswer && active === opt ? "bg-green-600 text-white" : ""
              } ${active !== correctAnswer && active === opt?"bg-red-600 text-white":""}`}
              key={ind}
            >
              <p>{opt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
