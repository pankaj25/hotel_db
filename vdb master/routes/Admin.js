const express = require('express')
const Admin = express.Router()
const models  = require('../models');
const bcrypt = require('bcrypt')


Admin.get("/allUsers", async (req, res) => {
    try {
        let data = await models.User.findAll({
            attributes: ['id', 'name', 'email', 'contactNumber']
        })

        res.send(data)
    } catch (e) {
        console.log(e)
        console.log("Error in Admin - /allUsers")
    }
})

Admin.post("/editUser", async (req, res) => {
    try {
       
        let user = await models.User.findOne({
            where: {
                id: req.body.id
            }
        })

        if(user === null) {
            res.send({
                status: "faliure",
                error: "No user found with userId - " + req.body.id
            })

            return
        } else {

            let newUserData = {}
        
            for (let key in req.body) {
                if (req.body.hasOwnProperty(key) && req.body[key] !== "") {
                    newUserData[key] = req.body[key]
                }
            }

            if(newUserData.hasOwnProperty("password")){
                let hash = await bcrypt.hash(newUserData.password, 10)
                newUserData.password = hash
            }


            await user.update(newUserData)
            res.send({ status: "success" })
        }        
    } catch(e) {
        res.send({
            status: "faliure",
            error: e
        })
        console.log("Error in Edit user")
        console.log(e)
    }
})

Admin.post("/addUser", async (req, res) => {
    try {
        

        let user = await models.User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(user !== null) {
            res.send({
                status: "faliure",
                error: "User with this email already exists - " + req.body.email
            })
            return

        } else  {
            let newUserData = {}
        
            for (let key in req.body) {
                if (req.body.hasOwnProperty(key) && req.body[key] !== "") {
                    newUserData[key] = req.body[key]
                }
            }
            if(newUserData.hasOwnProperty("password")){
                let hash = await bcrypt.hash(newUserData.password, 10)
                newUserData.password = hash
            }

            await models.User.create({ ...newUserData, created: new Date() })
            res.send({ status: "success" })
        }
             
    } catch(e) {
        res.send({
            status: "faliure",
            error: e.message
        })
        console.log("Error in Add user")
        console.log(e)
    }
})

//Login
Admin.post('/login', (req, res) => {

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let userObject = { id: user.id, name: user.name, email: user.email, contactNumber: user.contactNumber }
					
                    let token = jwt.sign(userObject, process.env.SECRET_KEY)
                    // res.send(token)

                    res.json({
                        "message": "Logged in",
                        "token": token
                    })
                } else {
                    console.log('Wrong Password')
                    res.send('Error: Wrong Email/Password')
                }
            } else {
                console.log('User does not exist')
                res.send('Error: Wrong Email/Password')
               
            }
        })
        .catch(err => {
                    //  res.send('Error: Wrong Email/Password')          
            res.status(400).json({ error: err }) 
        })
})




Admin.post("/deleteUser", async (req, res) => {
    try {
        let user = await models.User.findOne({
            where: {
                id: req.body.id
            }
        })

        if(user !== null) {
            await models.User.destroy({
                where: {
                    id: user.id
                }
            })

            res.send({
                status: "success"
            })

        }
    } catch (e) {
        res.send({
            status: "faliure",
            error: e.message
        })
        console.log("Error in Delete user")
        console.log(e)
    }
})

Admin.get("/allTransactions", async (req, res) => {
    console.log("transaction done")
    const users = await models.Transaction.findAll({ include: [models.Commission, models.Tax] })
    res.send(users)
})


Admin.post("/cancelTransaction", async (req, res) => {
    try {
        let transaction = await models.Transaction.findOne({
            where: {
                refNo: req.body.refNo
            }
        })

        

        if(transaction !== null) {
            await transaction.update({ status: "Cancelled" })

            res.send({
                status: "success"
            })

        }
    } catch (e) {
        res.send({
            status: "faliure",
            error: e.message
        })
        console.log("Error in Delete user")
        console.log(e)
    }
})
module.exports = Admin