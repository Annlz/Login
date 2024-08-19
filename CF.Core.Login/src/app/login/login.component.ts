import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, SignUpComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showSignUp = false;

  onSubmit() {
    // Implement login logic here
    console.log('Login submitted', this.email, this.password);
  }

  onForgotPassword() {
    // Implement forgot password logic here
    console.log('Forgot password clicked');
  }

  onRegister() {
    // Implement registration logic here
    console.log('Register clicked');
  }

  toggleSignUp(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.showSignUp = !this.showSignUp;
  }
}