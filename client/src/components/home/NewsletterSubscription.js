import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Simulate storing email in the database
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="newsletter-subscription">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest news and offers from our site!</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default NewsletterSubscription;
