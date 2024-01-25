
const Collapse = ({ coldata }) => {
  const { question, ans } = coldata;
  return (
    <div className="mb-5 w-full md:w-1/2 mx-auto">
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-indigo-600">{question}</p>
        </div>
        <div className="collapse-content">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;