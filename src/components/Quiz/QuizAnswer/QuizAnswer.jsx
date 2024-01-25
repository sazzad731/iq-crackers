import { useContext } from "react";
import { OpenDialogContext } from "../Quiz";
import { XMarkIcon } from "@heroicons/react/24/solid";

const QuizAnswer = ({ question, questionNo, ans }) => {
  const closeDialog = useContext(OpenDialogContext);
  return (
    <div className="w-full h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-slate-500/50">
      <div className="bg-white flex justify-between p-3 rounded-lg w-full md:w-3/6">
        <div className="lg:p-10 w-full">
          <p className="md:text-2xl text-xl text-indigo-400 mb-10">Quiz {questionNo}. {question}</p>
          <p className="text-indigo-600 md:text-xl text-lg">Ans: {ans}</p>
        </div>
        <XMarkIcon
          onClick={() => closeDialog(false)}
          className="w-7 h-7 text-indigo-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default QuizAnswer;