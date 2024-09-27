package mk.ukim.dorms.service;

import mk.ukim.dorms.dto.RoomDTO;

import java.util.List;

public interface RoomService {

    RoomDTO createRoom(RoomDTO roomDTO);

    RoomDTO getRoomById(Long roomId);

    List<RoomDTO> getAllRooms();

    RoomDTO updateRoom(Long roomId, RoomDTO roomDTO);

    void deleteRoom(Long roomId);
}