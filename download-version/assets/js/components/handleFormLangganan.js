// Script ie can di pake 15-Juli-2025
document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('form-berlangganan');
    const overlay = document.getElementById('form-overlay');
    const overlayText = document.getElementById('overlay-text');
    const loader = overlay.querySelector('.loader');

    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            // Tampilkan overlay "Mengirim"
            loader.classList.remove('hidden');
            overlayText.textContent = 'Sedang mengirim...';
            overlay.classList.add('show');

            const formData = new FormData(subscriptionForm);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Sembunyikan loader setelah mendapat respon
                loader.classList.add('hidden');

                if (data.success) {
                    // Jika sukses
                    overlayText.textContent = 'Pesan Berhasil Terkirim!';
                    // Reset form setelah beberapa detik
                    setTimeout(() => {
                        overlay.classList.remove('show');
                        subscriptionForm.reset();
                    }, 3000); // Overlay hilang setelah 3 detik
                } else {
                    // Jika gagal
                    overlayText.textContent = 'Gagal! ' + data.message;
                     // Biarkan pengguna menutup overlay atau coba lagi
                    setTimeout(() => {
                        overlay.classList.remove('show');
                    }, 4000); // Overlay hilang setelah 4 detik
                }
            })
            .catch(error => {
                // Jika ada error koneksi
                loader.classList.add('hidden');
                overlayText.textContent = 'Error Jaringan! Periksa koneksi Anda.';
                console.error('Error:', error);
                setTimeout(() => {
                    overlay.classList.remove('show');
                }, 4000);
            });
        });
    }
});
