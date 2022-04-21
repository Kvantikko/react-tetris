require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Score = require('./models/score')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

/**
 * Sends the frontend UI to clientside using app.use(express.static('build'))
 */
app.get('/', (req, res) => {
    res.send('<h1>Hello World! Täs pitäis näkyy frontti... </h1>')
})

/**
 * Sends all the scores to client
 */
app.get('/api/scores', (reqquest, response) => {
    Score.find({}).then(scores => {
        response.json(scores)
      })
    /*
    if (scores) {
        response.json(scores)
    } else {
        response.status(404).end()
    } 
    */
})

/**
 * Posts a new entry to database
 */
app.post('/api/scores', (request, response) => {
    const body = request.body
    
    const score = new Score({
        name: body.name,
        score: body.score,
    })

    score
        .save()
        .then(savedScore => savedScore.toJSON())
        .then(savedAndFormattedScore => {
            response.json(savedAndFormattedScore)
        })
        .catch(error => console.log(error))

    /*
    if (!body.name) {
        return response.status(400).json({ 
            error: 'missing name' 
        })
    }
    
    const score = {
        name: body.name,
        score: body.score,
        id: generateId(),
    }

    scores = scores.concat(score)

    response.json(score)
    */
})

/**
 * Dummy data before database connection implementation. If database is not implemented
 * before the project deadline, will use this array as the "database".
 
let scores = [
    {
        name: "Mikko",
        score: 100,
        id: 1
    },
    {
        name: "Ilona",
        score: 200,
        id: 2
    },
    
]


const generateId = () => {
    const maxId = scores.length > 0
      ? Math.max(...scores.map(n => n.id))
      : 0
    return maxId + 1
}
*/
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})