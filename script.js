function add1() {
  sp = document.getElementById("sp").innerText;
  f = document.getElementById("f").value;
  if (f != 1) {
    a = 1;
  } else {
    a = -1;
  }
  document.getElementById("f").value = a;
  x = parseInt(sp) + a;
  document.getElementById("sp").innerHTML = x;
}
function add2() {
  sp2 = document.getElementById("sp2").innerText;
  p = document.getElementById("p").value;
  if (p != 1) {
    a = 1;
  } else {
    a = -1;
  }
  document.getElementById("p").value = a;
  x = parseInt(sp2) + a;
  document.getElementById("sp2").innerHTML = x;
}
