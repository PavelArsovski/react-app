package mk.ukim.dorms.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.StudentDTO;
import mk.ukim.dorms.mapper.StudentMapper;
import mk.ukim.dorms.model.Dorms;
import mk.ukim.dorms.model.Student;
import mk.ukim.dorms.model.exceptions.ResourceNotFoundException;
import mk.ukim.dorms.repository.DormsRepository;
import mk.ukim.dorms.repository.StudentRepository;
import mk.ukim.dorms.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final DormsRepository dormsRepository;

    @Override
    public StudentDTO createStudent(StudentDTO studentDTO) {
        Student student = StudentMapper.mapToStudent(studentDTO);

        Dorms dorm = dormsRepository.findById(studentDTO.getDormId())
                .orElseThrow(() -> new ResourceNotFoundException("Dorm was not found with id: "
                        + studentDTO.getDormId()));
        student.setDorms(dorm);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDTO(savedStudent);
    }

    @Override
    public StudentDTO getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow(() ->
                new ResourceNotFoundException("Student was not found with given id: " + studentId));
        return StudentMapper.mapToStudentDTO(student);
    }

    @Override
    public List<StudentDTO> getAllStudents() {
        List<Student> studentList = studentRepository.findAll();
        return studentList.stream()
                .map(StudentMapper::mapToStudentDTO)
                .collect(Collectors.toList());
    }

    @Override
    public StudentDTO updateStudent(Long studentId, StudentDTO studentDTO) {
        Student student = studentRepository.findById(studentId).orElseThrow(() ->
                new ResourceNotFoundException("Student was not found with given id: " + studentId));

        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        student.setEmail(studentDTO.getEmail());

        Dorms dorm = dormsRepository.findById(studentDTO.getDormId())
                .orElseThrow(() -> new ResourceNotFoundException("Dorm was not found with id: "
                        + studentDTO.getDormId()));
        student.setDorms(dorm);

        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDTO(savedStudent);
    }

    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId).orElseThrow(() ->
                new ResourceNotFoundException("Student was not found with given id: " + studentId));
        studentRepository.deleteById(studentId);
    }
}