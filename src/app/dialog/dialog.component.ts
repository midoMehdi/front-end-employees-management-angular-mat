import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  hide = true;
  ngOnInit(): void {
  }

  getErrorMessageEmail(){
    if(this.email.hasError('required')){
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Email not valid.':'';
  }

  getErrorMessagePassword(){
    if (this.password.hasError('required')){
      return 'You must enter a password';
    }
    return '';
  }

}
