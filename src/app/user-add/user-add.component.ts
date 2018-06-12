import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public user: User;
  constructor() { }

  ngOnInit() {
  }

  add(name: string, telephone: string){
    console.log(name);
    const url = 'http://localhost:4000/api/v1/users';
    var formData = new FormData();
    formData.append("name", name);
    formData.append("telephone", telephone);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.send(formData);

  }

}
