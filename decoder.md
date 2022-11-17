---
layout: post
title: Decoder
description: Work/life balance
image: assets/images/enigma.jpg
---

<p>wklej zakodowane:</p>
<textarea cols="20" id="t0" name="zakodowane" > </textarea>

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

</script>
