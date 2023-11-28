import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const [contactList, setContactList] = useState([]);
  /*
  useEffect(() => {
    setContactList(actions.getContactList() ? contactList : []);
  }, []);

  
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
  /* ------------------------------------------------------- */
  return (
    <div className="container-fluid bg-dark pt-2 pb-3 vh-100">
      <Link to="/add-contact">
        <button className="btn btn-success d-flex ms-auto">
          Add new contact
        </button>
      </Link>
      <br />
      {store.contactList.map((contact) => (
        <div key={contact.id} className="card w-100 mb-3 bg-secondary">
          <div className="row d-flex align-items-center">
            <div className="ps-0 ms-3 me-xl-4col-xl-2 col-lg-2 me-lg-4 col-md-1 me-md-5 col-sm-1 me-sm-5">
              <img
                className="card-img-left mt-2"
                src="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png"
                alt="Profile"
                style={{ width: "180px", height: "180px", borderRadius: "50%" }}
              />
            </div>
            <div className="card-body ms-lg-1 ms-xl-1 col-xl-7 col-lg-7 ps-lg-1 ps-xl-1 col-md-5 ms-md-5 ps-md-4 col-sm-1 ms-sm-5 ps-sm-5">
              <h5 className="card-title">{contact.full_name}</h5>
              <div className="card-text">
                <p className="address">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#000000" }}
                  ></i>{" "}
                  {contact.address}
                </p>
                <p className="phone">
                  <i
                    className="fa-solid fa-phone-flip"
                    style={{ color: "#000000" }}
                  ></i>{" "}
                  {contact.phone}
                </p>
                <p className="mail">
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#000000" }}
                  ></i>{" "}
                  {contact.email}
                </p>
              </div>
            </div>
            <div className="card-foot ms-auto mt-2 col-lg-2 col-md-2 col-sm-2 align-items-center">
              <Link to={`/edit-contact/${contact.id}`} id={contact.id}>
                <i
                  className="fa-solid fa-pencil fa-xl"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
              <Link to={`/delete-contact/${contact.id}`} id={contact.id}>
                <i
                  className="ms-4 fa-solid fa-trash-can fa-xl"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <br></br>
      <div className="container d-flex">
        <button
          className="btn btn-danger ms-auto me-auto"
          onClick={() => actions.deleteAll()}
        >
          Delete Agenda
        </button>
      </div>
    </div>
  );
};

export default Contacts;
