<?php
// Set header agar browser tahu ini adalah response JSON
header('Content-Type: application/json');

// Hanya proses request dengan metode POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(['success' => false, 'message' => 'Akses ditolak.']);
    exit;
}

// --- Ambil semua kemungkinan data dari kedua form ---
// Field yang umum ada di kedua form
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';

// Field spesifik untuk form Berlangganan
$whatsapp = isset($_POST['whatsapp-number']) ? strip_tags(trim($_POST['whatsapp-number'])) : '';
$paket = isset($_POST['paket-internet']) ? strip_tags(trim($_POST['paket-internet'])) : '';
$address = isset($_POST['address']) ? strip_tags(trim($_POST['address'])) : '';

// Field spesifik untuk form Pertanyaan
$subjek = isset($_POST['subjek']) ? strip_tags(trim($_POST['subjek'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim(string: $_POST['message'])) : '';


// --- Tentukan jenis form berdasarkan keberadaan field 'subjek' ---
// Jika field 'subjek' dikirim dan tidak kosong, kita anggap ini adalah form Pertanyaan.
$is_inquiry_form = !empty($subjek);

// --- Konfigurasi dasar email ---
$recipient = "info@jabnet.id"; // Ganti dengan email tujuan Anda
$subject = "";
$email_content = "";
$email_headers = "From: " . $name . " <" . $email . ">";


if ($is_inquiry_form) {
    // --- PROSES UNTUK FORM PERTANYAAN ---

    // Validasi untuk form pertanyaan
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($whatsapp) || empty($subjek) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Harap lengkapi semua kolom pada form pertanyaan.']);
        exit;
    }

    // Bangun subjek dan isi email untuk pertanyaan
    $subject = "Pertanyaan Baru: " . $subjek;
    $email_content = "Anda menerima pertanyaan baru dari website:\n\n";
    $email_content .= "Nama Lengkap: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Nomor Telepon: " . $whatsapp . "\n";
    $email_content .= "Subjek Pertanyaan: " . $subjek . "\n\n";
    $email_content .= "Pesan:\n" . $message . "\n";

} else {
    // --- PROSES UNTUK FORM BERLANGGANAN ---

    // Validasi untuk form berlangganan
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($whatsapp) || empty($paket) || empty($address)) {
        echo json_encode(['success' => false, 'message' => 'Harap lengkapi semua kolom pada form berlangganan.']);
        exit;
    }

    // Bangun subjek dan isi email untuk berlangganan
    $subject = "Permintaan Berlangganan Baru dari " . $name;
    $email_content = "Anda menerima permintaan berlangganan baru dari website:\n\n";
    $email_content .= "Nama Lengkap: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Nomor WhatsApp: " . $whatsapp . "\n";
    $email_content .= "Paket yang Dipilih: " . $paket . "\n\n";
    $email_content .= "Alamat Pemasangan:\n" . $address . "\n";
}


// --- Kirim Email ---
if (mail($recipient, $subject, $email_content, $email_headers)) {
    // Jika berhasil, kirim status sukses
    echo json_encode(['success' => true, 'message' => 'Terima Kasih! Pesan Anda telah terkirim.']);
} else {
    // Jika gagal, kirim status error
    echo json_encode(['success' => false, 'message' => 'Oops! Terjadi kesalahan pada server.']);
}
?>
