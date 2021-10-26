const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const needle = require('needle');
const multer = require('multer');
const path = require('path');
const db = require('./db')

const app = express()
const PORT = process.env.API_PORT || 3300

const menusRouter = require('./routes/menus-route')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


let storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null, './uploads');
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)
      );
   }
});

let upload = multer({storage: storage})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.use('/api', upload.single('<FILE>'), menusRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))