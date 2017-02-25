$(document).ready(function(){
	console.log("Hola desde jquery");
	//alert("hola desde jquery");
	$("img").click(
		function(){
			//$(this).width("20px");
			//$(this).hide("slow");
			//$(this).show("fast");
			$(this).attr('src','imagen/2.jpg');
	});
	$("#btn-reiniciar").click(
		function(){
			$("img").show("fast");
	});
});