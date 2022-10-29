/*
This file is part of E-rp.calc.

    E-rp.calc. is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    E-rp.calc. is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with E-rp.calc.  If not, see https://www.gnu.org/licenses/.

*/


var matrix_wydane = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
    
];

var sumaArrayi = [];
var sumaArrayiK = [];
var RedBlueArr = [];	
var poNalozeniu = [];
var poWygumkowywaniu = [];
var sumaodcinkow0_30 = 0;
var minelodniGlob = 0;
var moznajednostekGlob = 0;
var przepadlojednostekGlob = 0;
function eerpcalcZerujZmienne() {
matrix_wydane = [ [],[],[],[],[],[],[],[],[],[],[],[],[] ];
sumaArrayi = [];
sumaArrayiK = [];
RedBlueArr = [];	
poNalozeniu = [];
poWygumkowywaniu = [];
sumaodcinkow0_30 = 0;

};

function jakDlugoWaznaRp(w) {
var dniWciaguKtorychMoznaZr;
var naIleDniMozePrzep;
//lekarz
     if (w.rb_kto0 == true && w.rb_grupa0 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 365; naIleDniMozePrzep = 360;} 
else if (w.rb_kto0 == true && w.rb_grupa1 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 30; naIleDniMozePrzep = 90;}
else if (w.rb_kto0 == true && w.rb_grupa2 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 30; naIleDniMozePrzep = 360;}
else if (w.rb_kto0 == true && w.rb_grupa0 == true && w.rb_czyant1 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 7; naIleDniMozePrzep = 360;}
else if (w.rb_kto0 == true && w.rb_grupa0 == true && w.rb_czyant0 == true && w.rb_czyimm1 == true) {dniWciaguKtorychMoznaZr = 120; naIleDniMozePrzep = 360;}
//pielegniarka
else if (w.rb_kto1 == true && w.rb_grupa0 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 360; naIleDniMozePrzep = 180; alert("Przypomnienie: Pielęgniarka nie może wypisywać leków bardzo silnie działających.");}
else if (w.rb_kto1 == true && w.rb_grupa1 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {alert("Pielegniarka nie może wypisywać N-ek!");}
else if (w.rb_kto1 == true && w.rb_grupa2 == true && w.rb_czyant0 == true && w.rb_czyimm0 == true) {alert("Pielegniarka nie może wypisywać psychotropów!");}
else if (w.rb_kto1 == true && w.rb_grupa0 == true && w.rb_czyant0 == true && w.rb_czyimm1 == true) {dniWciaguKtorychMoznaZr = 360; naIleDniMozePrzep = 180;}
else if (w.rb_kto1 == true && w.rb_grupa0 == true && w.rb_czyant1 == true && w.rb_czyimm0 == true) {dniWciaguKtorychMoznaZr = 7; naIleDniMozePrzep = 180;}

else {alert("Osoba wypisująca rp i typ leku uzupełnione ok?")};


return [dniWciaguKtorychMoznaZr, naIleDniMozePrzep];
};	

function erpcalcSumujArrayePoEwKorekcie() {
	
var info = document.createElement("P");
 document.getElementById("tuwykres").appendChild(info);	
 info.style.fontSize = "1.2vw";
 info.innerHTML = "3b. Wprowadzenie ewentualnej korekty, jeżeli jakaś porcja/jakieś porcje były wydane przed 31 dniem.";	
	

//przesuniecie do lewej tych arrayi ktore reprezentuja porcje wydane przed 31 dniem
var arnr;
sumaodcinkow0_30 = 0;
var arrayekwiwalentny = [];

for (arnr=0; arnr <12; arnr++) {
	
var poczatek = matrix_wydane[arnr].findIndex(function(element) { return typeof element == "number";});	
	
if (poczatek < 31 && poczatek != -1 ) {

while (typeof matrix_wydane[arnr][0] != "number") { matrix_wydane[arnr].shift();};

//sumowanie dlugosci arrayi reprezentujacych porcje wydane przed 31 dniem
sumaodcinkow0_30 += matrix_wydane[arnr].length;

//wyundefinedowanie arraya ktorego dlugosc juz dodano
var l;
var ml = matrix_wydane[arnr].length;
for (l=0; l < ml; l++) {
matrix_wydane[arnr][l]	= undefined;
};

};};
// wygenerowanie arraya o poczatku w t0 i z jedynkami w szeregu w ilosci sumaodcinkow0_30

var i;
for (i=0; i < sumaodcinkow0_30; i++) {
arrayekwiwalentny[i] = 1;		
};
matrix_wydane[12] = arrayekwiwalentny;

var ze;
for (ze=0; ze < 365; ze++) {
sumaArrayiK[ze] = 0;
};


var arnr;
var poz;
for (arnr=0; arnr <13; arnr++) {

for (poz=0; poz < 365; poz++) {

var pomocnicza = matrix_wydane[arnr][poz];
if (pomocnicza == undefined) {pomocnicza = 0;};
sumaArrayiK[poz] = sumaArrayiK[poz]+pomocnicza;	

};	
	
	
};



return sumaArrayiK;	
		
};




function eerpcalcWygumkowywanie(poNalozeniu, w) {
var info = document.createElement("P");
document.getElementById("tuwykres").appendChild(info);	
info.style.fontSize = "1.2vw";
info.innerHTML = '5. Poruszając się od lewej do prawej poczynając od dnia pierwszej sprzedaży "wygumkowujemy" najpierw dni czerwone, potem dni niebieskie ale tylko w ilości odpowiadającej nakładającym się dniom zielonym z pkt.4 (uwzględniając liczbę nakładających się odcinków)';
// ile dni do wygumkowania?
var i;
var dniDoWygumkowania = 0;
for (i=0; i < sumaArrayiK.length; i++) {
if (sumaArrayiK[i] > 1) {
dniDoWygumkowania = dniDoWygumkowania + (sumaArrayiK[i] - 1);
};
};
//gumkowanie etap0 - znalezienie poczatku odcinka najblizszego t0

var poczatek = poNalozeniu.findIndex(function(element, index) {


if (index > 30 ) { return typeof element == "number"};
});
// gumkowanie etap1
//-------
for (i=poczatek; i < poNalozeniu.length; i++) {
if (dniDoWygumkowania > 0 ) {
  if (poNalozeniu[i] == "r"|| poNalozeniu[i] == "b") {
  poNalozeniu[i] = 0; 
  dniDoWygumkowania = dniDoWygumkowania - 1;	
  };
};	
};
//--------
//rysowanie
var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	

var i;
var kolorek;
for (i = 0; i < 365; i++) { 
	
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  
  if (poNalozeniu[i] == "r") {node.style.color = "red";}
  else if (poNalozeniu[i] == "b") { node.style.color = "blue";}
  else if ( typeof poNalozeniu[i] == "number" ) { kolorek = poNalozeniu[i]*64; node.style.color = "RGB(0," + kolorek + ", 0)";}
  else if ( typeof poNalozeniu[i] == "undefined" ) { 

  var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(" " + i + " .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);  
  break

	} else {  node.style.color = "RGB(0,0,0)";};
  
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
};
	


 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);
 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);	
//zliczenie niebieskich i  wypisanie wyniku

var count = 0;
var i = 0;
for(i = 0; i < poNalozeniu.length; ++i){
    if(poNalozeniu[i] == "b")
        count++;
};


var node = document.createElement("SPAN");
  node.style.fontSize = "1.2vw";
  node.style.color = "pink";
var textnode = document.createTextNode("- Można wydać leku na " + count + " dni. Czyli " + count*w.jednostek_na_dobe + " j.d.");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
  

};

