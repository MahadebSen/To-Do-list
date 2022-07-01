import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Components/Calendar/Calendar";
import CompletedTasks from "./Components/CompletedTasks/CompletedTasks";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ToDo from "./Components/ToDo/ToDo";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/completedtasks"
          element={<CompletedTasks></CompletedTasks>}
        ></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
