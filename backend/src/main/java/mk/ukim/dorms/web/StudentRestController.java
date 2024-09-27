package mk.ukim.dorms.web;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.StudentDTO;
import mk.ukim.dorms.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/students")
@AllArgsConstructor
public class StudentRestController {

    private final StudentService studentService;

    @PostMapping
    public ResponseEntity<StudentDTO> createStudent(@RequestBody StudentDTO studentDTO) {
        StudentDTO savedStudent = studentService.createStudent(studentDTO);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDTO> getStudentById(@PathVariable("id") Long studentId) {
        StudentDTO studentDTO = studentService.getStudentById(studentId);
        return new ResponseEntity<>(studentDTO, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<StudentDTO> studentDtoList = studentService.getAllStudents();
        return new ResponseEntity<>(studentDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<StudentDTO> updateStudent(@PathVariable("id") Long studentId,
                                                    @RequestBody StudentDTO studentDTO) {
        StudentDTO updatedStudentDto = studentService.updateStudent(studentId, studentDTO);
        return new ResponseEntity<>(updatedStudentDto, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId) {
        studentService.deleteStudent(studentId);
        return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);
    }
}