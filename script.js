const apiKey = "1126fb714bae6c7c0199b1c268ec1b52";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
            // const response = await fetch(apiUrl + '&appid=${apiKey}');
            // const response = await fetch(`${city} + ${apiUrl}&appid=${apiKey}`);
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
else{

            var data = await response.json();
            
  

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://abhay-tomar03.github.io/Weather-App/icons/011-cloud.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://tse3.mm.bing.net/th/id/OIP.ZwFGOY54rc3TAJLMjxAjyAHaHa?pid=Api&P=0&h=180";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1.jpg";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/7349/7349383.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
          }}
          searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
          })

          searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
         });