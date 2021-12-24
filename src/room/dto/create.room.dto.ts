import { ApiProperty } from '@nestjs/swagger';
export class CreateRoomDto {
  @ApiProperty({ type: [String], isArray: true })
  members: string[];
}
