package mk.ukim.dorms.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.RoomDTO;
import mk.ukim.dorms.mapper.RoomMapper;
import mk.ukim.dorms.model.Dorms;
import mk.ukim.dorms.model.Room;
import mk.ukim.dorms.model.Student;
import mk.ukim.dorms.model.exceptions.ResourceNotFoundException;
import mk.ukim.dorms.repository.DormsRepository;
import mk.ukim.dorms.repository.RoomRepository;
import mk.ukim.dorms.repository.StudentRepository;
import mk.ukim.dorms.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;
    private final DormsRepository dormsRepository;
    private final StudentRepository studentRepository;

    @Override
    public RoomDTO createRoom(RoomDTO roomDTO) {
        Dorms dorm = dormsRepository.findById(roomDTO.getDormId())
                .orElseThrow(() -> new ResourceNotFoundException("Dorm not found with id: " + roomDTO.getDormId()));

        Student student = studentRepository.findById(roomDTO.getStudentId())
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + roomDTO.getStudentId()));

        Room room = RoomMapper.mapToRoom(roomDTO, dorm, student);

        Room savedRoom = roomRepository.save(room);

        return RoomMapper.mapToRoomDTO(savedRoom);
    }

    @Override
    public RoomDTO getRoomById(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
        return RoomMapper.mapToRoomDTO(room);
    }

    @Override
    public List<RoomDTO> getAllRooms() {
        return roomRepository.findAll()
                .stream()
                .map(RoomMapper::mapToRoomDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RoomDTO updateRoom(Long roomId, RoomDTO roomDTO) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));

        room.setRoomNumber(roomDTO.getRoomNumber());
        room.setCapacity(roomDTO.getCapacity());

        Dorms dorm = dormsRepository.findById(roomDTO.getDormId())
                .orElseThrow(() -> new ResourceNotFoundException("Dorm not found with id: " + roomDTO.getDormId()));
        room.setDorm(dorm);


        Student student = studentRepository.findById(roomDTO.getStudentId())
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + roomDTO.getStudentId()));
        room.setStudent(student);

        Room updatedRoom = roomRepository.save(room);
        return RoomMapper.mapToRoomDTO(updatedRoom);
    }

    @Override
    public void deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
        roomRepository.deleteById(roomId);
    }
}