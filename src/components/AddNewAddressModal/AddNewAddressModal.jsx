import { useEffect, useState } from "react";
import {
  inputHandler,
  addNewAddressHandler,
  updateAddressHandler,
} from "../../utilities";
import { ICONS_URL } from "../../constants";
import { useAuth, useLoader } from "../../context";
import styles from "./AddNewAddressModal.module.css";

const dummyAddress = {
  name: "Bablu Tailor",
  street: "404, Bhonshe Wadi, Tapkir Chauk, Wakda Mala",
  city: "Lochanpur",
  state: "Maharashtra",
  country: "India",
  zipCode: "404404",
  mobile: "4040404040",
};

const AddNewAddressModal = ({ setAddressModal, defaultAddress = "" }) => {
  const { authState, authDispatch } = useAuth();
  const { setLoader } = useLoader();

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });

  useEffect(() => {
    if (defaultAddress !== "") {
      setAddress(defaultAddress);
    }
  }, []);

  return (
    <div className={`modal__container ${styles.modalContainer}`}>
      <form
        className="modal mdl__icons mdl-primary"
        onSubmit={(event) => {
          if (defaultAddress !== "") {
            updateAddressHandler(
              event,
              address,
              authState.token,
              authDispatch,
              setLoader,
              setAddressModal
            );
          } else {
            addNewAddressHandler(
              event,
              address,
              authState.token,
              setLoader,
              setAddressModal,
              authDispatch
            );
          }
        }}
      >
        <header className="modal__title">
          <h1 className="h-5">Login</h1>
          <button
            className="button btn-action btn-plain-icon modal__title--close"
            onClick={() => setAddressModal(false)}
          >
            <img
              className="icon-light icon-lg button__icon"
              src={`${ICONS_URL}/close.svg`}
              loading="lazy"
              alt="close"
            />
          </button>
        </header>
        <main className="modal__body">
          <div className="input input__icons input__premium">
            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.name}
                placeholder="Bablu Tailor"
                onChange={(event) => inputHandler(event, "name", setAddress)}
              />
              <label className="input__label">Name</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.street}
                placeholder="404, Bhonshe Wadi, Tapkir Chauk, Wakda Mala"
                onChange={(event) => inputHandler(event, "street", setAddress)}
              />
              <label className="input__label">Street</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.city}
                placeholder="Lochanpur"
                onChange={(event) => inputHandler(event, "city", setAddress)}
              />
              <label className="input__label">City</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.state}
                placeholder="Maharashtra"
                onChange={(event) => inputHandler(event, "state", setAddress)}
              />
              <label className="input__label">State</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.country}
                placeholder="India"
                onChange={(event) => inputHandler(event, "country", setAddress)}
              />
              <label className="input__label">Country</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.zipCode}
                placeholder="404404"
                onChange={(event) => inputHandler(event, "zipCode", setAddress)}
              />
              <label className="input__label">Zip-code</label>
            </div>

            <div className="input__email">
              <input
                className="input__field--text"
                type="text"
                value={address.mobile}
                placeholder="4040404040"
                onChange={(event) => inputHandler(event, "mobile", setAddress)}
              />
              <label className="input__label">Mobile</label>
            </div>
          </div>
        </main>
        <footer className="modal__footer">
          <button
            className="button btn-plain btn-primary"
            onClick={(event) => {
              event.preventDefault();
              setAddress(dummyAddress);
            }}
          >
            Dummy Address
          </button>
          <input
            className="button btn-solid-primary modal__footer--btn"
            value={defaultAddress !== "" ? "Update Address" : "Add New Address"}
            type="submit"
          />
        </footer>
      </form>
    </div>
  );
};

export { AddNewAddressModal };
