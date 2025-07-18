const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
// const fs = require("fs");

router.post("/", (req, res) => {
  // const now = new Date().toLocaleString("id-ID");
  const { name, email, whatsappNumber, paketInternet, address, subjek, message } = req.body;

  const isInquiryForm = subjek && subjek.trim() !== "";

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (
    (isInquiryForm && (!name || !isValidEmail || !whatsappNumber || !subjek || !message)) ||
    (!isInquiryForm && (!name || !isValidEmail || !whatsappNumber || !paketInternet || !address))
  ) {
    return res.status(400).json({
      success: false,
      message: "Harap lengkapi semua kolom.",
    });
  }

  const subject = isInquiryForm ? `Pertanyaan Baru: ${subjek}` : `Permintaan Berlangganan Baru dari ${name}`;

  const body = isInquiryForm
    ? `Nama: ${name}\nEmail: ${email}\nWhatsApp: ${whatsappNumber}\nSubjek: ${subjek}\nPesan:\n${message}`
    : `Nama: ${name}\nEmail: ${email}\nWhatsApp: ${whatsappNumber}\nPaket: ${paketInternet}\nAlamat:\n${address}`;

  const transporter = nodemailer.createTransport({
    host: "jabnet.id",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER || "testing@jabnet.id",
      pass: process.env.MAIL_PASS || "Galon@12345",
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 30000,
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "support@jabnet.id",
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] EMAIL ERROR: ${error.toString()}\n`;

      // Log ke console dan file

      return res.status(500).json({ success: false, message: "Gagal mengirim email" });
    }
    console.log("EMAIL SENT:", {
      messageId: info.messageId,
      envelope: info.envelope,
      response: info.response,
    });

    res.status(200).json({ success: true, message: "Email berhasil dikirim!" });
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log("NODEMAILER VERIFY ERROR:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
});

module.exports = router;
