const key = '6c7a5Nq5Y1AGMMmRZp4ZAorhoo8yq9PG';
//stores our api key for the city 
//if key expires just delate the app and make a new one to receive a new key

//get weather information 
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console and return data because we need to pull it from the dom
    return(data[0]);

};

//function to get city information 
const getCity = async (city) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//query parameters always start with a question mark
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);


};

//1 request for city 
//2 we get the day 
//3 we get the weather and pass the key for that data appeneded to weather api
//4 promised returned from all datas and api's and passes into a call back function 


//  getCity('chicago').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
//   }).catch(err => console.log(err));

// getWeather("348308");