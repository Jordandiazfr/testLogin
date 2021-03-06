import {connect, display_users, register_user } from "./db"
import * as registerRouter  from './Routes/register';
import express from "express"
import 'dotenv/config'
import * as session from "express-session"
import { User } from './types'
import bodyParser from "body-parser"


let router = express.Router()

const app = express();
const PORT = 4000;

app.get('/', (req,res) => {
  res.send('Express + TypeScript Server')
});

app.post('/login', (req,res) => {
  console.log("User is trying to log")
  res.send('Express + TypeScript Server')
  res.redirect("http://localhost:3000")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.post("/register", (req,res)=> {
  console.log(req)
  const { username, password }: User = req.body;
  if (username.length <= 2 || password.length <= 2 ) {
    return res.status(400).send('Bad username or password');
  }
  console.log({ username, password });
  register_user(username, password)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  res.status(201).send('User created');
} )









app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  connect()
  display_users()
});



