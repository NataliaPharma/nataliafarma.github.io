---
layout: post
title: Konkurs poetycki
description: Work/life balance
image: assets/images/byron.jpg
---

Piszesz do biurka? - Wyślij wiersz wraz z grafiką ilustrującą na maila (miekusn@gmail.com)
Chcesz się podzielic na forum - wyślij wiersz w komentarzu pod tym wpisem! (Grafikę na maila, wkleję pod wierszem, chodzi o to by ktoś nie wkleił czegoś czego nie chcielibyśmy oglądać. Wysyłasz tekst całkowicie anonimowo!)

Tematyka: kulinarny motyw kojarzący się z odpornością! Powodzenia:) 

Termin nadsyłania prac: do 15.02.2023



<script src="https://autoserwis.leki.expert/static/iframeResizer.min.js"></script>

<iframe class="ifr" id="myIframe" src="https://natalia.leki.expert/konkurspoetycki" style="width:100%;"></iframe>

<script>
  iFrameResize({ log: true }, '#myIframe')
</script>

<script>
function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://autoserwis.leki.expert/baster14/";
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
