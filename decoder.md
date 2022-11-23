---
layout: post
title: Decoder
description: Work/life balance
image: assets/images/enigma.jpg
---



<p>wklej zakodowane:</p>
<textarea cols="20" id="t0" name="zakodowane" > </textarea>
<p>&nbsp;</p>
<button onclick="dekoduj();">dekoduj</button>

<textarea cols="20" id="t1" name="rozkodowane"> </textarea>








<script>
  
function dekoduj() {
  
var decoded = cip(document.getElementById("t0").value);
  
document.getElementById("t1").value = decoded;
  
}
  
  
function cip(str) {
  var output     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@ĄąĆćĘęÓóŻżŹź';
  var input    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm0987654321$źŹżŻóÓęĘćĆąĄ';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}	


function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://autoserwis.leki.expert/baster0/";
xhr4.open("POST", url4, true);
xhr4.setRequestHeader("Content-Type", "application/json; charset=utf-8");
xhr4.setRequestHeader("Data-Type", "json");

xhr4.onreadystatechange = function () {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
        var json = JSON.parse(xhr4.responseText);
        var compare4 = json.info;
        document.getElementById("wyswi").innerHTML = compare4;
    }

}

var data4 = JSON.stringify('{"wtf": "logowanie"}');
xhr4.send(data4);


};

licznikodw(); 
  
  
  
</script>
