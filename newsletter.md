---
layout: post
title: Newsletter
description: Work/life balance
image: assets/images/golab.jpg
---



<!-- wyłażące okienko start -->
<div id="poka" style="border:1px solid black;display:none;background-color:LightGray;position:fixed;width:95vw;height:80vh;left:2.5vw;top:10vh;z-index:900;color:black;overflow:scroll;">
	
	<div id="poka2" style="width:95vw;position:fixed;">
          	<div style="background-color:gray;width:100%;text-align:right;height:2rem;color:white;">
            		<div id="tyt" style="width:calc(100% - 2rem);position:absolute;text-align:center;">
			</div>
            		<img style="background-color:black;width:2rem;height:2rem;cursor:pointer;" src="https://autoserwis.leki.expert/static/iks2.jpg" onclick='document.getElementById("poka").style.display ="none";' />
           	 </div>


	</div>
	        <div id="fikimiki" style="margin-top:2.5rem;margin-left:1rem;margin-right:1rem;font-size:12px;"></div>

</div>

<!-- wyłażące okienko stop -->
	    

<div class="image main">
	
	<p>&nbsp;</p>
	
	<form action="">
		<div class="">
  		  <div class="">
			  
			<div class=" " style="color: #ffffff; text-align: center;" >
     				 <h3 style="color: #ffffff;">Drogi czytelniku pharmabusters.pl</h3>
				
								
				
   			</div>
			  
			 <div class="" style="color: #ffffff; text-align: center;">
			<br><span>Zapisz się do newslettera, by otrzymywać informacje o nowych wydarzeniach i materiałach na stronie!</span>
      			</div>
			 &nbsp;<br>

			<div style="width:100%;">
	
     				<div class="" style="margin: auto; width: 70%; padding: 10px; text-align:left;" >
          				  <label class="" style="color: #ffffff;left:0px;">Imię</label>
        				    <input class="" name="imie" type="text" placeholder="Jan">
    				</div>
				&nbsp;<br>
	
   				 <div class="" style="margin: auto; width: 70%; padding: 10px; text-align:left;">
	    				 <label class="" style="color: #ffffff;left:0px;">Adres e-mail</label>
	    				 <input class="" name="mail" type="email" placeholder="email.address@example.com">
    				 </div>
	
			</div>
	    
			&nbsp;<br>
			  
	    		 <div class="" style="color: #ffffff; text-align: center;">
				 <span>By móc wysyłać Tobie newsletter potrzebne będą dwie zgody:</span>
     			 </div>
			&nbsp;<br>
	    
			<div style="margin: auto; width: 100%; padding: 10px; text-align:left;">
	
				<fieldset>
 					 <div id="check0" style="font-size:27px;text-align:center;border:1px solid red;padding: 9px;">
    						<label for="coding" style="line-height:9px;color:white;text-align:left;"><span style="font-size:9px;	color:white;">Zgadzam sie na otrzymywanie newslettera drogą mailową. Pana/i dane osobowe będą przetwarzane w celu prowadzenia korespondencji e-mail związanej z realizacją konsultacji, edukacji i usług świadczonych przez Natalia Miękus-Purwin. Więcej  o zasadach: <a onclick='rst();document.getElementById("tyt").innerHTML=klauzula_tyt;document.getElementById("fikimiki").innerHTML=klauzula;document.getElementById("poka").style.display ="inherit";' style="cursor:pointer;" >KLAUZULA RODO</a>, <a onclick='rst();document.getElementById("tyt").innerHTML=zgodarodo_tyt;document.getElementById("fikimiki").innerHTML=zgodarodo;document.getElementById("poka").style.display ="inherit";' style="cursor:pointer;">Zgoda na przetwarzanie danych osobowych zgodnie Z RODO</a>.&nbsp;Zapoznałam/em się z tymi dokumentami i akceptuję ich treść.</span></label>
						 
						<input type="checkbox" id="coding" name="zgoda0" value="coding" style="width:2em;height:2em;"/>
  					</div>
					<p>&nbsp;</p>
  					<div id="check1" style="font-size:27px;text-align:center;border:1px solid red;padding:9px;">
    						 <label for="music" style="line-height:9px;color:white;text-align:left;"><span style="font-size:9px;">Wyrażam zgodę na wykorzystywanie przez Natalię Miękus-Purwin telekomunikacyjnych urządzeń końcowych w rozumieniu przepisów ustawy z dnia 16 lipca 2014 r. Prawo telekomunikacyjne. Przyjmuję do wiadomości, że mogę w dowolnym momencie wycofać te zgody. Wycofanie przeze mnie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie mojej zgody przed jej wycofaniem.</span></label>
						 <input type="checkbox" id="music" name="zgoda1" value="music" style="width:2em;height:2em;" />
  					</div>
					<p>&nbsp;</p>
				</fieldset>
	    
 			</div>

     			<div class="" style="margin: auto; width: 80%; padding: 10px; text-align:center;">
       				 <button onclick="nacisnieto();" type="button" class="" style="border-radius: 5px;color: #000000;background-color: #ffffff"> Zapisz się! </button>
				
     			</div>
   	      </div>
   	  </div>
   </form>
	
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	
<div style="display:none;">	
	
	<form action="https://formspree.io/f/mnqrgpnq" method="POST" >
			<div class="field">
					<label for="email">Zapisz się na newsletter:</label>
			
				        <input type="email" name="email" placeholder="email">
				
					<textarea name="message" id="email" placeholder="twój e-mail" rows="1"></textarea>
                              
				
				</div>
				<ul class="actions">
					<li><button id="wysylaj" type="submit">wysylaj</button></li>
				</ul>
	</form>
	
