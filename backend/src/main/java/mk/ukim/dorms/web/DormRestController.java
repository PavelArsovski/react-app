package mk.ukim.dorms.web;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.DormsDTO;
import mk.ukim.dorms.service.DormsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/dorms")
@AllArgsConstructor
public class DormRestController {

    @Autowired
    private final DormsService dormsService;

    @PostMapping
    public ResponseEntity<DormsDTO> createDorm(@RequestBody DormsDTO dormsDTO) {
        DormsDTO newDorm = dormsService.createDorm(dormsDTO);
        return new ResponseEntity<>(newDorm, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DormsDTO> getDormById(@PathVariable("id") Long dormId) {
        DormsDTO dormsDTO = dormsService.getDormsById(dormId);
        return new ResponseEntity<>(dormsDTO, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<DormsDTO>> getAllDorms() {
        List<DormsDTO> dormDtoList = dormsService.getAllDorms();
        return new ResponseEntity<>(dormDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<DormsDTO> updateDorm(@PathVariable("id") Long dormId,
                                               @RequestBody DormsDTO dormsDTO) {
        DormsDTO updatedDorm = dormsService.updateDorms(dormId, dormsDTO);
        return new ResponseEntity<>(updatedDorm, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDorm(@PathVariable("id") Long dormId) {
        dormsService.deleteDorm(dormId);
        return new ResponseEntity<>("Delete Dorm Successfully", HttpStatus.OK);
    }
}