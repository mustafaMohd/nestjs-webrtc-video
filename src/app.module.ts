import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageGateway } from './video-call/video-call-getway';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/videoChat'),
    RoomModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, MessageGateway],
})
export class AppModule {}
