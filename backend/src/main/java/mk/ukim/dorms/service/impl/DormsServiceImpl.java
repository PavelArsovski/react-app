package mk.ukim.dorms.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.dorms.dto.DormsDTO;
import mk.ukim.dorms.mapper.DormsMapper;
import mk.ukim.dorms.model.Dorms;
import mk.ukim.dorms.model.exceptions.ResourceNotFoundException;
import mk.ukim.dorms.repository.DormsRepository;
import mk.ukim.dorms.service.DormsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DormsServiceImpl implements DormsService {


    private final DormsRepository dormRepository;

    @Override
    public DormsDTO createDorm(DormsDTO dormsDTO) {
        Dorms dorm = DormsMapper.mapToDorms(dormsDTO);
        Dorms savedDorm = dormRepository.save(dorm);
        return DormsMapper.mapToDormsDTO(savedDorm);
    }

    @Override
    public DormsDTO getDormsById(Long dormId) {
        Dorms dorm = dormRepository.findById(dormId)
                .orElseThrow(() -> new ResourceNotFoundException("Dorm was not found with id: " + dormId));
        return DormsMapper.mapToDormsDTO(dorm);
    }

    @Override
    public List<DormsDTO> getAllDorms() {
        return dormRepository.findAll()
                .stream()
                .map(DormsMapper::mapToDormsDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DormsDTO updateDorms(Long dormId, DormsDTO dormsDTO) {
        Dorms dorm = dormRepository.findById(dormId)
                .orElseThrow(() -> new ResourceNotFoundException("Dorm was not found with id: " + dormId));
        dorm.setDormName(dormsDTO.getDormName());
        dorm.setDormDescription(dormsDTO.getDormDescription());
        Dorms updatedDorm = dormRepository.save(dorm);
        return DormsMapper.mapToDormsDTO(updatedDorm);
    }

    @Override
    public void deleteDorm(Long dormId) {
        Dorms dorm = dormRepository.findById(dormId)
                .orElseThrow(() -> new ResourceNotFoundException("Dorm was not found with id: " + dormId));
        dormRepository.deleteById(dormId);
    }
}