function eerpcalcWygumkowywanieV2(poNalozeniu, w) {
	
var info = document.createElement("P");
document.getElementById("tuwykres").appendChild(info);	
info.style.fontSize = "1.2vw";
info.innerHTML = '5. "Wygumkowywanie."';

var i;
var dluugosc = poNalozeniu.length;
for (i=30; i < dluugosc ; i++) {

if 	(poNalozeniu[i] > 1) {

var tylewygumkowac = poNalozeniu[i] - 1

var ii
for (ii=0; ii < tylewygumkowac; ii++) {

var polozenie = 0;
polozenie = poNalozeniu.findIndex(function(element, index) {if (index > i ) { return typeof element == "string"};});	
poNalozeniu[polozenie] = 0;	
};
	
};

	
};


//--------
//rysowanie
var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	

var i;
var kolorek;
for (i = 0; i < 365; i++) { 
	
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  
  if (poNalozeniu[i] == "r") {node.style.color = "red";}
  else if (poNalozeniu[i] == "b") { node.style.color = "blue";}
  else if ( typeof poNalozeniu[i] == "number" ) { kolorek = poNalozeniu[i]*64; node.style.color = "RGB(0," + kolorek + ", 0)";}
  else if ( typeof poNalozeniu[i] == "undefined" ) { 

  var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(" " + i + " .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);  
  break

	} else {  node.style.color = "RGB(0,0,0)";};
  
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
};
	


 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);
 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);	
