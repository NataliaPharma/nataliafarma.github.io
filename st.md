#liczba odwiedzin (od 23.11.2022) - nazwa strony <br>&nbsp;<br>

<span id="baster0stats">?</span> - decoder <br>
<span id="baster1stats">?</span> - strona startowa <br>
<span id="baster2stats">?</span> - galeria <br>
<span id="baster3stats">?</span> - oferta <br>
<span id="baster4stats">?</span>- holistic <br>
<span id="baster5stats">?</span> - wydarzenia <br>
<span id="baster6stats">?</span> - newsletter <br>
<span id="baster7stats">?</span> - o mnie <br>
<span id="baster8stats">?</span> - kolo zycia <br>
<span id="baster9stats">?</span> - raz dwa trzy próba mikrofonu <br>
<span id="baster10stats">?</span> - pytania i odpowiedzi listopad <br>
<span id="baster11stats">?</span> - polscy aptekarze zainteresowani holistycznym podejściem <br>
<span id="baster12stats">?</span> - pytania i odpowiedzi listopad cz.2 <br>



<script>
function licznikodw(koncowka) {
var xhr4 = new XMLHttpRequest();
var url4 = "https://autoserwis.leki.expert/" + koncowka + "/";
xhr4.open("POST", url4, true);
xhr4.setRequestHeader("Content-Type", "application/json; charset=utf-8");
xhr4.setRequestHeader("Data-Type", "json");

xhr4.onreadystatechange = function () {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
        var json = JSON.parse(xhr4.responseText);
        var compare4 = json.info;
        document.getElementById(koncowka).innerHTML = compare4;
    }

}

var data4 = JSON.stringify('{"wtf": "logowanie"}');
xhr4.send(data4);


};

licznikodw("baster0stats"); 
licznikodw("baster1stats"); 
licznikodw("baster2stats"); 
licznikodw("baster3stats"); 
licznikodw("baster4stats"); 
licznikodw("baster5stats"); 
licznikodw("baster6stats"); 
licznikodw("baster7stats");
licznikodw("baster8stats"); 
licznikodw("baster9stats"); 
licznikodw("baster10stats"); 
licznikodw("baster11stats"); 
licznikodw("baster12stats"); 
  
</script>
