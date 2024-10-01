package mk.ukim.dorms.mapper;

import mk.ukim.dorms.dto.DormsDTO;
import mk.ukim.dorms.model.Dorms;

public class DormsMapper {
    public static DormsDTO mapToDormsDTO(Dorms dorms) {
        return new DormsDTO(
                dorms.getId(),
                dorms.getDormName(),
                dorms.getDormDescription()
        );
    }

    public static Dorms mapToDorms(DormsDTO dormsDTO) {
        return new Dorms(
                dormsDTO.getId(),
                dormsDTO.getDormName(),
                dormsDTO.getDormDescription()
        );
    }
}