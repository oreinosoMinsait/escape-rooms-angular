import { ApiEscapeRoomI, EscapeRoomI } from "./escape-rooms.models";

export function transformEscapeRooms(apiEscapeRooms: ApiEscapeRoomI[]): EscapeRoomI[] {

  return apiEscapeRooms.map(
    (room) => ({
      name: room.name,
      image_url: room.avatar,
      address: room.location,
    })
  )
}
