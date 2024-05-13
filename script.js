var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var date = document.querySelector(".date");
var temperature = document.querySelector(".temperature");
var climate = document.querySelector(".climate");
var data_eye = document.querySelector(".data_eye");
var data_wind = document.querySelector(".data_wind");
var data_cloud = document.querySelector(".data_cloud");
var data_time = document.querySelector(".date");
var container = document.querySelector(".container");
var body = document.querySelector("body");

async function Change_UI_Weather() {
  let captital_value = search.value.trim();
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${captital_value}&appid=25c02175e1bf7b13383b9623ded2948a`;
  let data = await fetch(apiURL).then((response) => response.json());
  if (data.cod == 200) {
    // console.log(data)
    container.classList.add("visible");
    city.textContent = data.name;
    country.textContent = data.sys.country;
    data_eye.textContent = data.visibility + "(m)";
    data_wind.textContent = data.wind.speed + "(m/s)";
    data_cloud.innerText = data.clouds.all + "(%)";
    let temp = (temperature.textContent = Math.round(data.main.temp - 273.15));
    temperature.textContent = temp;
    // var  data_climate ={}
    // for(let i = 0; i < data.weather.length; i++){
    //     data_climate = data.weather[i]
    // }
    climate.textContent = data.weather[0] ? data.weather[0].main : " ";
    data_time.textContent = new Date().toLocaleString("vi");

    body.setAttribute("class", "summer");
    if (temp <= 25) {
      body.setAttribute("class", "spring");
    }
    if (temp <= 22) {
      body.setAttribute("class", "fall");
    }
    if (temp <= 19) {
      body.setAttribute("class", "winter");
    }
  } else {
    container.classList.remove("visible");
  }
}
Change_UI_Weather("");
search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    Change_UI_Weather();
  }
});
