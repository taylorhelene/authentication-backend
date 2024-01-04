const Mpesa = require('mpesa-node')
const mpesaApi = new Mpesa({ consumerKey: 'LgdXPNQiI3kJlzXdy1WmH0yKGA8MgSqf', consumerSecret: '6AFzzzGcsnXrcV1G' })
// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
mpesaApi
    .c2bSimulate(
        254708374149,
        500,
        'h6dk0Ue2'
    )
    .then((result) => {
       console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })