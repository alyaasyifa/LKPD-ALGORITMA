function hitung_harga_diskon(buku) {
    const hargaSatuan = 5000;
    const eks = buku * 10;

    if (eks <= 100) {
        return buku * hargaSatuan;
    } else if (eks > 100 && eks <= 200) {
        diskonPertama = 100 * hargaSatuan * 0.95;
        jumlahSisa = eks - 100;
        diskonSisa = jumlahSisa + hargaSatuan * 0.85;
        return diskonPertama + diskonSisa;
    } else if (eks > 200) {
        diskonPertama = 100 * hargaSatuan * 0.93;
        diskonKedua = 100 * hargaSatuan * 0.83;
        jumlahSisa = eks - 200;
        diskonSisa = jumlahSisa * hargaSatuan * 0.73;
        return diskonPertama + diskonKedua + diskonSisa;
    }
}


const totalHarga = hitung_harga_diskon(15);
console.log(`Total harga yang harus dibayar: Rp ${totalHarga.toLocaleString('id-ID', {maximumFractionDigits: 3})}`);
