import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddGoal = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:1337/api/goals", {
        data: {
          title: title,
          date: date,
        },
      });

      if (res.status === 200) {
        toast.success("Goal added successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          return navigate("/goals");
        }, 5000);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.error.message);
    }
  };

  return (
    <div className="mx-auto w-4/5 pt-20">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="block">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="block w-full p-3 border border-blue-900"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label className="block">Date</label>
          <input
            type="date"
            placeholder="Date"
            className="block w-full p-3 border border-blue-900"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <input
          type="submit"
          value="Add Goal"
          className="mt-20 bg-blue-900 p-3 text-white"
        />
      </form>
    </div>
  );
};

export default AddGoal;
