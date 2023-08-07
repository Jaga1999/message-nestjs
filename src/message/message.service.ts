import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  messageRepo: MessageRepository;
  constructor() {
    this.messageRepo = new MessageRepository();
  }

  async findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  async findAll() {
    return this.messageRepo.findAll();
  }

  async create(message: string) {
    return this.messageRepo.create(message);
  }
}
