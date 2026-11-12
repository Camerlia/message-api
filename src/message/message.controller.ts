import { Controller, Get, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  listMessage() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
