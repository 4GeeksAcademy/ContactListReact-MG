import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  /*
  async function createContact() {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: userName,
            email: userMail,
            agenda_slug: "uykarma",
            address: userAddress,
            phone: userPhone,
          }),
        }
      );

      if (response.ok) {
        getContactList();
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function getContactList() {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/contact/agenda/uykarma",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setContactList(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    }
  }

  */
  /* ---------------------------------------------------------------------------- */

  return (
    <div className="container-fluid bg-dark pb-3 pt-3 vh-100">
      <div className="container bg-secondary">
        <h1 className="display-1 fs-1 fw-bold text-center text-light">
          Add a new contact
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="fullNameInput" className="form-label text-light">
              Full Name
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="fullNameInput"
              placeholder="Full Name"
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
              placeholder="Enter email"
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
              placeholder="Enter phone"
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
              placeholder="Enter address"
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <Link to="/contacts">
            <button
              type="button"
              className="btn btn-primary w-100 mb-2"
              onClick={() =>
                actions.createContact(
                  userName,
                  userMail,
                  userAddress,
                  userPhone
                )
              }
            >
              Save
            </button>
          </Link>
          <br />
          <Link to="/contacts">
            <a className="text-light mt-2 mb-3">or get back to contacts</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
