const request = require("request");

const forecast = (latitude,longtitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6e45fceb222af169d7345b7028e18540&query=${latitude},${longtitude}`;

    request({url, json:true}, (error,{body}) => {
        if(error){
            callback("Unable to connect to weather service", undefined)
        }else if (body.error) {
            callback("Unable to find location", undefined)
        }else {
            callback(undefined, `${body.current.weather_descriptions[0]}, ${body.current.temperature}`)
        }

    })
}


module.exports = forecast