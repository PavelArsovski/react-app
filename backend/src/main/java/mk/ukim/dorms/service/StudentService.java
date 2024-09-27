package mk.ukim.dorms.service;

import mk.ukim.dorms.dto.StudentDTO;

import java.util.List;

public interface StudentService {

    StudentDTO createStudent(StudentDTO studentDTO);

    StudentDTO getStudentById(Long studentId);

    List<StudentDTO> getAllStudents();

    StudentDTO updateStudent(Long studentId, StudentDTO studentDTO);

    void deleteStudent(Long studentId);
}