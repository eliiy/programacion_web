$(document).ready(function()
{
	console.log("Hola desde jquery");
	$("#mensaje-ganador").hide();
	$("#mensaje-perdedor").hide();
	var arreglo1 = ['2','3','4','5','6','7','8','9','10'];
	var arreglo2 = [];
	var con=0;
	var imagen=0;
	var tiempo;
	var i,j,k;
    for (i = arreglo1.length; i; i--) 
    {
        j = Math.floor(Math.random() * i);
        k = arreglo1[i - 1];
        arreglo1[i - 1] = arreglo1[j];
        arreglo1[j] = k;
        arreglo2.push(arreglo1[i-1]);
    }

	 tiempo = setInterval(
		function()
		{
			console.log(arreglo2[con]);
			$("#"+arreglo2[con]).click(
				function ()
				{
						//$(this).width("20px");
						//$(this).hide("slow");
						//$(this).show("fast");
					$(this).attr('src','imagen/frijol.png');
					imagen=imagen+1;
					if(imagen==9 && con==9)
					{
						$("#mensaje-ganador").show();
						clearInterval(tiempo);
					}
				});
			
			$("#1").attr('src','imagen/'+arreglo2[con]+'.jpg');
			con=con+1;
			if(con==10 && imagen<9)
			{
				$("#1").attr('src','imagen/perder.jpg');
				clearInterval(tiempo);
				$("#mensaje-perdedor").show();
			}
		}, 3000);
			
		
	
	
	$("#btn-reiniciar").click(
		function()
		{
			
			//$("#img").show();
		});

	
});