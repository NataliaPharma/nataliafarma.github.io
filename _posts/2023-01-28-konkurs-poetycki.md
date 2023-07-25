---
layout: post
title: Konkurs poetycki
description: Work/life balance
image: assets/images/byron.jpg
---

Piszesz do biurka? - Wyślij wiersz wraz z grafiką ilustrującą na maila (miekusn@gmail.com)

Tematyka: kulinarny motyw kojarzący się z odpornością! Powodzenia:) 

Termin nadsyłania prac: do 15.03.2023

<p style="color:lime;">Dzięki za wszystkie przesłane wiersze ! Fajnie, że się zmobilizowaliście:) jeszcze na pewno konkurs powtórzymy, a w tym wydaniu wygrała pani H.R. Która wolała być anonimowa:) wszystkim uczestnikom bardzo gratuluję i życzę życiowej weny codziennie<br>&nbsp;<br>Dzieki!</p>

<script>
        
// src="https://autoserwis.leki.expert/static/iframeResizer.min.js">

</script>

<!-- <iframe class="ifr" id="myIframe" src="https://natalia.leki.expert/konkurspoetycki" style="width:100%;"></iframe> -->

<script>
  // iFrameResize({ log: true }, '#myIframe')
</script>

<script>
function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://uz.mobilnyfarmaceuta.pl/baster14";
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
