const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

// Singleton
module.exports = new ContactController();
