const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001

const path = require("path");

if (process.env.NODE_ENV === "production") {
    console.log('TRUE');
    
    app.use(express.static("client/build"));

    app.get("/*", (req, res) => {
        res.send(path.join(__dirname, "client", "build", "index.html"));
    })

}

let scores = [
    {
        name: "Mikko",
        score: 10,
        id: 1
    },
    {
        name: "Elisa",
        score: 100,
        id: 2
    },
    
]

const generateId = () => {
    const maxId = scores.length > 0
      ? Math.max(...scores.map(n => n.id))
      : 0
    return maxId + 1
}
app.get("/*", (req, res) => {
    res.send(path.join(__dirname, "client", "build", "index.html"));
})
/*
app.get('/', (req, res) => {
    res.send('<h1>Hello World! Täs pitäis näkyy frontti... </h1>')
})
*/
app.get('/api/scores', (reqquest, response) => {
    if (scores) {
        response.json(scores)
    } else {
        response.status(404).end()
    } 
})
  
app.get('/api/scores/:id', (request, response) => {
    const id = Number(request.params.id)
    const score = scores.find(note => note.id === id)
    response.json(score)

    if (score) {
        response.json(score)
    } else {
        response.status(404).end()
    }
})

app.post('/api/scores', (request, response) => {
    const body = request.body
    
    if (!body.name || !body.score) {
        return response.status(400).json({ 
            error: 'missing name or score' 
        })
    }
    
    const score = {
        name: body.name,
        score: body.score,
        id: generateId(),
    }

    scores = scores.concat(score)

    response.json(score)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})