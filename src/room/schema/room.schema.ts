import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Room {
  members: [];
}

// 2. Create a Schema corresponding to the document interface.
const roomSchema = new Schema<Room>({
  members: [{ type: String, required: true }],
});

// 3. Create a Model.
export const RoomModel = model<Room>('Room', roomSchema);
