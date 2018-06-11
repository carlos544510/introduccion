import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UsersService} from "src/app/users.service";
import {User} from "src/app/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: User;
  constructor(private route: ActivatedRoute,private usersService: UsersService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        var req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:4000/api/v1/users/'+id, false); 
        req.send(null);
         this.user = JSON.parse(req.responseText);
        console.log(this.user);
  }

}
