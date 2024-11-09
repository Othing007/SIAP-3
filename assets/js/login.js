document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    try {
        if (username === 'admin' && password === 'admin123') {
            console.log('Login berhasil');
            window.location.href = 'pages/dashboard.html'; 
        } else {
            console.log('Login gagal');
            errorMessage.textContent = 'Username atau password salah';
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        errorMessage.textContent = 'Terjadi kesalahan saat login';
    }
});