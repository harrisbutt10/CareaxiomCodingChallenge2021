const express =require('express')
const path= require('path')
const task1= require('./routers/task1')
const task2= require('./routers/task2')
const task3 = require('./routers/task3')


const app = express()
//load the Tasks router module in the app:
app.use(task1)
app.use(task2)
app.use(task3)


const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname, '../templates/views')

// Using hbs as the default view engine.This will render views(.hbs/html) files when response.render is called.
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//For all other routes, the server return HTTP code 404 
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: '404 - Page not found.'
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
