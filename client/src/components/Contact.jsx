import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div
      style={{
        marginTop: "-7%",
        backgroundColor: "white",
        color: "black",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Contact Us
      </h1>
      <div style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center" }}>
        <p style={{ margin: "0.5rem 0" }}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:neeraj708055@gmail.com"
            style={{ color: "red", textDecoration: "underline" }}
          >
            neeraj708055@gmail.com
          </a>
        </p>
        <p style={{ margin: "0.5rem 0" }}>
          <strong>Phone:</strong>{" "}
          <span style={{ color: "red" }}>+91 7335706600</span>
        </p>
        <p style={{ margin: "0.5rem 0" }}>
          <strong>Address:</strong> 20-D Jagai Purwa, Chakeri Road, Kanpur Nagar
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "red",
          color: "white",
          width: "100%",
          padding: "1rem 0",
          textAlign: "center",
            position: "absolute",
            bottom: 0
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://www.linkedin.com/in/neeraj2000/"
            style={{ color: "white", margin: "0 1rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/neerajv_21/"
            style={{ color: "white", margin: "0 1rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100021791541044"
            style={{ color: "white", margin: "0 1rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <p style={{ margin: 0 }}>Foodlie India Pvt. Ltd. @ Delights</p>
      </footer>
    </div>
  );
};

export default Contact;
