import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private fb   = inject(FormBuilder);

  form = this.fb.group({
    name:     ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  loading  = signal(false);
  apiError = signal('');

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    console.log(this.form.value,"form data");
    this.auth.register(this.form.value as any).subscribe({
      error: (err) => {
        console.log(err)
         this.apiError.set(err.error?.message ?? 'Registration failed.'); this.loading.set(false); 
        }
    });
  }
}
