import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  fullName: string = '';
  email: string = '';
  dateOfBirth: string = '';
  phoneNumber: string = '';
  nationality: string = '';
  idType: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Implement sign-up logic here
    console.log('Sign-up submitted');
    // After successful sign-up, navigate to the appropriate page
    // this.router.navigate(['/dashboard']);
  }

  onCancel() {
    // Navigate back to the login page or home page
    this.router.navigate(['/login']);
  }

  onLogin() {
    // Implement login logic or navigation
    console.log('Navigating to login page');
    // For example, if you're using Angular Router:
    // this.router.navigate(['/login']);
  }
}