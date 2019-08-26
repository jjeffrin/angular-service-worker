import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        console.log(data);
        this.userList = data;
      }
    )
  }

}
