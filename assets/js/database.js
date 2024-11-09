// URL endpoint dari SheetBest API
const apiUrl = 'https://api.sheetbest.com/sheets/e8fc88dc-86e2-45eb-9f51-327d1a30562d';

// Fungsi untuk mengambil data karyawan dari Google Sheets
function fetchEmployeeData() {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Data Karyawan:', data);
            return data;
        })
        .catch(error => {
            console.error('Gagal mengambil data:', error);
        });
}

// Contoh pemanggilan fungsi dan pengisian tabel
document.addEventListener('DOMContentLoaded', () => {
    fetchEmployeeData().then(data => {
        const tableBody = document.querySelector('#employee-table tbody');
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.ID}</td>
                <td>${row['Nama Karyawan']}</td>
                <td>${row.Departemen}</td>
                <td>${row.Jabatan}</td>
                <td>${row.Status}</td>
            `;
            tableBody.appendChild(tr);
        });
    });
});