</div>	
	
	
	
	<p>&nbsp;</p>
</div>
	
<script>
var checkbox0 = document.querySelector("input[name=zgoda0]");
var checkbox1 = document.querySelector("input[name=zgoda1]");
	
var pole0 = document.querySelector("input[name=imie]");
var pole1 = document.querySelector("input[name=mail]");

var send0 = document.querySelector("input[name=email]");
var send1 = document.querySelector("textarea[name=message]");

checkbox0.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById("check0").style.border="1px solid lime";
  } else {
    document.getElementById("check0").style.border="1px solid red";
  }
});
	
checkbox1.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById("check1").style.border="1px solid lime";
  } else {
    document.getElementById("check1").style.border="1px solid red";
  }
});

	
function nacisnieto() {
	
var oki = 1;
	
        if (checkbox0.checked == false || checkbox1.checked == false ) {
	alert("Nie wyrazono potrzebnych zgód.");
	oki = 0;
	}
	
	
        if (pole0.value == "" || pole1.value == "" ) {
	alert("Wypełnij wszystkie pola.");
	oki = 0;
	}
	
	if (oki == 1) {
	
	send0.value = "newsleter@newsletter.nl"
        send1.value = cip(pole0.value + " # " + pole1.value);
	document.getElementById("wysylaj").click();
	} 
	
}
	
	
	
function cip(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@ĄąĆćĘęÓóŻżŹź';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm0987654321$źŹżŻóÓęĘćĆąĄ';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}	
	

function rst(){

  setTimeout(function() {document.getElementById('poka').scrollTo(0, 0);}, 100);


};

