
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./courses/AddCourse";
import EditCourse from "./courses/EditCourse";
import ViewCourse from "./courses/ViewCourse";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcourse" element={<AddCourse />} />
          <Route exact path="/editcourse/:id" element={<EditCourse />} />
          <Route exact path="/viewcourse/:id" element={<ViewCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;