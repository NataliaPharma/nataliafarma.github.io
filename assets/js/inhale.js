var stanyiframow = {"thispagecom0":false, "thispagecom1":false, "thispagecom2":false, "thispagecom3":false, "thispagecom4":false, "thispagecom5":false, "thispagecom6":false};


function wyjedzztxt(nazwaiframe) {


  if (stanyiframow[nazwaiframe] == false) {
    document.getElementById(nazwaiframe).height = "500";
    stanyiframow[nazwaiframe] = true;
    
}

  else if (stanyiframow[nazwaiframe] == true) {
    document.getElementById(nazwaiframe).height = "0";
    stanyiframow[nazwaiframe] = false;
}

}



    

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  document.getElementById("info").innerHTML = "Podczas pierwszego użycia inahalatora po wstrząśnięciu przez 5 sekund naciśnij inhalator dwa razy, tak aby propelent był wymieszany z lekiem ";
  modal.style.display = "block";
}

btn2.onclick = function() {
  document.getElementById("info").innerHTML = "Jednym w najważniejszych punktów synchronizacja podania dawki z początkiem wdechu. <br><br>Wyjaśnij pacjentowi, że wdech nie może być szybki i gwałtowny, tylko spokojny i pogłębiony (szybki i gwałtowny wdech spowoduje, że duża część dawki będzie rozprowadzona po jamie ustnej, nie płucach)";
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



