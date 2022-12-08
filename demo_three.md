<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body {

			margin: 0;
            background-image: url("https://autoserwis.leki.expert/static/reklama.png");
            background-size:cover;
			}
		</style>
	</head>
	<body>
 <audio id="hardbass">
  <source src="static/hardbass.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<script>
var hardbass = document.getElementById("hardbass");
</script>

	    <script src="https://autoserwis.leki.expert/static/Tween4.js" ></script>
	    <script src="https://autoserwis.leki.expert/static/three3.js" ></script>
        <script src="https://autoserwis.leki.expert/static/WebGL.js"></script>
        <script src="https://autoserwis.leki.expert/static/threex.dynamictexture.js"></script>

<canvas id="canvas" style="height: 100vh; width:100vw;">
</canvas>




<script>
const video = document.getElementById( 'video' );
var przesunkamerewX
var przesunkamerewY
var przesunkamerewZ



// raycaster

           const raycaster = new THREE.Raycaster();
           const pointer = new THREE.Vector2()
           var pwzf = new THREE.TextureLoader().load( "static/reklama.png" );



			const scene = new THREE.Scene();
			scene.background = pwzf
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            const canvas = document.querySelector('#canvas');
			const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: false, precision: "mediump", alpha: false});
			renderer.setSize(3200, 1600, false)

// ----

var geometryn = new THREE.BoxGeometry(1,1,1);
var texturen	= new THREEx.DynamicTexture(1024,1024);
//!!
const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshPhongMaterial({map: loader.load('static/agnes.jpg'), color: 0xffffff}),
  new THREE.MeshPhongMaterial({map: loader.load('static/nati.jpg'), color: 0xffffff}),
  new THREE.MeshPhongMaterial({map: loader.load('static/agnes.jpg'), color: 0xffffff}),
  new THREE.MeshPhongMaterial({map: loader.load('static/nati.jpg'), color: 0xffffff}),
  new THREE.MeshPhongMaterial({map: loader.load('static/agnes.jpg'), color: 0xffffff}),
  new THREE.MeshPhongMaterial({map: loader.load('static/nati.jpg'), color: 0xffffff}),
];


var materialn = new THREE.MeshPhongMaterial({map: texturen.texture,flatShading: false, side: THREE.DoubleSide});
//!!
var cuben = new THREE.Mesh(geometryn,materialn);
cuben.position.z = -2;cuben.position.y = -3.5;cuben.position.x = 0.02;

var textn = "?"

texturen.context.font	= "bolder 512px Verdana";
texturen.texture.anisotropy = renderer.getMaxAnisotropy();
texturen.clear('pink');
texturen.drawText(textn, undefined, 700, 'black')






//-----

            const q1tex = new THREE.TextureLoader().load( "https://farmaceuta.leki.expert/static/q1.jpg" );
            const q1 = new THREE.MeshPhongMaterial( {map: q1tex, flatShading: false, side: THREE.DoubleSide} );

            const q2tex = new THREE.TextureLoader().load( "https://farmaceuta.leki.expert/static/q2.jpg" );
            const q2 = new THREE.MeshPhongMaterial( {map: q2tex, flatShading: false, side: THREE.DoubleSide} );

            const q3tex = new THREE.TextureLoader().load( "https://farmaceuta.leki.expert/static/q3.jpg" );
            const q3 = new THREE.MeshPhongMaterial( {map: q3tex, flatShading: false, side: THREE.DoubleSide} );




// ----

			const geometry = new THREE.BoxGeometry(1.3,1,0.1);
			const cube = new THREE.Mesh( geometry, q3 );
			scene.add( cube );

			cube.position.x = 1.7
			cube.position.y = -1

			const geometry2 = new THREE.BoxGeometry(1.3,1,0.1);
			const cube2 = new THREE.Mesh( geometry2, q1 );

			cube2.position.x = 0.01
			cube2.position.y = -1

			scene.add( cube2 );


			const geometry3 = new THREE.BoxGeometry(1.3,1,0.1);
			const cube3 = new THREE.Mesh( geometry3, q2 );

			cube3.position.x = -1.7
			cube3.position.y = -1

			scene.add( cube3 );



            const q0tex = new THREE.TextureLoader().load( "https://farmaceuta.leki.expert/static/q0.jpg" );
            const q0 = new THREE.MeshPhongMaterial( {map: q0tex, flatShading: false, side: THREE.DoubleSide} );
			const geometry4 = new THREE.BoxGeometry(4,1,0.1);
			const cube4 = new THREE.Mesh( geometry4, q0 );

			cube4.position.x = 0
			cube4.position.y = 1

			scene.add( cube4 );
            scene.add(cuben);
/*
			var materialxx = new THREE.MeshPhongMaterial( { color:0x00ff00, flatShading: false, side: THREE.DoubleSide } )
			const geometry5 = new THREE.BoxGeometry(20,20,0.1);
			const cube5 = new THREE.Mesh( geometry5, materialxx );

			cube5.position.x = 0
			cube5.position.y = 0
			cube5.position.z = -2


			scene.add( cube5 );
*/
			camera.position.z = 4;

			const light = new THREE.PointLight( 0xffffff, 1, 100 );
            light.position.set( 0, 0, 10 );
            scene.add( light );



            var wdol = 0
			function animate() {


            cuben.rotation.x = cuben.rotation.x + 0.005
			wdol = wdol + 0.001
            pwzf.offset.set(0, 1);

           // update the picking ray with the camera and pointer position


	// calculate objects intersecting the picking ray


	           // for ( let i = 0; i < intersects.length; i ++ ) {

	         // 	intersects[1].object.material.color.set( 0xff0000 );


             //	}

				renderer.render( scene, camera );
				requestAnimationFrame( animate );
				TWEEN.update()
			};

