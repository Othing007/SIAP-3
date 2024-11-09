// Di login.js atau buat file logout.js
function handleLogout() {
    // Hapus session/token jika ada
    localStorage.removeItem('user');
    // Redirect ke halaman login
    window.location.href = '../index.html';
}

// Tambahkan event listener di dashboard
document.querySelector('a[href="index.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    handleLogout();
});