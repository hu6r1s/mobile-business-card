import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Main from "routes/Main";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Main userObj={userObj} />} />
            <Route path="/login" element={<Auth />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
