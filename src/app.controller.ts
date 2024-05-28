import { Get, Post, Body, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  greet(): string {
    return this.appService.greetClient({ name: 'World' });
  }

  @Post()
  acknowledge(@Body() body: { name: string }): string {
    return this.appService.acknowledgeClient(body);
  }
}
