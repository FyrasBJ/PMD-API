import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greetClient(body: { name: string }): string {
    return `Hello ${body.name}`;
  }

  acknowledgeClient(body: { name: string }): string {
    return `Post received from ${body.name}`;
  }
}
