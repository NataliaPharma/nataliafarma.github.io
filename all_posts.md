---
layout: post
title: Wszystkie wpisy
landing-title: 'Wszystkie posty'
nav-menu: true
description: null
image: null
author: null
show_tile: false
---
<!--
<iframe src="https://pharmabusters.pl/demo" style="width:100%; aspect-ratio : 1 / 0.25;" > </iframe>
-->
&nbsp;<br>&nbsp;
<div id = "opracowania" style="margin-top:-4rem !important;">
<div>
<div>
<div>
<div>
<!-- <h3> &nbsp; </h3> -->
</div>
</div>
</div>

<div>
<table style="width:100%; text-align:left; font-size:calc(0.4vw + 1.4vh);">
<tr style="background-color:rgba(0,128,128,0.50);color:white;">
    <td>
    <div style="height:100%; background-color:rgba(0,128,128,0.50);"><input type="text" id="fname" name="fname" placeholder="filtruj: słowo w tytule" >
      </div>
    </td>
    <td >
    <select name="autor" id = "s0">
    <option>wszyscy autorzy</option>
	<option>Miękus-Purwin Natalia</option>
	<option>inny_autor_0</option>
    </select>
    </td>
    <td>
    <select name="dział" class="select-css" id = "s1">
    <option>wszystkie działy</option>
    <option>lajfhaki</option>
	<option>wykwintne dania</option>
	<option>zdrowie społeczne</option>
	<option>Q&A</option>
	<option>prasa</option>
	    <option>wykłady</option>
	    <option>informacje</option>
	</select>
    </td>


</tr>
</table>
<table class = "tab_opr" style="width:100%; text-align:left; font-size:calc(0.4vw + 1.4vh);">
<tr style="background-color:black;color:white;">
    <td><b>Tytuł:</b></td>
    <td><b>Autor:</b></td>
    <td><b>Umieszczone w dziale:</b></td>
    <td><b>Opublikowano w dniu:</b></td>
</tr>
</table>

<table id = "wnetrze" style="width:100%; text-align:left; font-size:calc(0.4vw + 1.4vh);">
</table>

</div>

</div>
</div>

<script>
	
	
	
	
	function opracowania_obj_gen() {
opr = [
{
tytul: "Higiena cyfrowa - nowy filar zdrowia w erze technologii",
data: "20.12.2024",
autor: "Miękus-Purwin Natalia",
dzial: "prasa",
art_link: "https://www.pharmabusters.pl/2024/12/20/higiena-cyfrowa.html",
dzial_link: ""
},
{
tytul: "Technologia PCT-MS-MicroLC-SWATH do analizy różnic związanych z płcią między móżdżkiem męskim i żeńskim.",
data: "04.12.2024",
autor: "Miękus-Purwin Natalia",
dzial: "prasa",
art_link: "https://www.pharmabusters.pl/2024/12/04/dla-chetnych.html",
dzial_link: ""
},
{
tytul: "Spotkania dietetyczno-farmaceutyczne kobiet",
data: "01.11.2024",
autor: "Miękus-Purwin Natalia",
dzial: "informacje",
art_link: "https://www.pharmabusters.pl/2024/11/01/cykl-warsztatow-01-2025.html",
dzial_link: ""
},	
{
tytul: "Holistyczne spojrzenie na budowanie odporności.",
data: "19.07.2023",
autor: "Miękus-Purwin Natalia",
dzial: "wykłady",
art_link: "https://www.pharmabusters.pl/2023/07/19/odpornosc-holistycznie.html",
dzial_link: ""
},	
{
tytul: "Czas zmian.",
data: "10.08.2023",
autor: "Miękus-Purwin Natalia",
dzial: "wykłady",
art_link: "https://www.pharmabusters.pl/2023/08/10/czas-zmian.html",
dzial_link: ""
},	
{
tytul: "Olejki eteryczne w walce z wirusami.",
data: "07.12.2022",
autor: "Miękus-Purwin Natalia",
dzial: "wykłady",
art_link: "https://www.pharmabusters.pl/2022/12/07/przeciwwirusowe-olejki.html",
dzial_link: ""
},	
{
tytul: "Seria Q&A (listopad 2022 cz.II).",
data: "27.11.2022",
autor: "Miękus-Purwin Natalia",
dzial: "Q&A",
art_link: "https://www.pharmabusters.pl/2022/11/27/pytania-i-odpowiedzi-listopad-2.html",
dzial_link: ""
},	
{
tytul: "Polscy aptekarze zainteresowani holistycznym podejściem do pacjenta.",
data: "27.11.2022",
autor: "Miękus-Purwin Natalia",
dzial: "prasa",
art_link: "https://www.pharmabusters.pl/2022/11/27/polscy-aptekarze-zainteresowani.html",
dzial_link: ""
},	
{
tytul: "Seria Q&A (listopad 2022).",
data: "12.11.2022",
autor: "Miękus-Purwin Natalia",
dzial: "Q&A",
art_link: "https://www.pharmabusters.pl/2022/11/12/pytania-i-odpowiedzi-listopad.html",
dzial_link: ""
},	
{
tytul: "Koło życia.",
data: "11.10.2022",
autor: "Miękus-Purwin Natalia",
dzial: "lajfhaki",
art_link: "https://www.pharmabusters.pl/2022/10/11/kolo-zycia.html",
dzial_link: ""
},
{
tytul: "Raz, dwa, trzy, próba mikrofonu.",
data: "12.10.2022",
autor: "Miękus-Purwin Natalia",
dzial: "lajfhaki",
art_link: "https://www.pharmabusters.pl/2022/10/12/raz-dwa-trzy-proba-mikrofonu.html",
dzial_link: ""
},
{
tytul: "Słówko o mnie.",
data: "15.10.2022",
autor: "Miękus-Purwin Natalia",
dzial: "zdrowie społeczne",
art_link: "https://www.pharmabusters.pl//omnie.html",
dzial_link: ""
},
{
tytul: "Holistic Health",
data: "1.10.2022",
autor: "Miękus-Purwin Natalia",
dzial: "lajfhaki",
art_link: "https://www.pharmabusters.pl/3_holistic.html",
dzial_link: ""
}
]
return opr
}

