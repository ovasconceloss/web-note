import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/signin" element={ <SignIn /> } />
      </Routes>
    </Router>
  )
}

export default App;