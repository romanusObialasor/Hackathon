import React, { useState } from "react";
import { useHistory } from "react-router";
import { app } from "./base";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    history.push("/admin");
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default SignIn;
