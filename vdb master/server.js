const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const models = require('./models')
const app = express()
let PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use( bodyParser.urlencoded( { extended: false } ))

const Users = require("./routes/Users")
const Payment = require("./routes/Payment")
const History = require("./routes/History")
const Admin = require('./routes/Admin')


app.use("/users", Users)
app.use("/payment", Payment)
app.use("/history", History)
app.use("/admin", Admin)

app.use(express.static(path.resolve(__dirname, 'build')))

models.sequelize.sync()
// models.sequelize.sync({ force:true})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})