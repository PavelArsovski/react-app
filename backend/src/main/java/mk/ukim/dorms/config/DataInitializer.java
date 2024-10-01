package mk.ukim.dorms.config;

import jakarta.annotation.PostConstruct;
import mk.ukim.dorms.model.User;
import mk.ukim.dorms.model.enumeration.Role;
import mk.ukim.dorms.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {

    public static final String ADMIN = "admin";
    public static final String USER = "user";
    private final UserService userService;

    public DataInitializer(UserService userService) {
        this.userService = userService;
    }

    @PostConstruct
    public void initData() {
        User admin = this.userService.create(ADMIN, ADMIN, Role.ROLE_ADMIN);
        User user = this.userService.create(USER, USER, Role.ROLE_USER);
    }
}