package com.internshiptoolapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.repository.TaskRepo;

@Service
public class TaskService {

    private final TaskRepo taskRepository;

    @Autowired
    public TaskService(TaskRepo taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Add methods to handle CRUD operations
}
