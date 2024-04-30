const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success");
});

// Define router for inquiries
const inquiryRouter = require("./Routes/inquiries.js");
app.use("/inquiry", inquiryRouter);

// Email sending route
app.post("/send-email", async (req, res) => {
  const { replyMessage, customerEmail } = req.body;

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: customerEmail,
      subject: 'Reply to your inquiry',
      text: replyMessage
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
