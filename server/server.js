const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS length:", process.env.EMAIL_PASS.length);
// route to handle contact form
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);

    res.json({ success: true, msg: "Message sent!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, msg: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
