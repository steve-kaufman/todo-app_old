const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio')
const express = require('@feathersjs/express')

const app = express(feathers())

// Static serve
app.use(express.static('public'))
// Parse JSON
app.use(express.json())
// Config socket.io realtime APIs
app.configure(socketio())
// Enable REST services
app.configure(express.rest())

// Register services
// ex. app.use('/service', new Service())

// Connect to stream
app.on('connection', conn => app.channel('stream').join(conn))
// Publish events to stream
app.publish(data => app.channel('stream'))

const PORT = process.env.PORT || 3030

app.listen(PORT).on('listening', () => {
  console.log(`Listening on port ${PORT}`)
})
