var tog=0;
function initi(callback){

	callback();
}
function activen(){
	/*var nombresuj = SCOGetValue("cmi.core.student_name");
	var xn=document.getElementById("nombre");
	xn.innerHTML=nombresuj;*/

	setTimeout(function(){
		var introt = document.getElementById("todotodo");
		introt.style.display="block";

		introt = document.getElementById("introintro");
		introt.style.display="none";

	}, 200);

}

var classname = document.getElementsByClassName("pav");

var myFunction = function() {
	var left = document.getElementById("le");
	left.style.display="none";
	setTimeout(function(){
		left.style.display="block";
	}, 600);
	$('#bienve iframe').contents().find('video').each(function ()
  {
    this.pause();
  });
  $('video').each(function ()
  {
    this.pause();
  });

};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

function toggleFullscreen(div,butt) {

  var elem = document.getElementById(div);
	var elem2 = elem.parentNode;
	var elem3 = elem2.parentNode;
	var contro = document.getElementById("controles");
	var indi = document.getElementById("indicat");
	var buto = document.getElementById(butt);
	var zoomo = document.getElementById("estr");
	
	
	
	
	if(zoomo){
		var zoomo2 = zoomo.querySelector(".magnify");
	}

	if(tog===0){
		elem2.className="colu-b col-sm-12 col-12";
		elem3.querySelector(".colu-a").style.display="none";
		contro.style.display="none";
		indi.style.display="none";
		if(zoomo2){
			zoomo2.innerHTML='<img src="img/estructura.jpg" class="zoom" data-magnify-src="img/estructura.jpg" style="max-width: 100%;height: auto;max-height: 90%;" alt="Estructura">';
		}
		tog=1;
	}else {
		elem.parentNode.className="colu-b col-sm-8 col-12";
		elem3.querySelector(".colu-a").style.display="block";
		contro.style.display="block";
		indi.style.display="block";
		if(zoomo2){
			$('.zoom').magnify();
		}
		tog=0;
	}


}
