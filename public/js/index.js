let socket = io();
socket.on('connect', () => {
    console.log('new user connected')
})
socket.on('disconnect', () => {
    console.log("dosconneted from server")
})

socket.on('newMessage', (message) => {
    console.log('newMessage', message)
})