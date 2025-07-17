const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

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
    host: "mail.jabnet.id",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER || "goblogbantuan002@gmail.com",
      pass: process.env.MAIL_PASS || "Goblog002",
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "support@jabnet.id",
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      return res.status(500).json({ success: false, message: "Gagal mengirim email" });
    }
    res.status(200).json({ success: true, message: "Email berhasil dikirim!" });
  });
});

module.exports = router;
