document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Tambahkan elemen style
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #FFE6E6;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #FFC0CB;
            padding: 8px;
            text-align: left;
            transition: background-color 0.3s;
        }
        th {
            background-color: #FF69B4;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #FFF0F5;
        }
        .aksi a {
            padding: 5px 10px;
            background-color: #FF69B4;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(style);

    // Buat elemen tabel
    const tableSection = document.createElement('div');
    tableSection.innerHTML = `
        <table id="data-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Kelas</th>
                    <th>Semester</th>
                    <th>Program Studi</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
    app.appendChild(tableSection);

    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    // Data mahasiswa
    const studentsData = [{
            nama: "Elsa Syila Arzetti",
            nim: "2301436",
            kelas: "A",
            semester: "3",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        },
        {
            nama: "Sila Serilda",
            nim: "2305060",
            kelas: "A",
            semester: "3",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        },
        {
            nama: "Shofia Nabila",
            nim: "2302000",
            kelas: "A",
            semester: "3",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        },
        {
            nama: "Azka Fauzi",
            nim: "2201000",
            kelas: "A",
            semester: "5",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        },
        {
            nama: "Juan Syah",
            nim: "2209872",
            kelas: "B",
            semester: "5",
            programStudi: "Sistem Informasi Kelautan",
            link: "#"
        }
    ];

    // Tambahkan data dan event yang sesuai
    studentsData.forEach((data, index) => {
        const row = dataTable.insertRow();

        // Tambahkan data ke kolom
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = data.nama;
        row.insertCell().textContent = data.nim;
        row.insertCell().textContent = data.kelas;
        row.insertCell().textContent = data.semester;
        row.insertCell().textContent = data.programStudi;

        // Kolom aksi dengan link
        const aksiCell = row.insertCell();
        aksiCell.classList.add('aksi');
        const linkElement = document.createElement('a');
        linkElement.href = data.link;
        linkElement.textContent = 'Instagram';
        linkElement.target = '_blank';
        aksiCell.appendChild(linkElement);

        // Event untuk Tabel No 1: Mengubah warna latar saat mouse berada di atas
        if (index === 0) {
            aksiCell.addEventListener('mouseover', () => {
                aksiCell.style.backgroundColor = '#FFB6C1'; // Warna saat kursor di atas
            });
            aksiCell.addEventListener('mouseout', () => {
                aksiCell.style.backgroundColor = ''; // Kembalikan warna saat kursor keluar
            });
        }

        // Event untuk Tabel No 2: Zoom saat mouse berada di atas
        if (index === 1) {
            aksiCell.addEventListener('mouseenter', () => {
                aksiCell.style.transform = 'scale(1.1)'; // Efek zoom
            });
            aksiCell.addEventListener('mouseleave', () => {
                aksiCell.style.transform = 'scale(1)'; // Kembalikan ukuran
            });
        }

        // Event untuk Tabel No 3: Klik untuk menghapus baris
        if (index === 2) {
            aksiCell.addEventListener('click', () => {
                row.remove(); // Hapus baris saat diklik
            });
        }

        // Event untuk Tabel No 4: Mouseenter untuk menambahkan efek hover
        if (index === 3) {
            aksiCell.addEventListener('mouseenter', () => {
                aksiCell.style.backgroundColor = '#FFB6C1'; // Tambahkan warna saat hover
            });
        }

        // Event untuk Tabel No 5: Klik untuk efek zoom
        if (index === 4) {
            aksiCell.addEventListener('click', () => {
                aksiCell.style.transform = 'scale(1.1)'; // Efek zoom saat diklik
                aksiCell.style.transition = 'transform 0.3s'; // Transisi halus untuk zoom

                // Mengembalikan ukuran setelah 0.3 detik
                setTimeout(() => {
                    aksiCell.style.transform = 'scale(1)'; // Kembali ke ukuran semula
                }, 300);
            });
        }
    });
});