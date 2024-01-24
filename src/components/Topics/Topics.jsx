import { useLoaderData } from "react-router-dom";
import TopicItem from "./TopicItem/TopicItem";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div className="w-full max-w-7xl mx-auto h-screen flex flex-col lg:flex-row items-center justify-between gap-5">
      {topics.data.map((data) => (
        <TopicItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Topics;