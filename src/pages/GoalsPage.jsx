import { useEffect, useState } from "react";
import GoalsItem from "../components/GoalsItem";
import axios from "axios";
import { Link } from "react-router-dom";

const GoalsPage = () => {
  const [goals, setGoals] = useState(null);

  useEffect(() => {
    const getGoals = async () => {
      const res = await axios.get("http://localhost:1337/api/goals");

      setGoals(res.data);
    };

    getGoals();

    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto w-4/5 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {goals !== null &&
            goals.data.map((goal) => (
              <GoalsItem key={goal.id} goalItem={goal} />
              //   <div key={goal.id} className="bg-white p-5 rounded-md">
              //     <h2 className="pb-5">{goal.attributes.title}</h2>
              //     <div className="flex justify-between">
              //       <h4 className="pb-5">06-25-23</h4>
              //       <h2 className="pb-5">10AM - 11AM</h2>
              //     </div>
              //     <div className="flex justify-between">
              //       <small className="bg-blue-300 p-1 rounded">Category</small>
              //       <small className="bg-blue-300 p-1 rounded">Completed</small>
              //     </div>
              //     <Link to={"/"}>Edit</Link>
              //   </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
