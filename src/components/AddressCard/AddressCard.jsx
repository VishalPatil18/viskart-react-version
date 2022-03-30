const AddressCard = ({ address }) => {
  return (
    <div>
      <h5 className="h-5">{address.name}</h5>
      <p className="bd-5">{address.street}</p>
      <p className="bd-5">
        {address.city}, {address.state}
      </p>
      <p className="bd-5">{address.zipCode}</p>
      <p className="bd-5">{address.country}</p>
      <p className="bd-5">+91 {address.mobile}</p>
    </div>
  );
};

export { AddressCard };
