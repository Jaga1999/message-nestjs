import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  listMessages(): string {
    return 'List Messages';
  }

  @Get('/:id')
  getMessage(): string {
    return 'Get Message';
  }

  @Post()
  createMessage(): string {
    return 'Create New Message';
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
