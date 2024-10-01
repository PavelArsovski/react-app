package mk.ukim.dorms.service;

import mk.ukim.dorms.model.User;
import mk.ukim.dorms.model.enumeration.Role;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User create(String username, String password, Role role);
}