/*
function ttouchstart(clientX, clientY) {
   cube.material.color.set( 0xffffff );
   cube2.material.color.set( 0xffffff );
   cube3.material.color.set( 0xffffff );
   cube4.material.color.set( 0xffffff );

   pointer.x = (clientX / window.innerWidth ) * 2 - 1;
   pointer.y = - (clientY / window.innerHeight ) * 2 + 1;
   var intersects = raycaster.intersectObjects( scene.children );
   for ( let i = 0; i < intersects.length; i ++ ) {
       intersects[i].object.material.color.set( 0xff0000 );
    }
}
*/

function onPointerMove( event ) {


   //cuben.material.color.set( 0xffffff );
   cube.material.color.set( 0xffffff );
   cube2.material.color.set( 0xffffff );
   cube3.material.color.set( 0xffffff );
   cube4.material.color.set( 0xffffff );

   var pointerx = ( event.clientX / canvas.width ) * 2 - 1;
   var pointery = - ( event.clientY / canvas.height ) * 2 + 1;

   var vector = new THREE.Vector2( pointerx, pointery );
   raycaster.setFromCamera( vector, camera );
   var intersects = raycaster.intersectObjects( scene.children );
   console.log(intersects);
   console.log(event.clientX);
   console.log(event.clientY);

  for ( let i = 0; i < intersects.length; i ++ ) {


     if (typeof(intersects[i].object.material.color ) != "undefined") {
          intersects[i].object.material.color.set( 0xff0000 );
          } else {
                 if (intersects[i].faceIndex == 9 || intersects[i].faceIndex == 5){
                 window.open("https://twitter.com/agniesz25249989");
                 } else {
      window.open("https://twitter.com/BustersPharma");
      }


     }




  }




    target = {z:0, y:0, z:4}
    tweenn();

   if (intersects.length > 0) {

    przesunkamerewY = intersects[0].object.position.y.valueOf()
    przesunkamerewX = intersects[0].object.position.x.valueOf()
    przesunkamerewZ = 3.5

    if (intersects[0].object.position.x.valueOf() == 1.7) {
    let utterance = new SpeechSynthesisUtterance("źle");
    window.speechSynthesis.speak(utterance); }
    else if (intersects[0].object.position.x.valueOf() == -1.7) {
    let utterance = new SpeechSynthesisUtterance("prawie dobrze");
    window.speechSynthesis.speak(utterance);
    } else if (intersects[0].object.position.x.valueOf() == 0.01) {
    let utterance = new SpeechSynthesisUtterance("Bardzo dobrze. W polsce jest dwóch najlepszych psychodietetyków. Są nimi Natalia i Agnieszka.");
    cuben.material = materials
    cuben.material.needsUpdate
    przesunkamerewZ = -0.5;
    przesunkamerewY = -3.51;
    window.speechSynthesis.speak(utterance);
    hardbass.volume = 0.5
    hardbass.play()
    } else if (intersects[0].object.position.x.valueOf() == 0) {
    let utterance = new SpeechSynthesisUtterance("Zaznacz prawidłową odpowiedź i dowiedz się kto jest najlepszym psychodietetykiem w Polsce.");
    window.speechSynthesis.speak(utterance);
    }

    if (intersects[0].object.position.y.valueOf() == -3.5) {
    let utterance = new SpeechSynthesisUtterance("Odpowiedz poprawnie to się dowiesz.");

    window.speechSynthesis.speak(utterance);
    }



    target = {x:przesunkamerewX, y:przesunkamerewY, z:przesunkamerewZ}
    tweenn();
    } else {
    target = {x:0, y:0, z:4}
    tweenn();

    }


}

// var clientX, clientY;

    canvas.addEventListener( 'pointerdown', onPointerMove );








function tweenn() {

var position = {x: camera.position.x, y: camera.position.y, z: camera.position.z};
var tween = new TWEEN.Tween(position).to(target, 500)
tween.easing(TWEEN.Easing.Sinusoidal.Out)
tween.onUpdate(function(){
    camera.position.x = position.x;
    camera.position.y = position.y;
    camera.position.z = position.z;
});
tween.start();




}









//    window.addEventListener('touchstart', function(e) {
//  clientX = e.touches[0].clientX;
//  clientY = e.touches[0].clientY;
//  ttouchstart(clientX, clientY);
//}, false);
function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
   renderer.setSize(width, height, false);
   camera.aspect = width/height
  var tcanvas = document.getElementById("canvas");
  tcanvas.width = width;
  tcanvas.height = height;

  }
}
resizeCanvasToDisplaySize();

	animate();

resizeCanvasToDisplaySize();
window.addEventListener("resize", resizeCanvasToDisplaySize);




</script>
</body>
</html>
