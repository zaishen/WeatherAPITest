	$(document).ready(function() {
			$("#btn2").click(function(){
				var lat = $("#lat").val();
				var lon = $("#lon").val();
				var cities="";
				$.ajax({
					url:"https://api.openweathermap.org/data/2.5/find?lat=" + lat + 
					"&lon=" + lon + 
					"&cnt=10&appid=276d6cb1e70c4368ba483a3a126088cf"
				}).then(function(data){
					$.each(data.list, function(idx){
//						console.log(data);
						console.log(data.list[idx].name);
						cities = cities + data.list[idx].name+"<br>";
					})
					document.getElementById("result").innerHTML = cities;
				})
			})
	})