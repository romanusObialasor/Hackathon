import React, { useState } from "react";
import { app } from "../base";
import firebase from "firebase";
const Register = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postData = async () => {
    const authUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (authUser) {
      await app.firestore().collection("Register").doc(authUser.user.uid).set({
        name: name,
        email: email,
        image: image,
        createdBy: authUser.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setName("");
      setPassword("");
      setEmail("");
      setImage("");
    }
  };
  const displayImage = (e) => {
    const file = e.target.files[0];
    const fileRef = URL.createObjectURL(file);
    setImage(fileRef);
  };
  return (
    <div>
      <input type="file" onChange={displayImage} />
      <input
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={postData}>submit</button>
      <img
        src={image}
        style={{
          width: "300px",
          height: "300px",
          background: "red",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Register;
