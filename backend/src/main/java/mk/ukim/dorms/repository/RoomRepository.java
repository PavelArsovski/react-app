package mk.ukim.dorms.repository;

import mk.ukim.dorms.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

}