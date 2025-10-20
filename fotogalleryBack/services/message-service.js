const { Pool } = require('pg');

class MessageService {
  constructor(dbConfig) {
    this.pool = new Pool(dbConfig);
  }

  async createMessage(name, email, subject, message) {
    try {
      const result = await this.pool.query(
        'INSERT INTO messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, email, subject, message]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error creating message:', err);
      throw err;
    }
  }
}

module.exports = MessageService;