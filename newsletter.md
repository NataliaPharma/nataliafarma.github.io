---
layout: post
title: Newsletter
description: Work/life balance
image: assets/images/golab.jpg
---


<!-- wyłażące okienko start -->
<div id="poka" style="border:1px solid black;display:none;background-color:LightGray;overflow:scroll;position:absolute;width:95vw;height:80vh;left:2.5vw;top:10vh;z-index:900;color:black;">
	
	<div id="poka2" style="width:95vw;">
          	<div style="background-color:gray;width:100%;text-align:right;height:2rem;color:white;">
            		<div id="tyt" style="width:calc(100% - 2rem);position:absolute;text-align:center;">
			</div>
            		<img style="background-color:black;width:2rem;height:2rem;cursor:pointer;" src="https://autoserwis.leki.expert/static/iks2.jpg" onclick='document.getElementById("poka").style.display ="none";'></img>
           	 </div>


	</div>
	        <p id="fikimiki" style="margin-top:2.5rem;margin-left:1rem;margin-right:1rem;"></p>

</div>

<!-- wyłażące okienko stop -->
	    

<div class="image main">
	
	<p>&nbsp;</p>
	
	<form action="">
		<div class="">
  		  <div class="">
			  
			<div class=" " style="color: #ffffff; text-align: center;" >
     				 <h3 style="color: #ffffff;">Drogi czytelniku pharmabusters.pl</h3>
				
				
				
				<a onclick='rst();document.getElementById("tyt").innerHTML="jakieś info";document.getElementById("fikimiki").innerHTML="treść jakiegoś info";document.getElementById("poka").style.display ="inherit";'>test</a>
				
				
				
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
    						<label for="coding" style="line-height:9px;color:white;text-align:left;"><span style="font-size:9px;	color:white;">Wyrażam zgodę na zbieranie, przechowywanie i przetwarzanie moich danych osobowych w celach związanych z usługą newslettera i marketingu bezpośredniego przez administratora danych osobowych tj. XXXXXXXXXXXX, e-mail: XXXXXXXXX, zgodnie z <a href="" target="_blank">Regulaminem</a>, <a href="" target="_blank">Polityką prywatności</a>.&nbsp;Zapoznałam/em się z tymi dokumentami i akceptuję ich treść.</span></label>
						 
						<input type="checkbox" id="coding" name="zgoda0" value="coding" style="width:2em;height:2em;"/>
  					</div>
					<p>&nbsp;</p>
  					<div id="check1" style="font-size:27px;text-align:center;border:1px solid red;padding:9px;">
    						 <label for="music" style="line-height:9px;color:white;text-align:left;"><span style="font-size:9px;">Wyrażam zgodę na otrzymywanie drogą elektroniczną (e-mail) informacji handlowych (marketing) pochodzących od XXXXXX Wyrażam zgodę na wykorzystywanie przez XXXXXXXXX telekomunikacyjnych urządzeń końcowych w rozumieniu przepisów ustawy z dnia 16 lipca 2014 r. Prawo telekomunikacyjne. Przyjmuję do wiadomości, że mogę w dowolnym momencie wycofać te zgody. Wycofanie przeze mnie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie mojej zgody przed jej wycofaniem.</span></label>
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


}
	
	
	
</script>














