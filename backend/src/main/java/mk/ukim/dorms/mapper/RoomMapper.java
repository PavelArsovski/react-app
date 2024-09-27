package mk.ukim.dorms.mapper;

import mk.ukim.dorms.dto.RoomDTO;
import mk.ukim.dorms.model.Dorms;
import mk.ukim.dorms.model.Room;
import mk.ukim.dorms.model.Student;

public class RoomMapper {

    public static RoomDTO mapToRoomDTO(Room room) {
        return new RoomDTO(
                room.getId(),
                room.getRoomNumber(),
                room.getCapacity(),
                room.getDorm().getId(),
                room.getStudent().getId()
        );
    }

    public static Room mapToRoom(RoomDTO roomDTO, Dorms dorms, Student student) {
        Room room = new Room();
        room.setId(roomDTO.getId());
        room.setRoomNumber(roomDTO.getRoomNumber());
        room.setCapacity(roomDTO.getCapacity());
        room.setDorm(dorms);
        room.setStudent(student);
        return room;
    }
}