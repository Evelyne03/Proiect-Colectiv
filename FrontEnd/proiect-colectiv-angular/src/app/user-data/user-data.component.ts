import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})


export class UserDataComponent implements OnInit{
  user!: User;

  constructor(private userService: UserService) {}

  /*constructor() {
    this.user = {
      id: 1,
      username: 'John Doe',
      email: 'a@a',
      role: 'member',
      password: '123',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    };
   }*/

   ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      this.user.image = 'https://www.w3schools.com/howto/img_avatar.png';
    })
  }
}
