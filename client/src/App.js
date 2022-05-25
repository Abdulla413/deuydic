import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Router>
        <div className="container mx-auto my-7 mt-0">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
         </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;