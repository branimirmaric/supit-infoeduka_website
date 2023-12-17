var tds = document.getElementById('tablica').getElementsByTagName('td');
var sum = 0;

for (var i = 0; i < tds.length; i++) {
  if (tds[i].className == 'count-me') {
    sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
  }
}
document.getElementsByClassName('rezultat').innerHTML += sum;
