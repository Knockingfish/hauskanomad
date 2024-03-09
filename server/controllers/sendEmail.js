// controllers/emailController.js
import nodemailer from "nodemailer";

const sendEmail = async (email) => {
  try {
    // Create an SMTP transporter for Outlook
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Outlook SMTP server host
      port: 587, // Outlook SMTP port (587 is the default for TLS)
    secure: false, // true for 465, false for other ports
    auth: {
      user: "hauskanomad@outlook.com", // Your Outlook email address
      pass: "travel.seamlessly.123.?", // Your Outlook email password
    },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'hauskanomad@outlook.com', // Sender address
      to: email, // Recipient email address
      subject: "Welcome to Our Newsletter", // Subject line
      text: "Thank you for subscribing to our newsletter!", // Plain text body
    });

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail; // Export both functions