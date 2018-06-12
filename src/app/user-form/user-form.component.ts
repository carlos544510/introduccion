import { Component, EventEmitter, Input,Output } from '@angular/core';
import {User} from "src/app/user";
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {
  @Input() h1Text: string;
  @Input() submitText: string;
  @Input() user: User;
  @Output() onSubmit: EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  submit(){
    this.onSubmit.emit(this.user);
  }
  


}
