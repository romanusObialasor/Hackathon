import React, { useState, useEffect } from "react";
import { app } from "./base";
import firebase from "firebase";

const TodoMembers = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const authUser = app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("user")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
          console.log(data);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>user todo</div>;
};

export default TodoMembers;
