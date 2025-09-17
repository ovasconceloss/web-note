import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
    </Router>
  )
}

export default App;