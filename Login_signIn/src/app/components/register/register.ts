import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})

export class Register {

  registerForm: FormGroup;
  submitted = false;
  success = '';
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.success = '';
    this.error = '';

    if (this.registerForm.invalid) {
      return;
    }

    const newUser: User = {
      id: 0,
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    const success = this.authService.register(newUser);

    if (!success) {
      this.error = 'Un error ha ocurrido, vuelva a hacerlo';
      return;
    }

    this.success = `Te has registrado yei, ${newUser.username}`;

    this.registerForm.reset();
    this.submitted = false;
  }
  
  get f() {
    return this.registerForm.controls;

  }
}
