// NewsletterSubscription.js
import React, { useState } from "react";
import styles from "./NewsletterSubscription.module.css";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      console.log("Attempting to subscribe with email:", email); // Log email before making the API call
      const response = await fetch("http://localhost:5000/auth/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log("Response from server:", response); // Log the response from the server

      if (response.ok) {
        console.log("Subscribed successfully!");
        setEmail("");
      } else {
        console.error("Failed to subscribe:", response.statusText);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
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
