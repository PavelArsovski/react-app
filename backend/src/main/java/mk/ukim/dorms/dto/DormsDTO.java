package mk.ukim.dorms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class DormsDTO {

    private Long id;

    private String dormName;

    private String dormDescription;
}