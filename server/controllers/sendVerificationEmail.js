import nodemailer from "nodemailer";

const sendVerificationEmail = async (email, token) => {
  try {
    // Create an SMTP transporter for Outlook
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Outlook SMTP server host
      port: 587, // Outlook SMTP port (587 is the default for TLS)
    secure: false, // true for 465, false for other ports
    debug: true,
    auth: {
      user: process.env.EMAIL, // Your Outlook email address
      pass: process.env.EMAIL_PASSWORD, // Your Outlook email password
    },
    });

    // Construct the verification link
    const verificationLink = `http://localhost:5000/api/verify/${token}`;

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'hauskanomad@outlook.com', // Sender address
      to: email, // Recipient email address
      subject: "Welcome to HauskaNomad!", // Subject line
      html: `<p>Please click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>`, // HTML body with verification link
    });

    console.log("Verification email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

export default sendVerificationEmail; // Export both functions