var zgodarodo_tyt = "Treść w oknie jest przewijalna.";
var zgodarodo = `<p>ZGODA NA PRZETWARZANIE DANYCH OSOBOWYCH ZGODNIE Z RODO</p>
<p>Wyrażam zgodę na przetwarzanie moich danych osobowych przez administratora danych - Natalię Annę Miękus-Purwin z siedzibą w Gdyni 81-553, ul. Bernadowska 1a/6. w następującym zakresie:</p>
 
<p>1)Imię.</p>
<p>2)Adres e-mail.</p>
 
<p>Przyjmuję do wiadomości, że wszelkie inne dodatkowe, omyłkowo podane przeze mnie podczas zapisywania się na newsletter dane osobowe zostaną natychmiast skasowane i w związku z tym nie staną się przedmiotem dalszego przetwarzania.</p>
<p>Zdaję sobie sprawę, że przetwarzanie polegające na natychmiastowym skasowaniu danych będzie wynikiem, mogącego nastąpić przypadkowo, podania dodatkowych danych o które nie zostałem poproszony i jest jedynym dostępnym, możliwym do zastosowania środkiem zapobiegawczym jakim Administrator dysponuje.</p>
 <p>Zostałem/am poinformowany/a, że zgoda na przetwarzanie moich danych osobowych jest dobrowolna oraz o przysługującym prawie do dostępu do tych danych osobowych i ich poprawiania, a także  o możliwości cofnięcia zgody.</p>
<p>Zgodę, o której mowa powyżej, wyrażam dobrowolnie oraz świadomie.</p>	
`;
	

	
	
	
var klauzula_tyt = "Treść w oknie jest przewijalna.";
var klauzula = `<p>KLAUZULA INFORMACYJNA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH</p><p>Wypełniając obowiązek, o którym mowa w art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz.U.UE.L.2016.119.1 ze zm.) (dalej: RODO), informujemy, że:</p>

<p>1. Administratorem Pani/Pana danych osobowych (dalej: Administrator) jest Natalia Anna Miękus-Purwin.</p>
<p>2. Z Administratorem można się kontaktować pisemnie na adres Bernadowska 1a/6 81-553 Gdynia lub poprzez pocztę elektroniczną na adres: miekusn@gmail.com</p>
<p>3. Pani/Pana dane osobowe są przetwarzane na podstawie art. 6 ust. 1 lit. a RODO - osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów.</p>
<p>4. Dane osobowe są przetwarzane przez Administratora w celu przekazywania subskrybowanego newslettera.</p>
<p>5.  Jednynym  odbiorcą dysponującym danymi osobowymi w formie niezaszyfrowanej jest administrator. Podmioty świadczące na rzecz Administratora w szczególności usługi telekomunikacyjne, informatyczne i księgowe oraz inne podmioty, które muszą zostać dopuszczone do przetwarzania Pani/Pana danych osobowych w powyższych celach przetwarzają je w formie zaszyfrowanej. Administrator nie udziela i nie udzieli żadnym osobom wglądu w otrzymane dane osobowe i nie zezwala ani nie zezwoli nikomu na wgląd w nie poza dwoma wyjątkami jakie stanowią:<br>
a) moment wysyłki listu zawierającego newsletter dla zamawiającego go, gdy dane tej osoby są niezbędne do zaadresowania listu elektronicznego poprzez serwer poczty gmail (Google). W tym przypadku potencjalny wgląd do danych, jedynie tą drogą, otrzymują osobą zarządzające tym serwerem, ponieważ wysłanie listu elektronicznego innym sposobem nie jest technicznie możliwe.<br> 
b) Żądanie osoby dostępu do danych (pkt 9 a)</p>
<p>6. Pani/Pana dane osobowe nie będą przekazywane do państwa trzeciego lub organizacji międzynarodowej.</p>
<p>7. Pani/Pana dane osobowe będą przetwarzane do czasu zgłoszenia rezygnacji przez Panią/Pana z otrzymywania newsletteru bądź też do zakończenia wydawania tego newsletteru.</p>
<p>8. W związku z przetwarzaniem Pani/Pana danych osobowych przysługuje Pani/Panu prawo do:<br>
a) żądania od Administratora dostępu do Pani/Pana danych osobowych;<br>
b) żądania od Administratora sprostowania Pani/Pana danych osobowych;<br>
c)żądania od Administratora usunięcia Pani/Pana danych osobowych;<br>
d) żądania od Administratora ograniczenia przetwarzania Pani/Pana danych osobowych;<br>
e) wniesienia sprzeciwu wobec przetwarzania Pani/Pana danych osobowych;<br>
f) przenoszenia Pani/Pana danych osobowych;<br>
g) wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych;</p>
<p>10. W przypadku pozyskania danych osobowych w sposób inny niż od osoby, której dane dotyczą, źródłem pochodzenia takich danych może być:<br>
a) formularz służący zamawianiu newslettera;<br>
b) formularz kontaktowy znajdujący się na samym dole strony;<br>
c) wiadomość otrzymana na kontaktową skrzynkę email;<br>
d) wiadomość sms otrzymana na kontaktowy numer telefonu;<br>
e) wiadomość otrzymana pocztą tradycyjną;</p>
<p>W każdym takim przypadku osoba, której dane dotyczą będzie zapytana o chęć zapisania na newsletter i dopiero po oświadczeniu woli znalezienia się na liście subskrybentów zostanie na nią wpisana. Takiej osobie niniejsza KLAUZULA INFORMACYJNA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH zostanie przedstawiona w całości przed umożliwieniem podjęcia decyzji o zapisaniu się na wspomnianą listę.</p>
<p>Podanie przez Panią/Pana danych osobowych jest dobrowolne, niemniej jest niezbędne i jest warunkiem do przekazywania newsletteru.</p>
<p>Pani/Pana dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym do profilowania.</p>
`;

</script>


<script>
function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://uz.mobilnyfarmaceuta.pl/baster6";
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











