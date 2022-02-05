var city = "Houston";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=8e8d4f3faae12c7f77eb4fdde7f2641c",
function(data){
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = data.main.temp;
        var weather = data.weather[0].main;
        var clothes = data.main.feels_like;
        var sweater = document.createElement("sweater");
        sweater.src = "C:\Users\kotir\OneDrive\Desktop\weatherap\26n58PICCK3f2c8Id38Uc_PIC2018.png_860.png";
        $(".city").append(city);
        $(".icon").attr("src",icon);
        $(".temp").append(temp);
        $(".weather").append(weather);
        if(clothes > 50){
            $(".clothes").append("not sweater weather in this neighborhood!");
            $(".clothes").append(sweater);
        }else{
            $(".clothes").append("sweater weather");
        }
    }
);
