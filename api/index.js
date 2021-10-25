const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const needle = require('needle');
const multer = require('multer');
const db = require('./db')

const app = express()
const PORT = process.env.API_PORT || 3300

const menusRouter = require('./routes/menus-route')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

let upload = multer({dest:"uploads/"})

const storage = multer.diskStorage({
   destination: (req,file,callback) => {
      callback("Error","uploads")
   },
   filename: (req,file,callback) => {
      callback("Filename is Empty !",`${file.originalname}`)
   }
})


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.use('/api', upload.single('file'), menusRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))