package mk.ukim.dorms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "room_number", nullable = false)
    private String roomNumber;

    @Column(name = "capacity", nullable = false)
    private int capacity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dorm_id", nullable = false)
    private Dorms dorm;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id")
    private Student student;
}