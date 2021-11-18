validate();
setInterval(time, 1000);

function validate() {
  let isim = prompt("İsminizi girin", "");

  if (isim === null || isim === "") {
    alert("Lütfen isminizi giriniz!");
    validate()
  } else if (!/^[a-zA-Z]+$/.test(isim)) {
    alert("Lütfen sadece ingilizce karakter giriniz!");
    validate()
  } else {
    let kucukisim = isim.toLowerCase();
    let tamisim = kucukisim[0].toUpperCase() + kucukisim.slice(1);
    document.getElementById("myName").innerHTML = tamisim;
  }
}

let zaman = document.getElementById('myClock');
function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let g = d.getDay();
  let gun = "";
    switch (g) {
      case 0:
        gun = "Pazar";
        break;
      case 1:
        gun = "Pazartesi";
        break;
      case 2:
        gun = "Salı";
        break;
      case 3:
        gun = "Çarşamba";
        break;
      case 4:
        gun = "Perşembe";
        break;
      case 5:
        gun = "Cuma";
        break;
      case 6:
        gun = "Cumartesi";
        break;
    }  
  zaman.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " + gun;
}

