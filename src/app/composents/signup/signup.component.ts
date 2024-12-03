import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormBuilder,Validators,FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  registerForm : FormGroup
  constructor(private fb:FormBuilder, private _user:UserService,private _router:Router){
    let controls = {
     name: new FormControl("", [
        Validators.minLength(3),Validators.required
      ]),
      lastname: new FormControl("", [
        Validators.minLength(3),Validators.required
      ]),
      email: new FormControl("", [
        Validators.email,Validators.required
      ]),
      password: new FormControl("", [
        Validators.minLength(6),Validators.required,
      ])
    

    }
    this.registerForm = this.fb.group(controls)
  }
send(){
  this._user.signup(this.registerForm.value).subscribe({
    next:(res)=>{

      
this._router.navigate(['/login'])
Swal.fire({
  title: "saved user!",
  text: "You clicked the button!",
  icon: "success"
});




    },error:(err)=>{
      console.log(err);
      
      
    }
  })
  

}

}
