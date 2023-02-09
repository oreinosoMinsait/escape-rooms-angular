import { ApiEscapeRoomI, EscapeRoomI } from "./escape-rooms.models";

export function transformEscapeRooms(apiEscapeRooms: ApiEscapeRoomI[]): EscapeRoomI[] {

  return apiEscapeRooms.map(
    (room) => ({
      name: room.name,
      image_url: room.avatar,
      address: room.location,
      description: room.description,
      id: room.id,
    })
  )
}

export function transformEscapeRoomId(apiEscapeRoom: ApiEscapeRoomI): EscapeRoomI {

  return {
    name: apiEscapeRoom.name,
    image_url: apiEscapeRoom.avatar,
    address: apiEscapeRoom.location,
    description: apiEscapeRoom.description,
    id: apiEscapeRoom.id,
  }

}