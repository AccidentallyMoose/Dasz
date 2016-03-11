var events = require('events')

var eventEmitter = new events.EventEmitter()
var ids = []

setInterval(() => {
  var status = (Math.random() > 0.5) ? 'success' : 'error'

  eventEmitter.emit('update', ids, {
    status,
    message: 'Well, hello!'
  })
}, 5000)

var getInitialState = (widgetId, config) => {
  ids.push(widgetId)

  return {
    status: 'success',
    message: config.message
  }
}

module.exports = {
  on: eventEmitter.on.bind(eventEmitter),
  getInitialState
}
