import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import '../styles/Donation.css';
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    receipt: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      receipt: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = new FormData();
    donationData.append('name', formData.name);
    donationData.append('email', formData.email);
    donationData.append('phone', formData.phone);
    donationData.append('amount', formData.amount);
    donationData.append('receipt', formData.receipt);

    try {
      const response = await axios.post('http://localhost:5004/api/donation', donationData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage(response.data.message);

      // Wait for 2 seconds before navigating
      setTimeout(() => {
        navigate("/home");
      }, 2000);
      
    } catch (error) {
      console.error('There was an error submitting the donation:', error);
      alert('There was an error submitting your donation.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="donation-container">
        <h2>Make Your Donation</h2>
        <p className="instruction">
          Please make your payment using the bank details below and upload your receipt.
        </p>
        <div className="bank-details">
          <h3>Bank Details:</h3>
          <p>Bank Name: Bank Of Ceylon</p>
          <p>Account Name: KahawattaMMV</p>
          <p>Account Number: 123-456-789</p>
          <p>Branch: Balangoada</p>
          <p>Swift Code: ABCD1234</p>
        </div>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount:</label>
            <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="receipt">Upload Receipt:</label>
            <input type="file" id="receipt" name="receipt" accept="image/*, .pdf" onChange={handleFileChange} required />
          </div>
          <button type="submit" className="submit-btn">Submit Donation</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Donation;