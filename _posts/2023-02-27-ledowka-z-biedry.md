---
layout: none
title: ledowka z biedry
description: bla
image: assets/images/ledowka.jpg
nav-menu: true
---



<div style="width:100%;background-color: gray;margin-top:0px;"> 

<h1 style="text-align:center;color:white;background-color:black;margin-top:0px;">Komunikacja na czas kryzysu - ledówka z biedry.</h1>

<img style="width:50%;margin-left:25%;margin-right:auto;" src="https://pharmabusters.pl/assets/images/ledowka.jpg"> 

<p>Autor opracowania: @radiowymiatacze, email do autora: piog@op.pl</p>


</div>




# 1. O co tu chodzi?

Chodzi o zbudowanie maksymalnie tanim kosztem maksymalnie użytecznego urządzenia służącego ludności cywilnej do przekazywania krótkich komunikatów w czasie kyzysu.

Zakładam, że w czasie kryzysu telefonia komórkowa i internet nie działają. Sieć energetyczna może działać lub nie - podobnie jak to się dzieje obecnie na terenie (jeszcze) Ukrainy.

# 2. Jakie media mogą służyć transmisji komunikatów w czasie kryzysu?

Dostrzegam 3 możliwości. <br><br>

a - Przestrzeń - jako ośrodek rozchodzenia się fal elektromagnetycznych (komunikacja w pasmach radiowych i za pomocą światła)<br>
b - Okablowanie stanowiące obecną sieć energetyczną - w przewodach mogą płynąć prądy o dużej częstotliwości jeśli je tam "wstrzykniemy"<br>
c - Powietrze - fala akustyczna - możemy sobie pokrzyczeć ;-)<br>

# 3. Dlaczego ledówka z biedry?

Bo kosztuje tyle co czekolada, świeci w 3 kolorach, ma pilota, przetwornicę impulsową, jej obwody działają przy napięciu 5V identycznym jakie jest na wyjściu popularnych powerbanków. Ponadto kolorowe LEDY są kluczowane z częstotliwością 620Hz czyli w sam raz dla ludzkiego ucha.






<div id="disqus_thread" style="background-color:lime;"></div>

<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = 'https://www.pharmabusters.pl/2023/02/27/ledowka-z-biedry.html';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://pharmabusters.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<script id="dsq-count-scr" src="//pharmabusters.disqus.com/count.js" async></script>





<script>
function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://autoserwis.leki.expert/baster15/";
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
