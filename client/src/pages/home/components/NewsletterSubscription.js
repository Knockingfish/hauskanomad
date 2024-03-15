// NewsletterSubscription.js
import React, { useState } from "react";
import styles from "./NewsletterSubscription.module.css";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  // Collects email input to send to backend.
  const handleSubscribe = async () => {
    try {
      console.log("Attempting to subscribe with email:", email); // Log email before making the API call
      const response = await fetch("https://hauskabackend/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log("Response from server:", response); // Log the response from the server

      // Mix of error handling and debugging
      if (response.ok) {
        alert("Subscribed successfully!"); // If subscription worked, then let the user know.
        setEmail("");
      } else {
        alert("Failed to subscribe:", response.statusText); // If something went wrong, let the user know even more.
      }
    } catch (error) {
      alert("Error subscribing:", error); // If something else went wrong, let the user know.
    }
  };

  return (
    <div className={styles.newsletter_outer}>
      <div className={styles.newsletter_inner}>
        <div className={styles.screamlord}>Subscribe to our newsletter!</div>
        <div className={styles.pitch}>
          Get the latest news and offers for your favorite destinations!
        </div>
        <div className={styles.newsletter_bar}>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
