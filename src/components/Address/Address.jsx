import { useState } from "react";
import { AddNewAddressModal, AddressCard } from "../../components";
import { useAuth, useLoader } from "../../context";
import { removeAddressHandler } from "../../utilities";
import styles from "./Address.module.css";

const Address = () => {
  const { authState, authDispatch } = useAuth();
  const { setLoader } = useLoader();
  const [addressModal, setAddressModal] = useState({
    active: false,
    action: "new",
    address: {},
  });

  return (
    <div className={styles.addressWrapper}>
      <h4 className="h-5">My Addresses</h4>
      {authState.addresses ? (
        authState.addresses.map((address) => (
          <div className={styles.addressCard} key={address._id}>
            <AddressCard address={address} />
            <div className={styles.btnWrapper}>
              <button
                className="button btn-solid-warning btn-sm"
                onClick={() =>
                  setAddressModal({
                    active: true,
                    action: "update",
                    address: address,
                  })
                }
              >
                Update
              </button>
              <button
                className="button btn-solid-danger btn-sm"
                onClick={() =>
                  removeAddressHandler(
                    address._id,
                    authState.token,
                    setLoader,
                    authDispatch
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>You Don't have any Addresses</p>
      )}
      <button
        className={`button ${styles.addNewBtn}`}
        onClick={() =>
          setAddressModal({ active: true, action: "new", address: "" })
        }
      >
        + Add New Address
      </button>
      {addressModal.active ? (
        <AddNewAddressModal
          setAddressModal={setAddressModal}
          defaultAddress={
            addressModal.action === "update" ? addressModal.address : ""
          }
        />
      ) : null}
    </div>
  );
};

export { Address };
