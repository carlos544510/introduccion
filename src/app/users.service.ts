import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators';

const cudOptions ={headers: new HttpHeaders({'content-Type':'aplication/json'})};

@Injectable()
export class UsersService {
  private usersUrl: string ='http://localhost:4000/api/v1/users';
  constructor(private http: HttpClient) { 

  }

  getProductos(): Observable<User[]>{
  
    return this.http.get<User[]>(this.usersUrl);    
 }

  getUsers (): Observable<User[]>{
    return this.http.get<User []>(this.usersUrl)
    .pipe(catchError(this.handleError));
  }

  getUser (id: string | number): Observable<User>{
    //const url = `${this.usersUrl}/${id}`;
    const url = 'http://localhost:4000/api/v1/users'+id;
    
    return this.http.get<User>(url);
        
  }

  addUser (user: User): Observable<User>{
    const newUser = Object.assign({}, user);
    return this.http.post<User>(this.usersUrl, newUser, cudOptions).pipe(catchError(this.handleError));
  }

  updateUser (user: User): Observable<User>{
    return this.http.put(this.usersUrl, user, cudOptions)
    .pipe(catchError(this.handleError));
  }

  deleteUser (user: User | number): Observable<User>{
    const id = typeof user === 'number'? user: user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url,cudOptions)
    .pipe(catchError(this.handleError));
  }
 
  private handleError(error: any){
    console.error(error);
    return Observable.throw(error);
  }
}
