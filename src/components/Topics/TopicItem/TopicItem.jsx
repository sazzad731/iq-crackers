import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const TopicItem = ({data}) => {
  const {id, name, logo } = data;
  return (
    <div className="p-3 shadow-lg rounded-lg">
      <img className="bg-indigo-100 rounded-lg w-full mb-3" src={logo} alt="" />
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold text-xl text-indigo-600">{name}</p>
        <Link className="flex bg-indigo-600 text-white font-medium text-md p-2 rounded-md" to={`/quiz/${id}`}>
          Start Practice <ArrowRightIcon className="w-6 h-7 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TopicItem;