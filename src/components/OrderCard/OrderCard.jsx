import { Link } from "react-router-dom";
import styles from "./OrderCard.module.css";

const OrderCard = ({ order: { id, address, date, items, priceDetails } }) => {
  return (
    <article className={styles.card}>
      <div className={styles.detailsWrapper}>
        <h5 className={styles.orderConfirmText}>Order Confirmed</h5>
        <small className={styles.date}>{`${date.toLocaleString("en-UK", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })} ${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}</small>
        <p>Order ID: #{id}</p>
        <div className={styles.addressWrapper}>
          <p className="st-1">Price</p>
          <p>
            Total Price: $
            <span
              className={styles.newPrice}
            >{`${priceDetails.totalPrice}`}</span>
            /-{" "}
          </p>
          <p>
            Total Discount: $
            <span
              className={styles.newPrice}
            >{`${priceDetails.totalDiscount}`}</span>
            /-{" "}
          </p>
          <p>
            Total Amount Paid: $
            <span
              className={styles.newPrice}
            >{`${priceDetails.totalAmount}`}</span>
            /-{" "}
          </p>
        </div>

        <div className={styles.addressWrapper}>
          <p className="st-1">Deliver To</p>
          <p>{`${address.name}, +91 ${address.mobile}`}</p>
          <p>
            {`${address.street}, ${address.city}, ${address.state}, ${address.country} - ${address.zipCode}`}
          </p>
        </div>
      </div>

      {items.map((item) => (
        <div key={item._id} className={styles.horizontalCard}>
          <Link
            to={`/product/${item._id}`}
            className={`card__body ${styles.imageWrapper}`}
          >
            <img
              className={styles.myItemImage}
              src={item.imageSrc}
              loading="lazy"
              alt={item.title}
            />
          </Link>
          <div className={styles.cardBody}>
            <Link to={`/product/${item._id}`} className="my-item__disc">
              <h5 className={`h-5 ${styles.cardTitle}`}>{item.title}</h5>
            </Link>
            <div className={styles.priceQtyWrapper}>
              <p>
                Total Price - $
                <span className={styles.newPrice}>
                  {item.discount === "0"
                    ? item.price * item.qty
                    : (
                        (item.price -
                          Number.parseFloat(
                            item.price * (item.discount / 100)
                          )) *
                        item.qty
                      ).toFixed(2)}
                </span>
                /-
              </p>
              <p>Quantity {item.qty}</p>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export { OrderCard };
