import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Edit from "./components/Edit"
import Register from "./components/Register"
import Login from "./components/Login"



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

         </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;