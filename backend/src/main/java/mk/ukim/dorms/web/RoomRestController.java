package mk.ukim.dorms.web;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.RoomDTO;
import mk.ukim.dorms.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/rooms")
@AllArgsConstructor
public class RoomRestController {

    private final RoomService roomService;

    @PostMapping
    public ResponseEntity<RoomDTO> createRoom(@RequestBody RoomDTO roomDTO) {
        RoomDTO savedRoom = roomService.createRoom(roomDTO);
        return new ResponseEntity<>(savedRoom, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<RoomDTO> getRoomById(@PathVariable("id") Long roomId) {
        RoomDTO roomDTO = roomService.getRoomById(roomId);
        return new ResponseEntity<>(roomDTO, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<RoomDTO>> getAllRooms() {
        List<RoomDTO> roomDtoList = roomService.getAllRooms();
        return new ResponseEntity<>(roomDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<RoomDTO> updateRoom(@PathVariable("id") Long roomId,
                                              @RequestBody RoomDTO roomDTO) {
        RoomDTO updatedRoom = roomService.updateRoom(roomId, roomDTO);
        return new ResponseEntity<>(updatedRoom, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable("id") Long roomId) {
        roomService.deleteRoom(roomId);
        return ResponseEntity.noContent().build();
    }
}