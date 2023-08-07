import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  @Get()
  listMessages(): string {
    return 'List Messages';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): string {
    return 'Get Message' + id;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): string {
    console.log(body);
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
