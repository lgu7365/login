import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { fbaseauth } from "./fbase"
import "./style.css"

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(false);
  useEffect(() => {
    onAuthStateChanged(fbaseauth, (user) => {
      if(user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid
        });
      }
      else {
        setUserObj(null);
      }
      setInit(true);
    })
  }, []);
  return (
    <div className="App">
      {init ? (
        <AppRouter 
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializeing..."
      )}
    </div>
  );
}

export default App;
