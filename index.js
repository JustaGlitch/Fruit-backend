// Importing Express 
const express = require('express')
const cors = require('cors')
// Create our server by calling express

const app = express()
// Above 1024
const port = 3000;
const fruits = require('./fruits.json');

const ids = fruits.map(fruit => fruit.id)
let maxId = Math.max(...ids)
//express.json middleware
app.use(cors())
app.use(express.json())
// GET route
app.get('/', (req, res) => {
    res.send('Hello, Fruity!')
})
// Route to return all the fruits
app.get('/fruits', (req, res) => {
        // AUTHENTIFICATION 
    res.send(fruits)
})
// Route to return a specific fruit and its information
app.get('/fruits/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)
    if (fruit == undefined) {
        res.status(404).send("The fruit doesn't exist.")
    } else {
        res.send(fruit)
    }
})
// Add a new piece of fruit to the date 
app.post('/fruits', (req, res) => {
    const name = req.body;
    const fruit = fruits.find(item => item.name.toLowerCase() == name.name.toLowerCase());
    if (fruit) {
res.status(409).send("This item already exists")
     }
        else {
            maxId += 1
            req.body.id = maxId
            fruits.push(name)
            res.status(201).send(name)

        }

        console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
