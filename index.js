//close article in the card
var close = document.getElementsByClassName("btn");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement.parentElement;
    div.remove();
  };
}
//plus quantity
var plus = Array.from(document.querySelectorAll(".plus"));
//console.log(plus)
for (let i = 0; i < plus.length; i++) {
  plus[i].onclick = function() {
    let x = plus[i].nextElementSibling.value;
    x = parseInt(x);
    //console.log(x)
    x++;
    plus[i].nextElementSibling.value = x;
  };
}
// minus quantity
var minus = Array.from(document.querySelectorAll(".minus"));
for (let i = 0; i < minus.length; i++) {
  {
    minus[i].onclick = function() {
      let x = minus[i].previousElementSibling.value;
      x = parseInt(x);
      if (x > 0) {
        x--;
        minus[i].previousElementSibling.value = x;
      }
    };
  }
}
//total price
var tp = document.querySelector("#totalprice");
var qty = document.getElementsByClassName("qty");
var pu = document.getElementsByClassName("pu");

var tt = document.getElementById("tt");
tp.onclick = function calculTotal() {
  let t = 0;
  for (let i = 0; i < pu.length; i++) {
    let p = pu[i].innerHTML;
    p = parseInt(p);
    let q = qty[i].value;
    q = parseInt(q);
    t += p * q;
    tt.innerHTML = t;
  }
};
