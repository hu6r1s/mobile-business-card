import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../routes/Login";
import Main from "../routes/Main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;