document.getElementsByClassName("myform");
const usernameInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number")
const lakiInput = document.getElementById("laki")
const perempuanInput = document.getElementById("perempuan")
const pesanInput = document.getElementById("comment")
const display = document.getElementById("output");

const form = document.getElementById("myform");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!usernameInput.value || !emailInput.value || !numberInput.value || (!lakiInput.checked && !perempuanInput.checked) || !pesanInput.value) {
        alert("Please fill in all required fields.");
        return;
    }
    display.innerHTML = `
    <div class="resultsubmit-box">
        <h3>Hasil Input:</h3>
        <p><strong>Nama Lengkap:</strong> ${usernameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Nomor Telepon:</strong> ${numberInput.value}</p>
        <p><strong>Jenis Kelamin:</strong> ${lakiInput.checked ? "Laki-laki" : "Perempuan"}</p>
        <p><strong>Komentar:</strong> ${pesanInput.value}</p>
    </div>
    `;
});

const usernameInputValue = document.getElementById("name").value;
localStorage.setItem("username", usernameInputValue);
window.onload = function() {
    if (localStorage.getItem("username")) {
        document.getElementById("Judul").innerHTML = "Hai!, " + localStorage.getItem("username");
    }
};

