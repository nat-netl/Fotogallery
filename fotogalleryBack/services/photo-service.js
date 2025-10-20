const { Pool } = require('pg');

class PhotoService {
  constructor(dbConfig) {
    this.pool = new Pool(dbConfig);
  }

  async getAllPhotos() {
    try {
      const result = await this.pool.query('SELECT * FROM photos');
      return result.rows;
    } catch (err) {
      console.error('Error fetching photos:', err);
      throw err;
    }
  }
}

module.exports = PhotoService;