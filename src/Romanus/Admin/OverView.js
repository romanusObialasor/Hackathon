import React, { useState, useEffect } from "react";
import { app } from "../../base";

const OverView = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
        });
    }
  };
  useEffect(() => {
    fetchData();
  });
  return <div>Romanus</div>;
};

export default OverView;
