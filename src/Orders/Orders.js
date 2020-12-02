import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../firebase/index";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import { Link } from "react-router-dom";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc") //desc -> descending order
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {user ? (
        <div className="orders__order">
          {orders?.map((order) => {
            return <Order order={order}></Order>;
          })}
        </div>
      ) : (
        <h3 className="orders__title">
          {" "}
          <Link to="/login" style={{ color: "blue" }}>
            <u>Sign In</u>
          </Link>{" "}
          To See Your Orders
        </h3>
      )}
    </div>
  );
}

export default Orders;
