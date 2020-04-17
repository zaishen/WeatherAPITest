	$(document).ready(function() {
			$("#btn1").click(function(){
				console.log("Testing");
				var zipCode = $("#zipcode").val();
				console.log(zipCode);
				$.ajax({
					url:"https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + 
					",us&appid=276d6cb1e70c4368ba483a3a126088cf"
				}).then(function(data){
					console.log(data);
					document.getElementById("result").innerHTML = 
						"City:"+data.name+"<br>"+
						"Temp:"+data.main.temp+"<br>"+
						"Humidity:"+data.main.humidity+"<br>";
				})
			})
	})