package com.EcomAnalytics_Engine.SpringBoot_Backend.repository;

import org.springframework.stereotype.Repository;
import com.EcomAnalytics_Engine.SpringBoot_Backend.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
}
