document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var domisili = document.getElementById("domisili").value;
    var kebudayaan = document.querySelector('input[name="kebudayaan"]:checked').value;
    var address = document.getElementById("address").value;
    var suggestion = document.getElementById("suggestion").value;
  
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
      <div class="result-box">
        <h2>Hasil Formulir:</h2>
        <p>Nama: <span class="result-value">${name}</span></p>
        <p>Tanggal Lahir: <span class="result-value">${birthdate}</span></p>
        <p>Domisili: <span class="result-value">${domisili}</span></p>
        <p>Budaya Jogja Yang Digemari: <span class="result-value">${kebudayaan}</span></p>
        <p>Alamat: <span class="result-value">${address}</span></p>
        <p>Ceritakan kesan dan pesan anda mengenai Jogja: <span class="result-value">${suggestion}</span></p>
      </div>
    `;
  
    document.getElementById("name").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("domisili").value = "Bantul"; 
    document.querySelector('input[name="kebudayaan"]:checked').checked = false;
    document.getElementById("address").value = "";
    document.getElementById("suggestion").value = "";
  
    var notificationContainer = document.createElement("div");
    notificationContainer.className = "notification-box";
    notificationContainer.innerText = "Formulir berhasil dikirim!";
    document.body.appendChild(notificationContainer);
    
    setTimeout(function() {
      notificationContainer.style.display = "none";
    }, 3000);
  });
  