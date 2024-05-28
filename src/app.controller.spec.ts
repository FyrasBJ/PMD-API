import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World"', () => {
      jest.spyOn(appService, 'greetClient').mockImplementation(() => 'Hello World');
      expect(appController.greet()).toBe('Hello World');
    });

    it('should acknowledge client', () => {
      const body = { name: 'Firas' };
      jest.spyOn(appService, 'acknowledgeClient').mockImplementation(() => `Post received from ${body.name}`);
      expect(appController.acknowledge(body)).toBe('Post received from John');
    });
  });
});
