import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { db, auth } from "../firebase";
import Order from "./Order";
import "../styles/Orders.css";

let currentUser = auth.currentUser;

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [hiddenButton, setHiddenButton] = useState(true);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> {

    
    if (user) {
      const getOrders = async () => {
        await db
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
        setHiddenButton(true);
        setLoading(false);
      };
      getOrders();
    } else {
      setOrders([]);
    }
  },3000)
  }, [user]);

  console.log("These should be the orders : ", orders);
  return (
    <div className="orders">
      {!loading ? 
      
      orders.length > 0 ? (
        orders.map((order) => (
          <Order
            key={order.data.key}
            hiddenButton={hiddenButton}
            order={order}
          />
        ))
      ) : (
        <div className="order__empty">
       
        <button onClick={(()=> history.push('/'))}>Add items into basket</button>
        <img src="https://i.pinimg.com/originals/0f/e6/62/0fe66229dd01d34b5d89f681d97ded29.gif" alt="" />
       
        </div>
      )
:<div className="orders__loading"></div>}
    </div>
  );
}
export default Orders;
