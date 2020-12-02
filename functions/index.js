const functions = require('firebase-functions');
const cors = require('cors')
const express = require('express')

const stripe = require('stripe')('sk_test_51HqZPuJYklAWW39c7Mrx08BvyE7N0xXjow6qvF2oQ6v2l6qDg4MJkzeVipg8SHL0lgIPTd7Aw5FddYKqpQhSEKgv00NnXKdOvQ')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())


// API Routes
app.get('/', (request, response) => {
    response.status(200).send('Its Working!!!!')
})

app.post('/payments/create', async (request, response) => {
    // Get the sent total sub-units from the url
    const total = request.query.total
    console.log('Payment Request Recieved for the total ->', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})

// Listen command
exports.api = functions.https.onRequest(app)

// Emulate
// firebase emulators:start


// http://127.0.0.1:5001/clone-c32e4/us-central1/api
//  /api is because we are exporting api