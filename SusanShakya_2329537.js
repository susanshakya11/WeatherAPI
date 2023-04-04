async function fetchweatherData(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Damak&appid=702d276959d6a177fcfbbad6150220e9");
    const data = await response.json();
    const lname = document.getElementById("location")
    lname.innerHTML = data.name
    const weat=document.getElementById("weather")
    weat.innerHTML=data.weather[0].description
    const temp = document.getElementById("temperature");
    temp.innerHTML = (data.main.temp - 273.15).toFixed(2) + " Celsius";
    const day = document.getElementById("Day-Date");
    day.innerHTML=new Date(data.dt*1000)
    const wi=document.getElementById("wind")
    wi.innerHTML=data.wind.speed+" "+"m/s"
    const hu=document.getElementById("humidity")
    hu.innerHTML=data.main.humidity+" "+"%"
    const pre=document.getElementById("pressure")
    pre.innerHTML=data.main.pressure+" " +"Pa"
    const icon = document.querySelector(".icon");
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`;
    console.log(data)
}

fetchweatherData()

const myform=document.getElementById("search-form")
console.log(myform)
myform.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchfield = document.getElementById("fsearch").value;
    console.log(searchfield)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield}&appid=702d276959d6a177fcfbbad6150220e9`);
    const data = await response.json();
    const lname = document.getElementById("location")
    lname.innerHTML = data.name
    const weat=document.getElementById("weather")
    weat.innerHTML=data.weather[0].description
    const temp = document.getElementById("temperature");
    temp.innerHTML = (data.main.temp - 273.15).toFixed(2) + " Celsius";
    const day = document.getElementById("Day-Date");
    day.innerHTML=new Date(data.dt*1000)
    const wi=document.getElementById("wind")
    wi.innerHTML=data.wind.speed+" "+"m/s"
    const hu=document.getElementById("humidity")
    hu.innerHTML=data.main.humidity+" "+"%"
    const pre=document.getElementById("pressure")
    pre.innerHTML=data.main.pressure+" " +"Pa"
    const icon = document.querySelector(".icon");
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`;

    console.log(data)
})
