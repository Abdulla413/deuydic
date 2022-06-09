import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Edit from "../src/pages/Edit"
import Register from "../src/pages/Register"
import Login from "../src/pages/Login"
import EditPage from "./pages/EditPage"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
      <Router>
        <div className="container mx-auto my-7 mt-0">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/editpage" element={<EditPage/>} />


         </Routes>
      </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;