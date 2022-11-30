<style>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.a1 {
  background: url(https://res.cloudinary.com/malaika/image/upload/v1564327185/parallax-h-img-1_2.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.a2 {
  width: 100%;
  height: 35vw;
  overflow: hidden;
}

.wrap {

  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  -webkit-perspective: 2500px;
  perspective: 2500px;
  -webkit-perspective-origin: 100% 50%;
  perspective-origin: 100% 50%;
}
.wrap .girl {
  border: #fffefe 10px solid;
  background: url("https://autoserwis.leki.expert/static/siad.png") no-repeat;
  margin-left: 0;
  width: 450px;
  height: 600px;
  bottom: 0%;
  top: 10%;
  position: absolute;
}
.wrap h1 {
  left: -5%;
  transform: rotate(-49deg);
  color: #333;
  font-size: 4em;
  font-family: Raleway, sans-serif;
  top: 25%;
  position: absolute;
}
.wrap h1 span {
  color: black;
  font-weight: 1000;
}


.buttonx {
  border: 2px solid black;
  padding: 10px;
  z-index: 9999;
  top: -300px;
  position: relative;
  display: inline;
  margin-left: -60px;
  outline: none;
}

@media only screen and (max-width: 768px) {
  .girl {
    background: url(https://autoserwis.leki.expert/static/siad.png) no-repeat cover fixed;
  }

  .headerx {
    display: none;
  }
}

</style>

<div class="a1">
<div class="a2">

<div class="wrap">
	<div class="girl"></div>
	<h1 class="headerx" >&nbsp; &nbsp; &nbsp; We can do it.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span></span></h1>
  
</div>
	
</div>

</div>
