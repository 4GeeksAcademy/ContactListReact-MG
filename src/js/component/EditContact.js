import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const contactData = await actions.getContactById(params.id);
        setUserName(contactData.full_name || "");
        setUserMail(contactData.email || "");
        setUserPhone(contactData.phone || "");
        setUserAddress(contactData.address || "");
      } catch (e) {
        console.error(e);
      }
    };

    fetchContactData();
  }, []);

  const saveChanges = async () => {
    try {
      await actions.editContact(
        params.id,
        userName,
        userMail,
        userAddress,
        userPhone
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container-fluid bg-dark pb-3 pt-3 vh-100">
      <div className="container bg-secondary">
        <h1 className="display-1 fs-1 fw-bold text-center text-light">Edit Contact</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="fullNameInput" className="form-label text-light">
              Full Name
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="fullNameInput"
              placeholder={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label text-light">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="emailInput"
              placeholder={userMail}
              aria-describedby="emailHelp "
              onChange={(e) => setUserMail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label text-light">
              Phone
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="phoneInput"
              placeholder={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label text-light">
              Address
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="addressInput"
              placeholder={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <br />
          <Link to="/contacts">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={saveChanges}
            >
              Save
            </button>
          </Link>
          <Link to="/contacts">
            <a>or get back to contacts</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
