package mk.ukim.dorms.repository;

import mk.ukim.dorms.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}