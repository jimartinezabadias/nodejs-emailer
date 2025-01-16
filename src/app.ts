import express from 'express';
// import dotenv from 'dotenv';
import { gmail } from "@googleapis/gmail";
const app = express();
const port = 3000;

// dotenv.config();  // Load environment variables from .env file 
// const apiKey = process.env.GOOGLE_APPLICATION_CREDENTIALS;  // Retrieve the environment variable 
// console.log('API Key:', apiKey);  // Use the environment variable as needed
const asdf = gmail('v1');

app.get('/', async (req, res) => {
  try {
    // TODO: Login with credentials
    const messagesList = await asdf.users.messages.list({userId: 'me'});
    console.log('messages: ', messagesList.data)
  } catch (error) {
    console.error(error);
  }
  
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});