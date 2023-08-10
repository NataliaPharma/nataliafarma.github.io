---
layout: post
title: Czas zmian.
description: Zwolnić by móc dalej przyspieszać.
---

<p>Zatrzymać się i rozejrzeć dookoła. Zrobić to czego nawet nie sposób rozpocząć w normalnym rytmie codzienności. Zaszła potrzeba zwolnienia. Przerwa twórcza. Taka sytuacja ;) Mimo wszystko zapraszam na konsultacje idywidualne! Co takiego się stało? Szczegóły wewnątrz posta. Po przerwie czeka mnie poruszenie wielu nowych tematów, których nie brakuje i ciągle przybywa. </p> 


<iframe style="width:100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/OOGKjNuvaJM" title="Czas zmian i nowości Pharmabusters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<p>&nbsp;</p>

<hr class="major" />

<blockquote style="margin-left:0px;">	
		
		<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = 'https://www.pharmabusters.pl/2023/08/19/czas-zmian.html';  // Replace PAGE_URL with your page's canonical URL variable
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
</blockquote>


<script>

function licznikodw() {
var xhr4 = new XMLHttpRequest();
var url4 = "https://uz.mobilnyfarmaceuta.pl/baster17";
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

