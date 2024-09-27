package mk.ukim.dorms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {

    private Long id;

    private String roomNumber;

    private int capacity;

    private Long dormId;

    private Long studentId;
}