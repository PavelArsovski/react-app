package mk.ukim.dorms.mapper;

import mk.ukim.dorms.dto.StudentDTO;
import mk.ukim.dorms.model.Student;

public class StudentMapper {
    public static StudentDTO mapToStudentDTO(Student student) {
        return new StudentDTO(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getDorms().getId()
        );
    }

    public static Student mapToStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setId(studentDTO.getId());
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        student.setEmail(studentDTO.getEmail());
        return student;
    }
}
