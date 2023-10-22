import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import GoalsPage from "./pages/GoalsPage";
import Navbar from "./components/Navbar";
import AddGoal from "./pages/AddGoal";
import EditGoal from "./pages/EditGoal";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/goals" element={<GoalsPage />}></Route>
        <Route path="/goals/add" element={<AddGoal />}></Route>
        <Route path="/goals/:goalId/edit" element={<EditGoal />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
