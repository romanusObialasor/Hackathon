import React, { useState } from "react";
import { useParams } from "react-router";
import firebase from "firebase";

const AdminTodoCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const { id } = useParams();

  const postData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .doc(id)
        .collection("Todo")
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

  return <div>Romanus</div>;
};

export default AdminTodoCreate;