//zliczenie niebieskich i  wypisanie wyniku

var count = 0;
var i = 0;
for(i = 0; i < poNalozeniu.length; ++i){if(poNalozeniu[i] == "b") {count++};};

var countt2 = 0;
var i = 0;
for(i = 0; i < poNalozeniu.length; ++i){ if(poNalozeniu[i] == "r") {countt2++};};



var countt3 = 0;
var i = 0;
for(i = 0; i < poNalozeniu.length; ++i){ if(typeof poNalozeniu[i] == "number") {countt3 = countt3 + poNalozeniu[i]};};


var node = document.createElement("SPAN");
  node.style.fontSize = "1.2vw";
  node.style.color = "white";
var textnode = document.createTextNode("- Można wydać lek na " + count + " dni (" + count*w.jednostek_na_dobe + " j.d.).");
  wyniktxt1 = "Można jeszcze wydać lek na " + count + " dni. (" + count*w.jednostek_na_dobe + " j.d.).";
  node.appendChild(textnode);
  
moznajednostekGlob = count*w.jednostek_na_dobe;

var br = document.createElement("BR"); node.appendChild(br); 
var textnode = document.createTextNode("- Przepadła ilość leku odpowiadająca " + countt2 + " dniom (" + countt2*w.jednostek_na_dobe + " j.d.).");
  wyniktxt2 = "Przepadła ilość leku odpowiadająca " + countt2 + " dniom (" + countt2*w.jednostek_na_dobe + " j.d.)."
  node.appendChild(textnode);
  
przepadlojednostekGlob = countt2*w.jednostek_na_dobe;

var br = document.createElement("BR");   node.appendChild(br); 
   
var textnode = document.createTextNode("- W sumie wydano już lek na " +countt3 + " dni. (" + countt3*w.jednostek_na_dobe + " j.d.)."); 
  wyniktxt3 = "W sumie wydano już lek na " +countt3 + " dni. (" + countt3*w.jednostek_na_dobe + " j.d.).";
  node.appendChild(textnode);




if (minelodniGlob > 30) {wyniktxt5 = "Można uwzględnić NZO wydając max " + (parseInt(w.wielkosc_nzo) + count*w.jednostek_na_dobe) + " j.d.";} else {wyniktxt5 = "Nie można uwzględnić NZO (mniej niż 30 dni od wyp.)";};

if (w.wielkosc_nzo.trim() == "") { wyniktxt5 = "";};


  var br = document.createElement("BR");   node.appendChild(br); 
  var br = document.createElement("BR");   node.appendChild(br); 
  document.getElementById("tuwykres").appendChild(node);



};


function eerpcalcRysujPoNal(poNalozeniu) {
	
var info = document.createElement("P");
document.getElementById("tuwykres").appendChild(info);	
info.style.fontSize = "1.2vw";
info.innerHTML = "4. Nałożenie obrazu z pkt.3 na obraz z pkt.1. (tam gdzie nie ma zielonego jest przezroczyście).";

var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	

var i;
var kolorek;
for (i = 0; i < 365; i++) { 
	
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  
  if (poNalozeniu[i] == "r") {node.style.color = "red";}
  else if (poNalozeniu[i] == "b") { node.style.color = "blue";}
  else if ( typeof poNalozeniu[i] == "number" ) { kolorek = poNalozeniu[i]*64; node.style.color = "RGB(0," + kolorek + ", 0)";}
  else if ( typeof poNalozeniu[i] == "undefined" ) { 

  var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(" " + i + " .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);  
  break

	} else {  node.style.color = "RGB(0,0,0)";};
  
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
};
	


 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);		
	
	
};

//..............................
function eerpcalcNaloz(RedBlueArr, sumaArrayi) {
	
for (i = 0; i < 365; i++) {

if (sumaArrayi[i] > 0) {poNalozeniu[i] = sumaArrayi[i];} else { poNalozeniu[i] = RedBlueArr[i]};
	
};
	
};


function erpcalcRysujSumeArrayi(sumaArrayi) {

var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	
	
	
var intensywnosc = 0; 
var i;	
for (i = 0; i < 365; i++) {
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  
  intensywnosc = sumaArrayi[i]*64;
  node.style.color = "RGB(0, "+intensywnosc+", 0)";
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
}

	
};

