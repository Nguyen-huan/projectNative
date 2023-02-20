import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 5000;

const URL = "mongodb+srv://huans2002:huans2002@cluster0.wgtcf6j.mongodb.net/?retryWrites=true&w=majority"
http://localhost:5000/posts

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/posts', posts)

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Database")
    app.listen(PORT, (req, res) => {
      console.log(`Server is running on port ${PORT}`);
    })
  }).catch(err => {
    console.log(err)
  })

