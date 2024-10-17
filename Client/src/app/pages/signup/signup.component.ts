import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  passwordsDoNotMatch: boolean = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    this.signupForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  validatePasswords(): void {
    const { password, confirmPassword } = this.signupForm.value;
    this.passwordsDoNotMatch = password !== confirmPassword;
  }

  onSubmit(): void {
    if (!this.passwordsDoNotMatch) {
      alert('Sign-up successful!');
    }
  }
}
