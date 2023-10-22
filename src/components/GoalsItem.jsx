import { Link } from "react-router-dom";

const GoalsItem = ({ goalItem }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="pb-5">{goalItem.attributes.title}</h2>
      <div className="flex justify-between">
        <h4 className="pb-5">{goalItem.attributes.date}</h4>
        <h2 className="pb-5">
          {goalItem.attributes.from} {goalItem.attributes.to}
        </h2>
      </div>
      <div className="flex justify-between">
        <small className="bg-blue-300 p-1 rounded">Category</small>
        <small className="bg-blue-300 p-1 rounded">
          {goalItem.attributes.status}
        </small>
      </div>
      <Link to={`/goals/${goalItem.id}/edit`}>Edit</Link>
    </div>
  );
};

export default GoalsItem;
