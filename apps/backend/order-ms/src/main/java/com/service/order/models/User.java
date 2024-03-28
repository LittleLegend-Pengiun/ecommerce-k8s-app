package com.service.order.models;

import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class User {
    private Long userId;
    private String username;
    private String password;
    private String email;
    private String fullName;
    private String address;
    private String phoneNumber;
    private Date dateOfBirth;
    private String gender;
    private Date registrationDate;
    private Boolean isMemberShip;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
}