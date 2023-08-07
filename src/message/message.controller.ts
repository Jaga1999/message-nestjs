import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message Not Found');
    }
    return message;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.message);
  }

  @Put('/:id')
  updateMessage(): string {
    return 'Update Message';
  }

  @Delete('/:id')
  deleteMessage(): string {
    return 'Delete Message';
  }
}
