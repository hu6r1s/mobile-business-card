import { useState, useEffect } from "react";
import { GlobalStyles, FrameDiv } from "../styles/layout";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      <GlobalStyles />
      <FrameDiv>
        {init ? (
          <AppRouter
            isLoggedIn={isLoggedIn}
            refreshUser={refreshUser}
            userObj={userObj}
          />
        ) : (
          "init..."
        )}
      </FrameDiv>
    </>
  );
}

export default App;
