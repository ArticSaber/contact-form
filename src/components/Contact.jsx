import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState({});
  const [Email, setEmail] = useState({});

  const userCollectionRef = collection(db, "contactdata");
  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      Email: Email,
    }).then(() => {
      if (!alert("Form Submitted Successfully!!!"))
        document.location = "https://www.google.com/";
    });
  };

  return (
    <div className="outer-container">
      <p>Contact Form</p>

      <form className="contactform">
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Email Address</label>
        <input
          type="text"
          placeholder="Enter your Email ID"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
