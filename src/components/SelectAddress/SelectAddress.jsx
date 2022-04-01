import { useState } from "react";
import { Link } from "react-router-dom";
import { AddressCard } from "../../components";
import { useAuth, useOrder } from "../../context";
import styles from "./SelectAddress.module.css";

const SelectAddress = ({ setStep }) => {
  const {
    authState: { addresses },
  } = useAuth();
  const { orderState, orderDispatch } = useOrder();
  const [selectedAddress, setSelectedAddress] = useState(orderState.address);

  const nextBtnHandler = () => {
    orderDispatch({
      type: "ADDRESS",
      payload: {
        address: selectedAddress,
      },
    });

    setStep((prevStep) => prevStep + 1);
  };

  return (
    <section className={styles.body}>
      <h5 className="h-5 txt-center">Select address</h5>
      {addresses.length > 0 ? (
        addresses.map((address) => (
          <div key={address._id} className={styles.addressCard}>
            <input
              type="radio"
              name="address"
              id={address._id}
              checked={selectedAddress === address}
              onChange={() => setSelectedAddress(address)}
            />
            <label htmlFor={address._id}>
              <AddressCard address={address} />
            </label>
          </div>
        ))
      ) : (
        <div>
          <p>You don't have any address added. Please add a new address.</p>
          <Link to="/user" className="button btn-solid-primary">
            Add New Address
          </Link>
        </div>
      )}
      <div className={styles.btnsWrapper}>
        <Link to="/cart" className="button btn-solid-primary">
          Cart
        </Link>
        <button
          className={`button btn-solid-primary ${
            Object.keys(selectedAddress).length === 0
              ? styles.disabledBtn
              : null
          }`}
          disabled={Object.keys(selectedAddress).length === 0 ? true : false}
          onClick={nextBtnHandler}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export { SelectAddress };
