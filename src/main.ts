import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { RedisClient } from 'redis';
import { ServerOptions } from 'socket.io';
import { createAdapter } from 'socket.io-redis';

const pubClient = new RedisClient({ host: 'localhost', port: 6379 });
const subClient = pubClient.duplicate();
const redisAdapter = createAdapter({ pubClient, subClient });

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new RedisIoAdapter(app));

  await app.listen(3000);
}
bootstrap();
