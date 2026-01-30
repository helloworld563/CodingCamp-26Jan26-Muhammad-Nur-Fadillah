const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const lakiInput = document.getElementById("laki");
const perempuanInput = document.getElementById("perempuan");
const pesanInput = document.getElementById("comment");
const display = document.getElementById("output");
const form = document.getElementById("myform");

window.onload = function() {
    const namaTersimpan = localStorage.getItem("username");
    if (namaTersimpan) {
        document.getElementById("Judul").innerText = "Hai!, " + namaTersimpan;
    }
};

form.addEventListener("submit", function(e) {
    e.preventDefault();


    if (!usernameInput.value || !emailInput.value || !numberInput.value || (!lakiInput.checked && !perempuanInput.checked) || !pesanInput.value) {
        alert("Please fill in all required fields.");
        return;
    }

    const namaBaru = usernameInput.value;

    localStorage.setItem("username", namaBaru);

    document.getElementById("Judul").innerText = "Hai!, " + namaBaru;

    display.innerHTML = `
    <div class="resultsubmit-box">
        <h3>Hasil Input:</h3>
        <p><strong>Nama Lengkap:</strong> ${namaBaru}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Nomor Telepon:</strong> ${numberInput.value}</p>
        <p><strong>Jenis Kelamin:</strong> ${lakiInput.checked ? "Laki-laki" : "Perempuan"}</p>
        <p><strong>Komentar:</strong> ${pesanInput.value}</p>
    </div>
    `;
});