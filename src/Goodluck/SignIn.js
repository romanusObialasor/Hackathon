import React, { useState } from "react";
import { useHistory } from "react-router";
import { app } from "./base";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comkey, setComkey] = useState("");
  const history = useHistory();

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    setComkey("");
    localStorage.setItem("comkey", comkey);
    history.push("/user");
  };
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "0 10px" }}
      >
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter EmaCompany's key"
          value={comkey}
          onChange={(e) => {
            setComkey(e.target.value);
          }}
        />
        <button onClick={signIn}>SignIn</button>
      </div>
    </div>
  );
};

export default SignIn;
