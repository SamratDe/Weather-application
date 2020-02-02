const request = require('request')

const forecast = function(lat, long, callback) {
    const url = 'https://api.darksky.net/forecast/7609d0aa727c1b2384b529fe13b4b2c1/' + lat + ',' + long + '/'
    request({url, json: true}, function(error, {body}) {
        if(error)
            callback('Not accesible!!', undefined)
        else if(body.error)
            callback('Wrong coordinates!!', undefined)
        else {
            callback(undefined, body.daily.data[0].summary)
        }
    })
}

module.exports = forecast