const yargs = require('yargs')
const findWeather = require('./utils/main')

yargs.command({
    command: 'weather',
    describe: 'to find the weather!',
    builder: {
        location: {
            describe: 'name of the place',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        findWeather(argv.location);
    }
})

yargs.parse()