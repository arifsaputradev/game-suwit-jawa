// variabel to repeat
var repeat = true;
while (repeat) {
  // capture player choice
  var player = prompt("Pilih Salah satu: 'gajah', 'orang', 'semut'");
  // capture random computer choice
  var computer = Math.random();
  if (computer < 0.33) {
    computer = "gajah";
  } else if (computer < 0.66) {
    computer = "orang";
  } else {
    computer = "semut";
  }
  // determine the rules
  // Vaiabel to determine the result
  var result = "";
  // statement if both choose the same option
  if (player == computer) {
    result = "Menang Bersama!";
  }
  // statement if both choose the different option
  else if (player == "gajah") {
    if (computer == "orang") {
      result = "Kamu Menang!";
    } else {
      result = "Kamu Kalah!";
    }
  } else if (player == "orang") {
    if (computer == "gajah") {
      result = "Kamu Kalah!";
    } else {
      result = "Kamu Menang!";
    }
  } else if (player == "semut") {
    if (computer == "gajah") {
      result = "Kamu Menang!";
    } else {
      result = "Kamu Kalah!";
    }
  }
  // code to display the result
  alert("Kamu Memilih " + player + " dan Komputer Memilih " + computer + "\nHasilnya " + result);
  // code to repeat the game
  repeat = confirm("Mau Bermain Lagi?");
}
// message after exiting the game
alert("Terima Kasih Sudah Bermain!");
