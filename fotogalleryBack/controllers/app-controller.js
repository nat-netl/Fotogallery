class AppController {
  constructor(messageService, photoService) {
    this.messageService = messageService;
    this.photoService = photoService;
    this.createMessage = this.createMessage.bind(this); 
    this.getAllPhotos = this.getAllPhotos.bind(this);
  }

  async createMessage(req, res) {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).send('All fields are required.');
    }

    try {
      const newMessage = await this.messageService.createMessage(name, email, subject, message);
      res.status(201).json(newMessage);
    } catch (err) {
      console.error('Error in createMessage:', err);
      res.status(500).send('Error creating message.');
    }
  }

  async getAllPhotos(req, res) {
    try {
      const photos = await this.photoService.getAllPhotos();
      res.json(photos);
    } catch (err) {
      console.error('Error in getAllPhotos:', err);
      res.status(500).send('Error fetching photos.');
    }
  }
}

module.exports = AppController;