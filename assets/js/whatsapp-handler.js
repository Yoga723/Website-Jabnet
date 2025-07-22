const whatsappUtama = "6282180009030";

const handleFormSubmit = () => {
  // --- 1. Get Input Values (Common to Both Forms) ---
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const phone = document.getElementById("whatsappNumber")?.value.trim();
  const subjek = document.getElementById("subjek")?.value;
  const message = document.getElementById("message")?.value.trim();
  // These are only present on subscription form
  const paket = document.getElementById("paketInternet")?.value;
  const address = document.getElementById("address")?.value.trim();

  const formMessages = document.getElementById("form-messages");

  // --- 2. Determine Form Type ---
  const isInquiryForm = subjek && subjek.trim() !== "";

  // --- 3. Validation ---
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  let isValid = false;

  if (isInquiryForm) {
    console.log("log input :", phone);
    console.log("log input :", subjek);
    console.log("log input :", message);
    isValid = name && isValidEmail && phone && subjek && message;
  } else {
    isValid = name && isValidEmail && phone && paket && address;
  }
  console.log("STAGE 4 FORM");

  if (!isValid) {
    if (formMessages) {
      formMessages.innerHTML = '<span class="text-red-500">Mohon lengkapi semua kolom yang wajib diisi.</span>';
    }
    return;
  }

  console.log("STAGE 5 FORM");
  // --- 4. Build WhatsApp Message ---
  const greetingWithSubject = `Salam hangat, saya melihat *Website JABNET* dan ingin membahas mengenai subjek ${subjek}:\n`;
  const greetingSubscribe = `Salam hangat, saya melihat *Website JABNET* dan tertarik dengan ${paket}:\n`;
  
  const formattedMessage = encodeURIComponent(
    isInquiryForm
      ? `${greetingWithSubject}\n` +
          `*Nama*: ${name}\n` +
          `*Email*: ${email}\n` +
          `*Nomor WhatsApp*: ${phone}\n` +
          `*Subjek*: ${subjek}\n` +
          `*Pesan*:\n${message}`
      : `${greetingSubscribe}\n` +
          `*Nama*: ${name}\n` +
          `*Email*: ${email}\n` +
          `*Nomor WhatsApp*: ${phone}\n` +
          `*Paket Pilihan*: ${paket}\n` +
          `*Alamat*: ${address}`
  );

  // --- 5. Create WhatsApp Link ---
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const waLink = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
  const whatsappURL = `${waLink}?phone=${whatsappUtama}&text=${formattedMessage}`;

  console.log("STAGE 7 FORM");
  // --- 6. Open WhatsApp in New Tab ---
  window.open(whatsappURL, "_blank");
  console.log("STAGE 8 FORM");

  // --- 7. Show WhatsApp Success Overlay ---
  const successOverlay = document.getElementById("form-overlay-success-whatsapp");
  if (successOverlay) {
    successOverlay.classList.remove("d-none");
  }
};

// --- 8. Bind Click to Button ---
document.getElementById("submit-button-whatsapp")?.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  handleFormSubmit();
});