function erpcalcSumujArraye() {

var info = document.createElement("P");
document.getElementById("tuwykres").appendChild(info);	
info.style.fontSize = "1.2vw";
info.innerHTML = "3a. Sumowanie odcinków czasu na jakie wydano leki.";

//zerowanie sumaArrayi
var ze;
for (ze=0; ze < 365; ze++) {
sumaArrayi[ze] = 0;
};


var arnr;
var poz;
for (arnr=0; arnr <12; arnr++) {

for (poz=0; poz < 365; poz++) {

var pomocnicza = matrix_wydane[arnr][poz];
if (pomocnicza == undefined) {pomocnicza = 0;};
sumaArrayi[poz] = sumaArrayi[poz]+pomocnicza;	

};	
	
	
};

return sumaArrayi;

	
};
	


function erpcalcRysujOdcinkiCzasu(w) {
	
var info = document.createElement("P");
document.getElementById("tuwykres").appendChild(info);	
info.style.fontSize = "1.2vw";
info.innerHTML = "2. Narysowanie odcinków czasu odpowiadających długościom stosowania poszczególnych wydanych porcji (zielony).";	

if (w.wyd_0_op*w.wyd_0_po > 0 ) {
RysujOdcinekCzasu(0, w.wyd_0_miesiac, w.wyd_0_dzien, w.wyd_0_rok, w.wyd_0_op, w.wyd_0_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_1_op*w.wyd_1_po > 0 ) {
RysujOdcinekCzasu(1, w.wyd_1_miesiac, w.wyd_1_dzien, w.wyd_1_rok, w.wyd_1_op, w.wyd_1_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_2_op*w.wyd_2_po > 0 ) {
RysujOdcinekCzasu(2, w.wyd_2_miesiac, w.wyd_2_dzien, w.wyd_2_rok, w.wyd_2_op, w.wyd_2_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_3_op*w.wyd_3_po > 0 ) {
RysujOdcinekCzasu(3, w.wyd_3_miesiac, w.wyd_3_dzien, w.wyd_3_rok, w.wyd_3_op, w.wyd_3_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_4_op*w.wyd_4_po > 0 ) {
RysujOdcinekCzasu(4, w.wyd_4_miesiac, w.wyd_4_dzien, w.wyd_4_rok, w.wyd_4_op, w.wyd_4_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_5_op*w.wyd_5_po > 0 ) {
RysujOdcinekCzasu(5, w.wyd_5_miesiac, w.wyd_5_dzien, w.wyd_5_rok, w.wyd_5_op, w.wyd_5_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_6_op*w.wyd_6_po > 0 ) {
RysujOdcinekCzasu(6, w.wyd_6_miesiac, w.wyd_6_dzien, w.wyd_6_rok, w.wyd_6_op, w.wyd_6_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_7_op*w.wyd_7_po > 0 ) {
RysujOdcinekCzasu(7, w.wyd_7_miesiac, w.wyd_7_dzien, w.wyd_7_rok, w.wyd_7_op, w.wyd_7_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_8_op*w.wyd_8_po > 0 ) {
RysujOdcinekCzasu(8, w.wyd_8_miesiac, w.wyd_8_dzien, w.wyd_8_rok, w.wyd_8_op, w.wyd_8_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_9_op*w.wyd_9_po > 0 ) {
RysujOdcinekCzasu(9, w.wyd_9_miesiac, w.wyd_9_dzien, w.wyd_9_rok, w.wyd_9_op, w.wyd_9_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_10_op*w.wyd_10_po > 0 ) {
RysujOdcinekCzasu(10, w.wyd_10_miesiac, w.wyd_10_dzien, w.wyd_10_rok, w.wyd_10_op, w.wyd_10_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};if (w.wyd_11_op*w.wyd_11_po > 0 ) {
RysujOdcinekCzasu(11, w.wyd_11_miesiac, w.wyd_11_dzien, w.wyd_11_rok, w.wyd_11_op, w.wyd_11_po, w.wystawienie_miesiac, w.wystawienie_dzien, w.wystawienie_rok, w.jednostek_na_dobe);
};
};

function RysujOdcinekCzasu(nr_w_macierzy, miesiac, dzien, rok, wydop, wydpo, wystawienie_miesiac, wystawienie_dzien, wystawienie_rok, jednostek_na_dobe) {
	
//przygotowanie zmiennej odpowiadającej dacie wydania
var date_wyd = new Date(miesiac + "/" + dzien + "/" + rok);	
//wyliczenie ilości leku wykupionego w tym dniu
var iloscjd = wydop*wydpo;
//znalezienie tX-start
var date_wyst = new Date(wystawienie_miesiac + "/" + wystawienie_dzien + "/" + wystawienie_rok);

var odlegloscOdT0 = date_wyd.getTime() - date_wyst.getTime();
var tXstart = odlegloscOdT0 / (1000 * 3600 * 24);
//znalezienie tX-meta
var dlugoscOdcinka = iloscjd/jednostek_na_dobe;
var tXmeta = tXstart + dlugoscOdcinka;

var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);

var i;
for (i = 0; i < tXmeta; i++) { 
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  
  if (i < tXstart) {node.style.color = "RGB(0,0,0)";}
  else if (i >= tXstart && i < tXmeta) { node.style.color = "lime"; matrix_wydane[nr_w_macierzy][i] = 1;}
  else if (i > tXmeta) { node.style.color = "RGB(0,32,32)";}
  else {  node.style.color = "RGB(0,32,32)";};
  
  
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
}

var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(" " + i + " .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);

 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);	


};




function erpcalcRysujPrzedPo(w) {
	
var info = document.createElement("P");
 document.getElementById("tuwykres").appendChild(info);	
 info.style.fontSize = "1.2vw";
 info.innerHTML = "1. Narysowanie odcinka czasu pomiędzy dniem wypisania recepty i ostatnim dniem w którym pacjent przyjmie lek gdyby wykupił całość i nie robił przerw w stosowaniu go. Odcinek dzielimy na dwie części. Część przed dniem, w którym dokonujemy obliczenia ilości leku pozostałej do wydania (czerwony) i część po tym dniu (niebieski).";
 
//roznica w dniach miedzy dniem wystawienia i dzisiejszym dniem
var date1 = new Date(w.wystawienie_miesiac + "/" + w.wystawienie_dzien + "/" + w.wystawienie_rok);
var data = new Date();
var a_dzi = (data.getMonth() + 1);
var a_mie = data.getDate();
var a_rok = data.getFullYear();
var date2 = new Date(a_dzi + "/" + a_mie + "/" + a_rok);	
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
Difference_In_Days = Math.floor(Difference_In_Days);

minelodniGlob = Difference_In_Days.valueOf();


var info = document.createElement("P");
 document.getElementById("tuwykres").appendChild(info);	
 info.style.fontSize = "1.2vw";
 info.style.color = "white";
 info.innerHTML = "- Minęło " + Difference_In_Days + " dni od wypisania recepty.";
 wyniktxt4 =  "Minęło " + Difference_In_Days + " dni od wypisania recepty."
//okres na jaki zostały wypisane leki
var jednostekdawkowaniawsumie = w.wypisano_opakowan*w.wielkosc_wypisanych_opakowan;
var calegolekuwystarczyna = jednostekdawkowaniawsumie/w.jednostek_na_dobe;


//---------
var waznadni;
var nailewyp;
[waznadni, nailewyp] = jakDlugoWaznaRp(w);
if (Difference_In_Days > waznadni) {alert("Recepta przeterminowana!");}
if (calegolekuwystarczyna > nailewyp) {alert("Wypisane zbyt dużo leku!");}
//----



var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);		

RedBlueArr = [];	
var i;
for (i = 0; i < calegolekuwystarczyna; i++) { 
	
if (i<Difference_In_Days && Difference_In_Days > 30) {
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  node.style.color = "red";
  RedBlueArr[i] = "r";
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
} else {
	
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  node.style.color = "blue";
  RedBlueArr[i] = "b";
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
};
  
};
var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode("  " + i + "  .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	
 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);	
	



};



function erpcalcWypiszWartoscPol(wartoscipol) {
alert(JSON.stringify(wartoscipol));	
};

function erpcalcRysujOdcinekWaznosciRp(w) {	
	
var br = document.createElement("BR");
document.getElementById("tuwykres").appendChild(br);	

var info = document.createElement("P");
 document.getElementById("tuwykres").appendChild(info);	
 info.style.fontSize = "1.2vw";
 info.innerHTML = "0. Odcinek reprezentujący okres czasu w którym recepta tego typu może zostać zrealizowana. ";
	
	
var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode(".  0  ");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);			

//kto i co
var waznadni;
var nailewyp;

[waznadni, nailewyp] = jakDlugoWaznaRp(w);

var i;
//alert(JSON.stringify(w));

for (i = 0; i < waznadni; i++) { 
  var node = document.createElement("SPAN");
  node.style.fontSize = "0.35vw";
  node.style.color = "yellow";
  var textnode = document.createTextNode("█");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);
};



//---------


var node = document.createElement("SPAN");
  node.style.fontSize = "1vw";
  node.style.color = "white";
  var textnode = document.createTextNode("  " + i + "  .");
  node.appendChild(textnode);
  document.getElementById("tuwykres").appendChild(node);	
 var br = document.createElement("BR");
 document.getElementById("tuwykres").appendChild(br);	
	
	
};
