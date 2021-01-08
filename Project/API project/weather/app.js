window.addEventListener('load',()=>{
    let long;
    let lat;
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    

    function setBackground(res){
        switch (res.data[0].weather.code) {
            case 200:
            case 201:
            case 202:
            case 230:
            case 231:
            case 232:
                document.body.style.backgroundImage = 'url("thunder.jpg")';
                break;
            case 300:
            case 301:
            case 302:
            case 500:
            case 501:
            case 502:
            case 511:
            case 520:
            case 521:
            case 522:
                document.body.style.backgroundImage = 'url("rain.jpg")';
                break;
            case 600:
            case 601:
            case 602:
            case 610:
            case 611:
            case 612:
            case 621:
            case 622:
            case 623:
                document.body.style.backgroundImage = 'url("rain.jpg")';
                break;
            case 800:
                document.body.style.backgroundImage = 'url("clear.jpg")';
                break;
            case 801:
            case 802:
            case 803:
            case 804:
                document.body.style.backgroundImage = 'url("cloud.jpg")';
                break;
            
            
            default:
                document.body.style.backgroundImage = 'url("default.jpg")';
                break;
        }
    }
    


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(long,lat);

            const api = `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${long}&key=Enter your key`;
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(res => {
                   
                    // set DOM element according to the API 
                    temperatureDegree.textContent =  res.data[0].temp;
                    temperatureDescription.textContent = res.data[0].weather.description;
                    locationTimezone.textContent = res.data[0].timezone;
                    setBackground(res);
                    
                })
        });
    }

    document.getElementById('searchBtn').addEventListener('click',()=>{
        let searchCity = document.getElementById('searchCity').value;
        let searchCountry = document.getElementById('searchCountry').value;
        if(searchCity && searchCountry)
            searchWeather(searchCity,searchCountry);
    })

    function searchWeather(city,country){
        fetch(`https://api.weatherbit.io/v2.0/current?&city=${city}&country=${country}&key=Enter your key`).then(result =>{
            return result.json();
        }).then(res=>{
            // set DOM element according to the API 
            temperatureDegree.textContent =  res.data[0].temp;
            temperatureDescription.textContent = res.data[0].weather.description;
            locationTimezone.textContent = res.data[0].timezone;
            setBackground(res);
        }).catch(err =>{
            alert('no such city');
        })
    }
})


