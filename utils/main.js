const chalk = require('chalk')
const geocode = require('./geocode')
const forecast = require('./forecast')

const findWeather = function(place) {
    geocode(place, function(error, {latitude, longitude, location}) {
        if(error)
            return console.log(chalk.red.inverse(error))
        forecast(latitude, longitude, function(error, forecastData) {
            if(error)
                return console.log(chalk.red.inverse(error))
            console.log(chalk.yellow.inverse('Location:') + ' ' + chalk.blueBright(location) + '\n')
            console.log(chalk.cyanBright.inverse('Weather:') + ' ' + chalk.blueBright(forecastData))
        })
    })
}

module.exports = findWeather