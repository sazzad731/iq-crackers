import { useLoaderData } from "react-router-dom";
import Collapse from "./Collapse/Collapse";

const Blog = () =>{
  const data = useLoaderData();
  return (
    <div>
      {
        data.map(collapse=> <Collapse coldata={collapse} key={collapse.id}/>)
      }
    </div>
  );
};

export default Blog;