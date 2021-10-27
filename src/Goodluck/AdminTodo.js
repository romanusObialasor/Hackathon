import React, { useState, useEffect } from "react";
import { app } from "./base";
import firebase from "firebase";
import { useParams } from "react-router-dom";

const AdminTodo = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .doc(id)
        .collection("Todo")
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
  return <div>admintodo</div>;
};

export default AdminTodo;
