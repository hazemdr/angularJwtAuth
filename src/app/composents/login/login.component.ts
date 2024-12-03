import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup
  constructor(private fb:FormBuilder, private _user:UserService, private _router:Router){
    
    let controls = {
      email: new FormControl('',[Validators.email , Validators.required] ),
      password: new FormControl('', [Validators.required , Validators.minLength(5)])
    }
    this.loginForm = this.fb.group(controls)
  }
  
  send() {
    this._user.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        // Check if the response contains a valid token
        if (res && res.myToken) {
          sessionStorage.setItem('token', res.myToken);
          this._router.navigate(['/home']);
        } else {
          // If no token is returned, show an error message
          Swal.fire('Error', 'Login failed: No token received', 'error');
        }
      },
      error: (err) => {
        // Handle login error
        console.error(err);
        Swal.fire('Error', 'Login failed: ' + (err.message || 'An error occurred'), 'error');
      }
    });
  }
  
}
