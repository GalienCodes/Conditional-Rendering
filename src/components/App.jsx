import React from "react";
import Login from "./Login";

const isLogin = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLogin ? <h1>Hello</h1> : <Login />
        isLogin && <h1>Hello there</h1>
      }
    </div>
  );
}

export default App;
