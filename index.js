const express = require('express')
const path = require('path')

const htmlFile = path.join(__dirname)
const app = express()
const courses = require('./coursesData')

app.get('/', (req, res) => {
    res.sendFile(htmlFile +'/index.html')
})

app.get('/api/courses/', (req,res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) {
       res.status(404).send('The course is not found 404!')
   }
   res.send(course)
})
const port = process.env.PORT || 2000;
app.listen(port, () => console.log('The app is running in port: '+ port))