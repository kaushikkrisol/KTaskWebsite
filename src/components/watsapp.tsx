"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./watsapp.css"; // Import the external CSS file

const WhatsAppButton = () => {
  const phoneNumber = "+917738390268"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your services."; // Default message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-button" // Use the class defined in the CSS file
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
