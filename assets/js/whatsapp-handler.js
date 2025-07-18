const whatsappUtama = "6282180009030";
const whatsappBroadcast = "";

const handleFormSubmit = () => {
  // --- 1. Get Input Values ---
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = iti.getNumber();
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value;
  const formMessages = document.getElementById("form-messages");

  console.log("THIS IS RESPONSES", name, email, phone, message);

  // --- 2. Basic Validation ---
  if (!name || !email || !phone || !message) {
    formMessages.innerHTML = '<span class="text-red-500">Please fill out all required fields (*).</span>';
    return; // Stop the function if validation fails
  }

  // --- 3. Construct the WhatsApp Message ---
  const greeting = "Salam Hangat, Saya melihat *Website Jabnet* dan tertarik untuk .";

  // Using encodeURIComponent to safely handle special characters in the URL
  const formattedMessage = encodeURIComponent(
    `${greeting}\n\n` +
      `*Nama Lengkap*: ${name}\n` +
      `*Email*: ${email}\n` +
      `*No. WhatsApp*: ${phone}\n` +
      `*Budget*: ${budget || "N/A"}\n\n` +
      `*Pesan*:\n${message}`
  );

  // --- 4. Detect Device and Create URL ---
  let waLink = "https://web.whatsapp.com/send";

  // Check if the user is on a mobile device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    waLink = "whatsapp://send";

  // The final URL
  const whatsappURL = `${waLink}?phone=${whatsappUtama}&text=${formattedMessage}`;

  // --- 5. Open WhatsApp and Provide Feedback ---
  // Open the link in a new tab
  window.open(whatsappURL, "_blank");
  formMessages.innerHTML = '<span class="text-green-500">Redirecting to WhatsApp... Message sent!</span>';
};

document.getElementById("submit-button").addEventListener("click", () => {
  handleFormSubmit();
});
