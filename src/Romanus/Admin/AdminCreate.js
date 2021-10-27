import React, { useState } from "react";
import { app } from "../../base";
import firebase from "firebase";

const AdminCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const postData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .doc()
        .set({
          title: title,
          description: description,
          deadline: deadline,
          createdBy: authUser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      setTitle("");
      setDescription("");
      setDeadline("");
    }
  };

  return (
    <div>
      <input
        placeholder="name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="email"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        placeholder="password"
        value={deadline}
        onChange={(e) => {
          setDeadline(e.target.value);
        }}
      />
      <button onClick={postData}>submit</button>
    </div>
  );
};

export default AdminCreate;
