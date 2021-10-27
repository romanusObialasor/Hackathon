import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { app } from "./base";

const UserProject = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    const comkey = localStorage.getItem("comkey", comkey);
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(comkey)
        .collection("user")
        .doc(authUser.uid)
        .collection("myTodo")
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
  return <div>user project</div>;
};

export default UserProject;