function filtruj(opracowania, slowo, autor, dzial) {

let opracowania_po_filtracji = [];
let opracowania_po_filtracji2 = [];
let opracowania_po_filtracji3 = [];
//pass0:
for (var i = 0; i < opracowania.length; i++) {
if (opracowania[i].tytul.toUpperCase().includes(slowo.toUpperCase())) {
opracowania_po_filtracji.push(opracowania[i])
}
}
//pass1:
if (document.getElementById("s0").value != "wszyscy autorzy") {
    for (var i = 0; i < opracowania_po_filtracji.length; i++) {
        if (opracowania_po_filtracji[i].autor == autor) {
            opracowania_po_filtracji2.push(opracowania_po_filtracji[i])
        }
    }
} else {
opracowania_po_filtracji2 = [...opracowania_po_filtracji];
}
//pass2:
if (document.getElementById("s1").value != "wszystkie działy") {
    for (var i = 0; i < opracowania_po_filtracji2.length; i++) {
        if (opracowania_po_filtracji2[i].dzial == dzial) {
            opracowania_po_filtracji3.push(opracowania_po_filtracji2[i])
        }
    }
} else {
opracowania_po_filtracji3 = [...opracowania_po_filtracji2];
}

return opracowania_po_filtracji3
}


function generator_LKO(tabelka, slowo, autor, dzial) {
let opracowania_po_filtracji = filtruj(opracowania_obj_gen(), slowo, autor, dzial);
let zawartosc = ""

for (var i = 0; i < opracowania_po_filtracji.length; i++) {
zawartosc = zawartosc + `
<tr>
<td><a href="${opracowania_po_filtracji[i].art_link}">${opracowania_po_filtracji[i].tytul}</a></td>
<td>${opracowania_po_filtracji[i].autor}</td>
<td><a href="${opracowania_po_filtracji[i].dzial_link}">${opracowania_po_filtracji[i].dzial}</a></td>
<td>${opracowania_po_filtracji[i].data}</td>
</tr>`
}

tabelka.innerHTML = zawartosc
}


window.onload = function () {
let tabelka = document.querySelector("#wnetrze");
generator_LKO(tabelka, "", "wszyscy autorzy", "wszystkie działy");
document.getElementById("fname").addEventListener('input', liste_uaktualnij);
document.getElementById("s0").addEventListener("change", liste_uaktualnij, false);
document.getElementById("s1").addEventListener("change", liste_uaktualnij, false);


}



function liste_uaktualnij() {
let wpisane = document.getElementById("fname").value;
let tabelka = document.querySelector("#wnetrze");
generator_LKO(tabelka, wpisane, document.getElementById("s0").value, document.getElementById("s1").value)

}

	
</script>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
