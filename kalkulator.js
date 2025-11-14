
function hitung(operator) {
    // Ambil nilai dari Bil 1 dan Bil 2
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    let hasil = 0;
    
    // Cek jika input bukan angka
    if (isNaN(bil1) || isNaN(bil2)) {
        document.getElementById('hasil').value = "Input harus angka!";
        return;
    }

    // Lakukan operasi berdasarkan tombol yang ditekan
    switch (operator) {
        case '+':
            hasil = bil1 + bil2;
            break;
        case '-':
            hasil = bil1 - bil2;
            break;
        case '*':
            hasil = bil1 * bil2;
            break;
        case '/':
            // Penanganan pembagian dengan nol
            if (bil2 === 0) {
                hasil = "Tidak bisa dibagi 0";
            } else {
                hasil = bil1 / bil2;
            }
            break;
    }

    // Tampilkan hasil
    document.getElementById('hasil').value = hasil;
}
