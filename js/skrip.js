function dataPersonal() {
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;
    let output = `

    <table border='0' class='table_a'>
        <tr>
            <td><b>Nama</b></td>
            <td> : ${nama}</td>
        </tr>
        <tr>
            <td><b>Pekerjaan</b></td>
            <td> : ${pekerjaan}</td>
        </tr>
        <tr>
            <td><b>Hobi</b></td>
            <td> : ${hobi}</td>
        </tr>
    </table>
    `
    let no_input = "<span style='color: red; font-weight: bold;'>Mohon Isi Input Dengan Lengkap</span>";
    let hasil = (nama && pekerjaan && hobi != '') ? output : no_input;
    document.getElementById('hasil').innerHTML = hasil;
}

    
//tugasnya adalah lengkapi kode berikut dan tampilkan hasil yg ada pada HTML
//1. isian nama
//2. isian pekerjaan
//3. isian hobby
