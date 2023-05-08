package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Member;
import com.internshiptoolapp.services.MemberService;

@RestController
@RequestMapping("/Member")
public class MemberController {
    
    @Autowired
    private MemberService memberService;

    @GetMapping("/getAllMembers")
    public List<Member> getAllMembers() {
        return memberService.findAll();
    }

    @GetMapping("/getMember/{id}")
    public Member get(@PathVariable Long id) {
        return memberService.findById(id);
    }

    @PostMapping("/createMember")
    public Member create(@RequestBody Member member) {
        return memberService.addMember(member);
    }



    @PostMapping("/newMember")
    public ResponseEntity<Member> addMember(@RequestBody Member member) {
        Member result = memberService.addMember(member);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}
