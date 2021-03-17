import { Connection } from "./raw";
import { MessageToken, Room, UUID } from "./entities";
export declare const wrap: (connection: Connection) => {
    getTopPublicRooms: () => Promise<Room[]>;
    joinRoom: (id: UUID) => Promise<void>;
    sendRoomChatMsg: (ast: MessageToken[], whisperedTo?: string[]) => Promise<void>;
    leaveRoom: (): Promise<{ roomId: UUID }> => connection.fetch("leave_room", {}, "you_left_room"),
};