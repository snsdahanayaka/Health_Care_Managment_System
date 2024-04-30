import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../css/inquiry.css';

export default function Inquiry() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function sendData(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const newInquiry = {
      name,
      email,
      phone,
      type,
      message
    }

    axios.post("http://localhost:8080/inquiry/add", newInquiry)
      .then(() => {
        alert("Inquiry Created");
        setName("");
        setEmail("");
        setPhone("");
        setType("");
        setMessage("");
        setEmailError("");
        navigate('/add');
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  return (
    <div className="background-container">
      <div className="container">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">Type</label>
            <select className="form-select" id="type" value={type} onChange={handleTypeChange}>
              <option value="">Select</option>
              <option value="One">How do schedule an appointment?
              </option>
              <option value="Two">Can I access my medical records online?
              </option>
              <option value="Three">What do I do if I need a prescription refill?
              </option>
              <option value="Three">How can I pay my bill online?
              </option>
              <option value="Three">Can I message my doctor with non-urgent questions?
              </option>
              <option value="Three">Is my personal health information kept confidential?
              </option>
              <option value="Three">How can I update my contact information or insurance details?
              </option>
              <option value="Three">What do I do if I have technical difficulties with the system?
              </option>
              <option value="Three">Others
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Inquiry Message</label>
            <textarea className="form-control" id="message" rows="3" value={message} onChange={handleMessageChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
