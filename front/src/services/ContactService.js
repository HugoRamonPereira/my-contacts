import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );

    await delay(600);
    return response.json();
  }
}

export default new ContactsService();
