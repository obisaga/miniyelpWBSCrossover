import express from 'express';
import 'dotenv/config';
import client from '././db/db.js';
import restaurantRouter from './routes/restaurants.js';
import citiesRouter from './routes/cities.js';
import commentsRouter from './routes/comments.js';

import cors from 'cors';



const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET"],
      allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"],
      credentials: true,
    })
  )
  
app.use(express.json());
app.use('/api/restaurants', restaurantRouter);
app.use('/api/cities', citiesRouter);
app.use('/api/comments', commentsRouter);




const port = process.env.PORT || 3000;

client.on('connected', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})