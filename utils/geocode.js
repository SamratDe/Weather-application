const request = require('request')

const geocode = function(address, callback) {   //function definition
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FtcmF0ZGUiLCJhIjoiY2s2M29ocjJyMGU3czNtcHBzbHdsZGtpZCJ9.SHmbsPLD-BErVAk6TYiiYg'
    request({url, json: true}, function(error, {body}) {
        if(error)
            callback('No access!!', undefined)
        else if(body.features.length === 0)
            callback('Location not found!!', undefined)
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode