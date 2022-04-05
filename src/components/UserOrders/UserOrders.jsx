import { Link } from "react-router-dom";
import { useOrder } from "../../context/orderContext";
import { OrderCard } from "../OrderCard/OrderCard";
import styles from "./UserOrders.module.css";

const UserOrders = () => {
  const {
    orderState: { prevOrders },
  } = useOrder();

  return (
    <section>
      {prevOrders.length > 0 ? (
        prevOrders.map((order) => <OrderCard key={order.id} order={order} />)
      ) : (
        <div className={styles.emptyOrdersMsgWrapper}>
          <img
            src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649097607/VISKart/emptyOrders_r4fxbi.png"
            loading="lazy"
            alt="empty-orders"
          />
          <p className={styles.emptyOrdersMsg}>
            There are no recent orders to show! <br /> Buy something to make us
            happy
          </p>
          <Link to="/products" className="button btn-solid-primary">
            Start Shopping Now
          </Link>
        </div>
      )}
    </section>
  );
};

export { UserOrders };
