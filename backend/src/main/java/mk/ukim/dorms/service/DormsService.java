package mk.ukim.dorms.service;

import mk.ukim.dorms.dto.DormsDTO;
import java.util.List;

public interface DormsService {

    DormsDTO createDorm(DormsDTO dormsDTO);

    DormsDTO getDormsById(Long dormId);

    List<DormsDTO> getAllDorms();

    DormsDTO updateDorms(Long dormId, DormsDTO dormsDTO);

    void deleteDorm(Long dormId);
}