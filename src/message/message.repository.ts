import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('message.json', 'utf-8');
    const message = JSON.parse(content);

    return message[id];
  }

  async findAll() {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    return messages;
  }

  async create(message: string) {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, message };

    await writeFile('message.json', JSON.stringify(messages));
    return id;
  }
}
