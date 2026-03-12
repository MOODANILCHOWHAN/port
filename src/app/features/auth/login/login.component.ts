import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private auth = inject(AuthService);
  private fb   = inject(FormBuilder);

  form     = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  loading  = signal(false);
  apiError = signal('');

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true); this.apiError.set('');
    this.auth.login(this.form.value as any).subscribe({
      error: (err) => { this.apiError.set(err.error?.message ?? 'Login failed.'); this.loading.set(false); },
    });
  }
}
