import sendEmail from "./sendEmail.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Received subscription request for email:", email); // Log the received email

    // Simulate storing email in the database
    console.log(`Subscribed with email: ${email}`);

    // Send confirmation email
    await sendEmail(email);

    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
