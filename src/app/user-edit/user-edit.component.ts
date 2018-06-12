import { Component, OnInit } from '@angular/core';
import {UsersService} from "src/app/users.service";
import {User} from "src/app/user";
import {ActivatedRoute, Router} from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
const cudOptions ={headers: new HttpHeaders({'content-Type':'aplication/json'})};
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User;
  
  
  constructor(
   
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private http: HttpClient

  ) { }

  ngOnInit() {
    
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        var req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:4000/api/v1/users/'+id, false); 
        req.send(null);
         this.user = JSON.parse(req.responseText);
        
  }

  update(user:User){
    // let usersUrl: string ='http://localhost:4000/api/v1/update/users/'+user.id;
    // this.http.put(usersUrl, {params: user}, cudOptions);
    // console.log("hola");
       const id = user.id;
         console.log(user.name);
         var formData = new FormData();
         formData.append("name", user.name);
         formData.append("telephone", user.telephone);
        
         //var json = JSON.stringify(data);
         console.log(formData);
         const url = 'http://localhost:4000/api/v1/update/users/';

         var xhr = new XMLHttpRequest();
         xhr.open("POST", url+id);
         xhr.send(formData);
         
        
        
        // req.setRequestHeader('Content-type','application/json; charset=utf-8');
       
        
      
        
        
  }

}
