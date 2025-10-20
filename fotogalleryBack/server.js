const express = require('express');
const { Pool } = require('pg'); 
const AppController = require('./controllers/app-controller');
const MessageService = require('./services/message-service');
const PhotoService = require('./services/photo-service');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConfig = {
  user: 'postgres',        
  host: 'localhost',          
  database: 'Gallery',   
  password: 'Filosof', 
  port: 5433,                 
};

const messageService = new MessageService(dbConfig);
const photoService = new PhotoService(dbConfig);

const appController = new AppController(messageService, photoService);

app.post('/messages', appController.createMessage);
app.get('/photos', appController.getAllPhotos);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing http server');
  await messageService.pool.end();
  await photoService.pool.end();
  console.log('PostgreSQL pool closed');
  process.exit(0);
});