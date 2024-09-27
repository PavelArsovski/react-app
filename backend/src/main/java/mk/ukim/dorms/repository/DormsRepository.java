package mk.ukim.dorms.repository;

import mk.ukim.dorms.model.Dorms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DormsRepository extends JpaRepository<Dorms, Long> {

}