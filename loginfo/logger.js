const pino = require('pino')
const log = pino({
    base:{pid: false},
    transport:{
        target: 'pino-pretty',
        options: {
            colorized: true
        }
    },
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
})

module.exports=log