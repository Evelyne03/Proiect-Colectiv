package com.internshiptoolapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.repository.TeamRepo;

@Service
public class TeamService {

    private final TeamRepo teamRepository;

    @Autowired
    public TeamService(TeamRepo teamRepository) {
        this.teamRepository = teamRepository;
    }

    // Add methods to handle CRUD operations
}
