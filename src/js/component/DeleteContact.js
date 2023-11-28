import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const DeleteContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container-fluid text-center bg-dark pb-2 vh-100">
      <h1 className='text-light'>DeleteContact?</h1>
      <Link to="/contacts">
        <button
          className="btn btn-danger"
          onClick={() => {
            actions.deleteContact(params.id);
          }}
        >
          Confirm
        </button>
      </Link>
      <Link to="/contacts">
        <button className="ms-2 btn btn-secondary">Cancel</button>
      </Link>
    </div>
  );
};

export default DeleteContact;
