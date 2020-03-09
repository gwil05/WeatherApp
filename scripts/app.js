//dom manipulation 
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    //destructure properties and store them easily
    const {cityDets, weather} = data;


//update details template in the html doc
details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4">
<span>${weather.Temperature.Imperial.Value}</span>
<span>&deg;F</span>
</div>
`;

//update night/day image icons 
 const iconSrc = `icons/${weather.WeatherIcon}.png`;
 icon.setAttribute('src', iconSrc);

 //ternary operator lt timeSrc = weather.IsDaytime ? 'day.svg' : 'night.svg';
let timeSrc = null;
if(weather.IsDayTime){
    timeSrc ='day.svg';
} else {
    timeSrc ='night.svg';
}
//attaches the src to the time of day 
time.setAttribute('src', timeSrc);

//remove the d-none class if present
if(card.classList.contains('d-none')){
   card.classList.remove('d-none');
}


};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    //data object being returned
    return {
        cityDets: cityDets,
        weather: weather };

};


//everything below here states what we do after they click submit for cities infromation
cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get the city value aka what the user typed in
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ui with the new city
updateCity(city)
.then(data => updateUI(data))
.catch(err => console.log(err));
});