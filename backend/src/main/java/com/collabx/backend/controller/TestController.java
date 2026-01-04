package com.collabx.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/api/health")
    public String health() {
        return "CollabX Backend Running";
    }
}

