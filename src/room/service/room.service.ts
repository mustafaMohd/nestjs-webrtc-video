import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomModel } from '../schema/room.schema';
import { CreateRoomDto } from '../dto/create.room.dto';
import { HydratedDocument } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@InjectModel(RoomModel.name) private roomModel: Model<Room>) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const room: HydratedDocument<Room> = await this.roomModel.create(
      createRoomDto,
    );

    return room;
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }
}
