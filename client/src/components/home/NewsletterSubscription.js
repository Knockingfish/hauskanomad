import React, { useState } from "react";
import styles from "./NewsletterSubscription.module.css"

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Simulate storing email in the database
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className={styles.newsletter_outer}>
      <div className={styles.newsletter_inner}>
        <div className={styles.screamlord}>Subscribe to our newsletter!</div>
        <div className={styles.pitch}>Get the latest news and offers for your favorite destinations!</div>
        <div className={styles.newsletter_bar}>
          <input
            type="email"
            placeholder="Enter your email"
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
