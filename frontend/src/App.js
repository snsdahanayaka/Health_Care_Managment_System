import React, { useState } from "react";
import axios from "axios";
import './App.css';


export default function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  function sendData(e) {
    e.preventDefault();
    alert("Insert");

    const newInquiry = {
      name,
      email,
      phone,
      type,
      message
    }

    axios.post("http//localhost:8070/Inquiry/add", newInquiry).then(() => {
      alert("Inquiry Created")
    }).catch((err) => {
      alert(err)
    })

  }


  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => {
            setName(e.target.value);
          }} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => {
            setPhone(e.target.value);
          }} />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-select" id="type" value={type} onChange={handleTypeChange}>
            <option value="">Select</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Inquiry Message</label>
          <textarea className="form-control" id="message" rows="3" value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
